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

    try:
        with open('app/static/messages.txt', 'a') as messages:
            messages.write('Message from ' + data['name'] + '\n\n')
            messages.write(data['message'] + '\n\n')
            messages.write('Messenger\'s email: ' + data['email'] + '\n\n')
            messages.write('==========================\n\n')
    except:
        traceback.print_exc()
        status_code = 500

    return jsonify({}), status_code
