from . import main
from flask import render_template, request,flash



@main.route('/')
def index():
	return "success"












