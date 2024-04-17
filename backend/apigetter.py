import json
import requests

class jsonfilegrabber:
  def __init__(self, token):
    self.token = token

  def fetch_api_config(self, url):
    headers = {'Authorization': f'Bearer {self.token}'}
    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return json.loads(response.text)
        else:
            print(f"Failed to fetch API configuration. Status code: {response.status_code}")
    except Exception as e:
        print(f"An error occurred while fetching API configuration: {e}")
    return None

def accessjsonfile(token, apiurl):
    
  filegrabber = jsonfilegrabber(token)

  api_config = filegrabber.fetch_api_config(apiurl)



