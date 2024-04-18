# uses the account token and api url to access users specific information
import json
import requests
import userdata

# creates an object to hold the token which becomes a json file object
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

# call this with the parameters to get a returned json data list
def accessjsonfile(application, token, apiurl):
    
  filegrabber = jsonfilegrabber(token)

  jsondata = filegrabber.fetch_api_config(apiurl)

  # updates / adds usersdata to the overall data
  userdata.data[application] = jsondata
  print(userdata.data)
  return (application + "data was updated to the user")


