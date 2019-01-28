# -*- coding:utf-8 -*-
from . import main
from app.main.controller import *
from flask import render_template



@main.route('/')
def index():
    return render_template('main/index.html')


@main.route('/show_label')
def show_label():
    label = return_label()
    print("==========",label)
    return "您上传的数字是:"+str(label)