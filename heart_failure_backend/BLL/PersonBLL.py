
from DAL.PersonDAL import PersonDAL

class PersonBLL():
    def getAll(self):
        personDAL = PersonDAL()
        data = personDAL.getAll()
        return data