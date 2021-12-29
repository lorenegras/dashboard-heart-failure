
from DAL.PersonDAL import PersonDAL
from DTO.AgeHeartDiseaseDTO import AgeHeartDiseaseDTO

class AgeHeartDiseaseBLL():
    def getAll(self):
        personDAL = PersonDAL()
        df_data = personDAL.getAll()
        # ToDo pandas
        list_of_persons = [(AgeHeartDiseaseDTO(row.Age, row.HeartDisease)) for index, row in df_data.iterrows() ]
        return list_of_persons