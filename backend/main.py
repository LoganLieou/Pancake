import os
from flask import Flask, request
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/upload", methods=["POST", "GET"])
def upload_file():
   if (request.method == "POST"):
      if "file" not in request.files:
         print("ERROR")
         return "ERROR"
      else:
         file = request.files['file']
         filename = secure_filename(file.filename)
         file.save(os.path.join("UPLOAD/", filename))
         # run model on the file
         return {
            "predictions": [0.0, 0.2, 0.5, 0.1, 0.1, 0.1]
         }
