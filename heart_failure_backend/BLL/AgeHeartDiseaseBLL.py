
from DAL.PersonDAL import PersonDAL
from DTO.AgeHeartDiseaseDTO import AgeHeartDiseaseDTO
import pandas as pd
class AgeHeartDiseaseBLL():
    def getAll(self):
        personDAL = PersonDAL()
        df_data = personDAL.getAll() #dataframe
        # ToDo pandas
        df_age_heartdisease = df_data[['Age', 'HeartDisease']]
        age_cat = pd.cut(df_age_heartdisease['Age'], bins=4, labels=["de 28 à 40 ans", "de 41 à 52 ans", "de 53 à 65 ans", "de 66 à 77 ans"])
        df_age_heartdisease['AgeCat'] = age_cat
        df_age_cat_heartdisease = df_age_heartdisease.drop(columns="Age")
        sort_df_age_cat_heartdisease = df_age_cat_heartdisease.sort_values(by=['AgeCat'])
        group = sort_df_age_cat_heartdisease.groupby(['AgeCat', 'HeartDisease']).size()
        df_group_heartdisease = pd.DataFrame({'CountHeartDisease':group}).reset_index()                                                                                                 
        list_of_persons = [(AgeHeartDiseaseDTO(row.AgeCat, row.HeartDisease, row.CountHeartDisease)) for index, row in df_group_heartdisease.iterrows() ] #DTO List
        return list_of_persons