class AgeCholesterolDTO():
    age: None
    cholesterol: None

    def __init__(self, age, cholesterol):
        self.age = age
        self.cholesterol = cholesterol

    def get_age(self):
        return self.age

    def get_cholesterol(self):
        return self.cholesterol

    def set_age(self, age):
        self.age = age
    
    def set_cholesterol(self, cholesterol):
        self.cholesterol = cholesterol