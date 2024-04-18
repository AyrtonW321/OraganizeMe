import requests
import json
api_key = '40f86ac620f5f658e4fd0c4cee27423a'

user_input = ""


def giveOutput():
    weather_data = requests.get(
        f"https://api.openweathermap.org/data/2.5/weather?q={user_input}&units=metric&APPID={api_key}")

    if weather_data.status_code != 200:
        print("Error:", weather_data.json())
    else:
        try:
            weather = weather_data.json()['weather'][0]['main']
            temp = round(weather_data.json()['main']['temp'])

            dict = {
                "City": user_input,
                "Weather": weather,
                "Temperature": temp
            }

            return json.dump(dict)
        except KeyError as e:
            print("Error: KeyError -", e)
            print("Full response:", weather_data.json())


# using user data (city, country) on account creation, use it for weather in lines 8 and 5

if __name__ == "__main__":
    giveOutput()
