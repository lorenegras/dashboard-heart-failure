from flask_restful import reqparse, Resource
from BLL.MessageBLL import MessagedBLL

parser = reqparse.RequestParser()
parser.add_argument('pie')
parser.add_argument('line')
parser.add_argument('bar')

class PersonController(Resource):
    def get(self):
        return ""

    