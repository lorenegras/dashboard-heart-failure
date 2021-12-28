import csv

class DownloadData():
    def download_heart():
        file = open('data\heart.csv')
        csvreader = csv.reader(file)
        return csvreader