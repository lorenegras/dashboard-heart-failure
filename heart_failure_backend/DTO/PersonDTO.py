
class PersonDTO():
    age: None
    sex: None
    cholesterol: None
    heart_disease: None
    blood_pressure: None

    def __init__(self, age, sex, cholesterol, heart_disease, blood_pressure):
        self.age = age
        self.sex = sex
        self.cholesterol = cholesterol
        self.heart_disease = heart_disease
        self.blood_pressure = blood_pressure

    def get_age(self):
        return self.age

    def get_sex(self):
        return self.sex

    def get_cholesterol(self):
        return self.cholesterol

    def get_heart_disease(self):
        return self.heart_disease

    def get_blood_pressure(self):
        return self.blood_pressure

    def set_age(self, age):
        self.age = age
    
    def set_sex(self, sex):
        self.sex = sex
    
    def set_cholesterol(self, cholesterol):
        self.cholesterol = cholesterol
    
    def set_heart_disease(self, heart_disease):
        self.heart_disease = heart_disease

    def set_blood_pressure(self, blood_pressure):
        self.blood_pressure = blood_pressure
    

        
