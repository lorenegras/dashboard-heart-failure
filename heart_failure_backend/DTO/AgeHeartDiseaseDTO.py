class AgeHeartDiseaseDTO():
    age:None
    heart_disease: None
    count_heart_disease:None

    def __init__(self, age, heart_disease, count_heart_disease):
        self.age = age
        self.heart_disease = heart_disease
        self.count_heart_disease = count_heart_disease

    def get_age(self):
        return self.age

    def get_heart_disease(self):
        return self.heart_disease
    
    def get_count_heart_disease(self):
        return self.count_heart_disease

    def set_age(self, age):
        self.age = age
    
    def set_heart_disease(self, heart_disease):
        self.heart_disease = heart_disease
        
    def set_count_heart_disease(self, count_heart_dise):
        self.count_heart_disease = count_heart_dise
        