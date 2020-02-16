from fastapi import FastAPI
from next_bike import *
from qr_code_destination import *

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/next_bike_distance")
def next_bike_distance():
    # next_bike open api computes distance bertween all bikes and your position
    # returns the distance to the nearest one
    min_distance, target_long, target_lat = find_nearest_bike()
    return {'Distance': min_distance}

@app.get("/next_bike_picture")
def next_bike_picture():
    # next_bike open api computes distance bertween all bikes and your position
    # uses latitude and longitude of the bike and gives it as input to the Street View API from Google
    min_distance, target_long, target_lat = find_nearest_bike()
    img_url = street_view_static(target_long, target_lat)
    return {'Image-URL': img_url}

@app.get("/home_info")
    # google maps transit
def qr_code_info():
    distance, duration, departure_time, arrival_time = home_info()
    return {'Departure': departure_time, 'Arrival': arrival_time, 'Duration': duration, 'Distance':distance}

