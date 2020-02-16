import requests

def home_info():
    # QR code specific -> Ullsteinstrasse
    origin = 'U+Ullsteinstraße'
    # jelbi applications knows your home 
    destination='U+Tempelhof'
    result = 

    r = requests.get(result)
    data = r.json()
    
    distance = data['routes'][0]['legs'][0]['distance']['text']
    duration = data['routes'][0]['legs'][0]['duration']['text']
    departure_time = data['routes'][0]['legs'][0]['departure_time']['text']
    arrival_time = data['routes'][0]['legs'][0]['arrival_time']['text']

    return distance, duration, departure_time, arrival_time 



