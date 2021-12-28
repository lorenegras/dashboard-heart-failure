from flask_restful import Resource
from heart_failure_backend.BLL.PersonBLL import PersonBLL

class PersonController(Resource):
    def get(self):
        personBll = PersonBLL()
        return personBll.getAll()

    