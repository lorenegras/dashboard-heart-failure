from heart_failure_backend.DAL.PersonDAL import DownloadData

class PersonBLL():
    def getAll(self):
        downloaddata = DownloadData()
        data = downloaddata.download_heart()
        return data