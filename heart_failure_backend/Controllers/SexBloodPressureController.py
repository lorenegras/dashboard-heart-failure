from flask_restful import Resource
from flask import jsonify
from BLL.SexBloodPressureBLL import SexBloodPressureBLL

class SexBloodPressureController(Resource):
    def get(self):
        sexBloodPressureBll = SexBloodPressureBLL()
        list_sexBloodPressureBll = sexBloodPressureBll.getAll() #DTO List
        json_sexBloodPressure = [{'sex': sexBloodPressure.get_sex(), 'bloodPressure': sexBloodPressure.get_blood_pressure()} for sexBloodPressure in list_sexBloodPressureBll] #Json
        return jsonify(json_sexBloodPressure)