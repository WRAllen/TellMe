# -*- coding:utf-8 -*-
import os

BASE_PATH = os.getcwd()
class Config(object):
    SECRET_KEY = "Ay98Cct2oNSlnHDdTl8"
    @staticmethod
    def init_app(app):
        pass

class DemoConfig(Config):
    '''
        调试
        连接数据库
    '''
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:123456@localhost:3306/test_db"


class TestConfig(Config):
    '''
        测试数据库
        调试
        连接数据库
    '''
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:123456@localhost:3306/talk_db"


config = {'normal':DemoConfig, 'test':TestConfig}
