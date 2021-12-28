import csv

class PersonDAL():
    def getAll(self):
        file = open('../data/heart.csv')
        csvreader = csv.reader(file)
        print(csvreader)
        return csvreader