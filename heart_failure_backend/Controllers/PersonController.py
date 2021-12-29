from flask_restful import Resource
from flask import jsonify
from BLL.PersonBLL import PersonBLL

class PersonController(Resource):
    def get(self):
        personBll = PersonBLL()
        list_all_persons = personBll.getAll()
        json_all_persons = [{'age': person.get_age(), 'sexe': person.get_sex()} for person in list_all_persons]
        return jsonify(json_all_persons)