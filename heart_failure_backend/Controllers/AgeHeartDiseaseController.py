from flask_restful import Resource
from flask import jsonify

from BLL.AgeHeartDiseaseBLL import AgeHeartDiseaseBLL

class AgeHeartDiseaseController(Resource):
    def get(self):
        ageHeartDiseaseBll = AgeHeartDiseaseBLL()
        list_ageHeartDiseaseBll = ageHeartDiseaseBll.getAll()
        json_ageHeartDisease = [{'age': ageHeartDisease.get_age(), 'heartdisease': ageHeartDisease.get_heart_disease()} for ageHeartDisease in list_ageHeartDiseaseBll]
        return jsonify(json_ageHeartDisease)