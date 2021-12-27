import requests
from DTO.WeatherDTO import WeatherDTO

# from utils.ConvertCitytoCoords import ConvertCitytoCoords
# class ApiWeather():
#     def get(city):
#         # On récupère les coordonnées de la ville
#         coords = ConvertCitytoCoords().getCoord(city)
#         # Si ConvertCitytoCoords nous renvoit pas un résultat undefined alors requête à l'API
#         # On verifie toujours la saisit du user avant d'envoyer à l'API (pour optimiser le nombre de requête à l'API)
#         if(coords != 'undefined'):
            # url = "https://weatherbit-v1-mashape.p.rapidapi.com/current"
            # querystring = coords
            # headers = {
            #     'x-rapidapi-host': "weatherbit-v1-mashape.p.rapidapi.com",
            #     'x-rapidapi-key': "dd4c819c3fmsh153a9e2523ac559p185d4ajsn5aebfae48e4e"
            #     }
            # #requête à l'API externe Weather, on stocke la réponse dans response
            # response = requests.request("GET", url, headers=headers, params=querystring).json()
#         else:
#             response = 'undefined'
#         return response

class ApiWeather():
    def get_current(city):
        url = "https://weatherapi-com.p.rapidapi.com/current.json"
        querystring = {"q":city}
        headers = {
            'x-rapidapi-host': "weatherapi-com.p.rapidapi.com",
            'x-rapidapi-key': "dd4c819c3fmsh153a9e2523ac559p185d4ajsn5aebfae48e4e"
            }
        response = requests.request("GET", url, headers=headers, params=querystring).json()
        temperature_c = response.get('current').get('temp_c')
        temperature_f = response.get('current').get('temp_f')
        condition = response.get('current').get('condition').get('text')
        humidity = response.get('current').get('humidity')
        weathercurrent = WeatherDTO(temperature_c, None, None, temperature_f, None, None, condition, humidity)
        return weathercurrent
    
    def get_forecast(city, date):
        url = "https://weatherapi-com.p.rapidapi.com/forecast.json"
        querystring = {"q":city, "dt":date}
        headers = {
            'x-rapidapi-host': "weatherapi-com.p.rapidapi.com",
            'x-rapidapi-key': "dd4c819c3fmsh153a9e2523ac559p185d4ajsn5aebfae48e4e"
            }
        response = requests.request("GET", url, headers=headers, params=querystring).json()
        max_temperature_c = response.get('forecast').get('forecastday')[0].get('day').get('maxtemp_c')
        min_temperature_c = response.get('forecast').get('forecastday')[0].get('day').get('mintemp_c')
        max_temperature_f = response.get('forecast').get('forecastday')[0].get('day').get('maxtemp_f')
        min_temperature_f = response.get('forecast').get('forecastday')[0].get('day').get('mintemp_f')
        condition = response.get('forecast').get('forecastday')[0].get('day').get('condition').get('text')
        humidity = response.get('forecast').get('forecastday')[0].get('day').get('avghumidity')
        weatherforecast = WeatherDTO(None,max_temperature_c,min_temperature_c, None, max_temperature_f,min_temperature_f,condition, humidity)
        return weatherforecast
