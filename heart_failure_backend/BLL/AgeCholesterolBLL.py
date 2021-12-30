from DAL.PersonDAL import PersonDAL
import pandas as pd
from DTO.AgeCholesterolDTO import AgeCholesterolDTO
class AgeCholesterolBLL():
    def getAll(self):
        personDAL = PersonDAL()
        df_data = personDAL.getAll() #dataframe
        # ToDo pandas
        df_age_cholesterol= df_data[['Age', 'Cholesterol']] #columns selected
        sort_df_age_cholesterol = df_age_cholesterol.sort_values(by=['Age']) #sort by age
        mean_age_cholesterol = sort_df_age_cholesterol.groupby(['Age']).mean() #group by age and mean => Serie
        df_mean_ageCholesterol = mean_age_cholesterol.reset_index() #reset index => Dataframe                                                                 
        list_of_persons = [(AgeCholesterolDTO(row.Age, row.Cholesterol)) for index, row in df_mean_ageCholesterol.iterrows() ] #DTO List
        return list_of_persons