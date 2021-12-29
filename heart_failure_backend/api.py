from flask import Flask
from flask_restful import  Api
from flask_cors import CORS

from Controllers.PersonController import PersonController
from Controllers.AgeHeartDiseaseController import AgeHeartDiseaseController
# from Controllers.LineController import LineController
# from Controllers.PieController import Piecontroller
# from Controllers.BarController import BarController

app = Flask(__name__)
api = Api(app)


cors = CORS(app, resources={r"/*": {"origins": "*"}})

api.add_resource(PersonController, '/', '/persons')
api.add_resource(AgeHeartDiseaseController,'/ageheartdisease')

if __name__ == '__main__':
    app.run(debug=True)