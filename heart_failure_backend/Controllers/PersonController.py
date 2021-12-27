from flask_restful import Resource
from BLL.PersonBLL import PersonBLL

class PersonController(Resource):
    def get(self):
        personBll = PersonBLL()
        return personBll.getAll()

    