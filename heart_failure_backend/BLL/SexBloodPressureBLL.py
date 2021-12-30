from DAL.PersonDAL import PersonDAL
import pandas as pd
from DTO.SexBloodPressureDTO import SexBloodPressureDTO
class SexBloodPressureBLL():
    def getAll(self):
        personDAL = PersonDAL()
        df_data = personDAL.getAll() #dataframe
        # ToDo pandas
        df_sex_blood_pressure = df_data[['Sex', 'RestingBP']]
        group_sex = df_sex_blood_pressure.groupby(['Sex']).mean() #group by sex and mean => Serie
        df_sex_mean_bloodPressure = group_sex.reset_index() #reset index => Dataframe                                                                          
        list_sex_blood_pressure = [(SexBloodPressureDTO(row.Sex, row.RestingBP)) for index, row in df_sex_mean_bloodPressure.iterrows() ] #DTO List
        return list_sex_blood_pressure