class SexBloodPressureDTO():
    sex: None
    blood_pressure: None

    def __init__(self, sex, blood_pressure):
        self.sex = sex
        self.blood_pressure = blood_pressure

    def get_sex(self):
        return self.sex

    def get_blood_pressure(self):
        return self.blood_pressure

    def set_sex(self, sex):
        self.sex = sex
    
    def set_blood_pressure(self, blood_pressure):
        self.blood_pressure = blood_pressure