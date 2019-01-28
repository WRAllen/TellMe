from tensorflow.examples.tutorials.mnist import input_data
import tensorflow as tf
import numpy as np
from PIL import Image
from config import BASE_PATH
import os

#创建权重的随机噪点
def weight_variable(shape, name):
  initial = tf.truncated_normal(shape, stddev=0.1)
  return tf.Variable(initial, name=name)


def bias_variable(shape, name):
  initial = tf.constant(0.1, shape=shape)
  return tf.Variable(initial, name=name)

#二维卷积函数和卷积模板移动的步长（都是１表示不会遗漏任何一个点）
def conv2d(x, W):
  return tf.nn.conv2d(x, W, strides=[1, 1, 1, 1], padding='SAME')

#max_pool最大池化和移动的长（便是横竖两个方向以２为步长）
def max_pool_2x2(x):
  return tf.nn.max_pool(x, ksize=[1, 2, 2, 1],
                        strides=[1, 2, 2, 1], padding='SAME') 

def return_label(filename):
    ###重新设置图
    tf.reset_default_graph()
    #定义神经网络-start
    # 定义输入和编写输入形状将1D转回原来的2D                     
    x = tf.placeholder(tf.float32, [None, 784])
    y_ = tf.placeholder(tf.float32, [None, 10])
    x_image = tf.reshape(x, [-1,28,28,1])
    # 第一次卷积层提取３２中特征
    W_conv1 = weight_variable([5, 5, 1, 32], 'W_conv1')
    b_conv1 = bias_variable([32], "b_conv1")
    h_conv1 = tf.nn.relu(conv2d(x_image, W_conv1) + b_conv1)
    h_pool1 = max_pool_2x2(h_conv1)
    # 第二层卷积层提取６４种特征
    W_conv2 = weight_variable([5, 5, 32, 64], 'W_conv2')
    b_conv2 = bias_variable([64], 'b_conv2')
    h_conv2 = tf.nn.relu(conv2d(h_pool1, W_conv2) + b_conv2)
    h_pool2 = max_pool_2x2(h_conv2)
    # 再将第二个卷积层的输出进行变形再转为1D,然后再接上一个全连接层
    W_fc1 = weight_variable([7 * 7 * 64, 1024], "W_fc1")
    b_fc1 = bias_variable([1024], 'b_fc1')
    h_pool2_flat = tf.reshape(h_pool2, [-1, 7*7*64])
    h_fc1 = tf.nn.relu(tf.matmul(h_pool2_flat, W_fc1) + b_fc1)
    # 防止过拟合设置dropout层
    keep_prob = tf.placeholder(tf.float32)
    h_fc1_drop = tf.nn.dropout(h_fc1, keep_prob)
    # 最后再接连一个softmax层
    W_fc2 = weight_variable([1024, 10], 'W_fc2')
    b_fc2 = bias_variable([10], 'b_fc2')
    y_conv=tf.nn.softmax(tf.matmul(h_fc1_drop, W_fc2) + b_fc2)

    
    #定义神经网络-end
    with tf.Session() as sess:
        init_op = tf.global_variables_initializer()
        sess.run(init_op)

        #读取之前保存的训练模型
        saver = tf.train.Saver()
        saver.restore(sess, BASE_PATH+"/app/main/my_net/net.ckpt")
        #导入照片
        image_path = BASE_PATH+"/app/static/upload/"+filename
        img = Image.open(image_path).convert('L')#灰度图(L)
        img_shape = np.reshape(img, 784)
        real_x = np.array([1-img_shape])# 0-255 uint8   8位无符号整数，取值：[0, 255] 如果采用1-大数变成小数
        y = sess.run(y_conv, feed_dict={x: real_x,keep_prob: 1.0}) #y类似一个二维表，因为只有一张图片所以只有一行，y[0]包含10个值，
        return np.argmax(y[0])





def upload_file(path, file):
    '''
    上传文件
    '''
    path = BASE_PATH + path
    file.save(os.path.join(path, str(file.filename)))

    return file.filename


