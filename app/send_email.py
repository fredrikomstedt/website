# This file contains functions used for sending messages over email.
#
# Author: Fredrik Omstedt
# Date: 2018-11-10

from config import email, password
import traceback
import smtplib
import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_message(file):
    success = True
    data = open(file, 'r').read()
    if not data:
        return success
    fromaddr = email
    toaddr = email

    try:
        msg = MIMEMultipart()
        msg['From'] = fromaddr
        msg['To'] = toaddr
        msg['Subject'] = "Today's messages from your website!"
        body = data

        msg.attach(MIMEText(body, 'plain'))
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(email, password)

        text = msg.as_string()
        server.sendmail(fromaddr, toaddr, text)
    except:
        traceback.print_exc()
        success = False

    if success:
        open(file, 'w').close();

    return success

if __name__ == '__main__':
    script_dir = os.path.dirname(__file__)
    send_message(script_dir + '/static/messages.txt')
