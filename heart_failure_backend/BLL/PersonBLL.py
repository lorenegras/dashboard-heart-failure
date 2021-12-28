
from DAL.PersonDAL import PersonDAL
from DTO.PersonDTO import PersonDTO

class PersonBLL():
    def getAll(self):
        personDAL = PersonDAL()
        df_data = personDAL.getAll()
        list_of_persons = [(PersonDTO(row.Age, row.Sex, row.Cholesterol, row.RestingBP, row.HeartDisease)) for index, row in df_data.iterrows() ]
        return list_of_persons