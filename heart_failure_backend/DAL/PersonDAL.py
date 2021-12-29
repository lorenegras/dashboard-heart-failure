import pandas as pd
from DTO.PersonDTO import PersonDTO
class PersonDAL():
    def getAll(self):
        df_persons = pd.read_csv('data/heart.csv')
        return df_persons #send a dataframe