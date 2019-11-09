import datetime
import tensorflow.compat.v1 as tf
tf.disable_v2_behavior()
import numpy as np

# 필요한 모듈을 불러온다
from flask import Flask, request, jsonify
from flask_cors import CORS
# Flask App 생성한다
app = Flask(__name__)
cors = CORS(app, resources={
  r"/detail/*": {"origin": "*"},
  r"/api/*": {"origin": "*"},
})

X = tf.placeholder(tf.float32, shape=[None, 4])
Y = tf.placeholder(tf.float32, shape=[None, 1])
W = tf.Variable(tf.random_normal([4, 1]), name="weight")
b = tf.Variable(tf.random_normal([1]), name="bias")

# 가설을 설정합니다.
hypothesis = tf.matmul(X, W) + b

# 저장된 모델을 불러오는 객체를 선언합니다.
saver = tf.train.Saver()
model = tf.global_variables_initializer()

# 세션 객체를 생성합니다.
sess = tf.Session()
sess.run(model)

# 저장된 모델을 세션에 적용합니다.
save_path = "./model/savedJosun.cpkt"
saver.restore(sess, save_path)

# 웹서버 라우터
@app.route('/test', methods = ['GET'])
def hello_world():
    return jsonify({"name":"수원화성"})

@app.route('/detail/input', methods = ['POST'])
def userLogin():
    # 입력된 json 데이터를 받아옴
    avgTemp = float(request.json['avgTemp'])
    minTemp = float(request.json['minTemp'])
    maxTemp = float(request.json['maxTemp'])
    rainFall = float(request.json['rainFall'])
    result = 0

    # 입력된 파라미터를 배열 형태로 준비합니다.
    data = ((avgTemp, minTemp, maxTemp, rainFall), (0, 0, 0, 0))
    arr = np.array(data, dtype=np.float32)

    # 입력 값을 토대로 예측 값을 찾아냅니다.
    x_data = arr[0:4]
    dict = sess.run(hypothesis, feed_dict={X: x_data})
    result = dict[0]
    result=int(result)

    # 결과값 데이터를 전송
    return jsonify({"name" : result})

if __name__ == '__main__':
        app.run(port=8008, debug=True)
