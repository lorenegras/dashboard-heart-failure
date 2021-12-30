from flask_restful import Resource
from flask import jsonify
from BLL.AgeCholesterolBLL import AgeCholesterolBLL

class AgeCholesterolController(Resource):
    def get(self):
        ageCholesterolBll = AgeCholesterolBLL()
        list_ageCholesterolBll = ageCholesterolBll.getAll() #DTO List
        json_ageCholesterol = [{'age': ageCholesterol.get_age(), 'cholesterolRate': ageCholesterol.get_cholesterol()} for ageCholesterol in list_ageCholesterolBll] #Json
        return jsonify(json_ageCholesterol)