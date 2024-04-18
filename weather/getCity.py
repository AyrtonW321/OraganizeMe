import requests

def getCity():
    try:
        # Request the user's IP information from ipinfo.io
        response = requests.get('https://ipinfo.io')
        
        # Check if the request was successful
        if response.status_code == 200:
            # Parse the JSON response
            data = response.json()
            
            # Get city data
            city = data.get('city')
            
            if city:
                return city
            else:
                return "City information not available"
        else:
            # Output failed error
            return f"Failed to retrieve IP information. Status code: {response.status_code}"
    except Exception as e:
        # Handle any exceptions that might occur during the request
        return f"An error occurred: {e}"

# Call the function to get the user's city
user_city = get_user_city()
print("User's city:", user_city)
