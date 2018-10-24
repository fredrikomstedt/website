# This file contains all endpoints used by the website to store and
# retrieve data.
#
# Author: Fredrik Omstedt
# Date: 2018-10-16

from app import app
from flask import render_template, jsonify, request
from app.config import email, password
import traceback
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Routes the address to show the interface html file
@app.route('/')
@app.route('/index')
def index():
    return render_template('website.html')

# Receives a message from front end and send to email address.
@app.route('/send_message', methods=['POST'])
def send_message():
    status_code = 200
    data = request.get_json()
    fromaddr = email
    toaddr = email

    try:
        msg = MIMEMultipart()
        msg['From'] = fromaddr
        msg['To'] = toaddr
        msg['Subject'] = data['name'] + " sent a message from your website!"
        body = data['message'] + '\n\n Here\'s my email: ' + data['email']

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
        status_code = 500

    return jsonify({}), status_code
