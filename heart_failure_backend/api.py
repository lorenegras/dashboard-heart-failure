from flask import Flask
from flask_restful import  Api
from flask_cors import CORS

from Controllers.PersonController import PersonController
from Controllers.AgeHeartDiseaseController import AgeHeartDiseaseController
from Controllers.AgeCholesterolController import AgeCholesterolController
from Controllers.SexBloodPressureController import SexBloodPressureController

app = Flask(__name__)
api = Api(app)


cors = CORS(app, resources={r"/*": {"origins": "*"}})

api.add_resource(PersonController, '/', '/persons')
api.add_resource(AgeHeartDiseaseController,'/ageheartdisease')
api.add_resource(AgeCholesterolController,'/agecholesterol')
api.add_resource(SexBloodPressureController,'/sexbloodpressure')

if __name__ == '__main__':
    app.run(debug=True)