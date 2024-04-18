# uses the account token and api url to access users specific information
import json
import requests
import userdata

# creates an object to hold the token which becomes a json file object
class jsonfilegrabber:
  def __init__(self, token):
    self.token = token

  def fetch_api_config(self, url):
    print(url)
    print(self.token)
    headers = {'Authorization': f'Bearer {self.token}'}
    response = requests.get(url=url, headers=headers)
    print(response.status_code)
    if response.status_code == 200:
        return json.loads(response.text)

# call this with the parameters to get a returned json data list
def accessjsonfile(application, token, apiurl):
    
  filegrabber = jsonfilegrabber(token)

  jsondata = filegrabber.fetch_api_config(apiurl)

  # updates / adds usersdata to the overall data
  userdata.data[application] = jsondata
  print(userdata.data)
  return (application + "data was updated to the user")

