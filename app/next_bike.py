import requests
from math import sin, cos, sqrt, atan2, radians


def find_nearest_bike(my_latitude = 52.453586, my_longitude = 13.386122):
    # gets next bike
    r = requests.get(
        'https://gbfs.nextbike.net/maps/gbfs/v1/nextbike_bn/de/free_bike_status.json')
    content = r.json()

    bike_id = []
    latitudes = []
    longitudes = []

    for i in content['data']['bikes']:
        bike_id.append(i['bike_id'])
        latitudes.append(i['lat'])
        longitudes.append(i['lon'])

    def find_distance(latitude, longitude):
        # approximate radius of earth in km
        R = 6373.0
        lat1 = radians(latitude)
        lon1 = radians(longitude)
        lat2 = radians(my_latitude)
        lon2 = radians(my_longitude)
        dlon = lon2 - lon1
        dlat = lat2 - lat1
        a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
        c = 2 * atan2(sqrt(a), sqrt(1 - a))
        distance = R * c
        return distance


    distances = []
    for lat, long in zip(latitudes, longitudes):
        distances.append(find_distance(lat, long))

    # distance to next bike
    minimum_distance = min(distances)
    index = distances.index(min(distances))
    target_long = longitudes[index]
    target_lat = latitudes[index]

    return minimum_distance, target_long, target_lat


#distance, target_long, target_lat = find_nearest_bike()
#print(distance)

#print(distance)
# shows picture of where the bike might be
def street_view_static(target_long, target_lat):
    # The Street View Static API will snap to the panorama photographed closest to this location. 
    url = 
    return url

