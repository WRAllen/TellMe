# -*- coding:utf-8 -*-
from . import main
from app.main.controller import *
from flask import render_template, request



@main.route('/')
def index():
    return render_template('main/index.html')


@main.route('/ajax/show_label', methods=["POST"])
def show_label():
    file = request.files['fileUpload']
    filename = upload_file('/app/static/upload/',file)
    label = return_label(filename)
    
    return str(label)


