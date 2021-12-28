from flask import Flask
from flask_restful import  Api
from flask_cors import CORS

from Controllers.PersonController import PersonController
# from Controllers.LineController import LineController
# from Controllers.PieController import Piecontroller
# from Controllers.BarController import BarController

app = Flask(__name__)
api = Api(app)

cors = CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

api.add_resource(PersonController, '/', '/persons')

if __name__ == '__main__':
    app.run(debug=True)