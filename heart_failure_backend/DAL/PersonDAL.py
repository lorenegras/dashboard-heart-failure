import pandas as pd
from DTO.PersonDTO import PersonDTO

class PersonDAL():
    def getAll(self):
        df_persons = pd.read_csv('data/heart.csv')
        return df_persons
    
    # def get_age_cholesterol(self):
    #     df_persons = pd.read_csv('data/heart.csv')
    #     df_age_cholesterol = df_persons[['Age', 'Cholesterol']]
    #     return df_age_cholesterol

    # def get_age_heart_disease(self):
    #     return ''
    
    # def get_sex_blood_pressure(self):
    #     return ''