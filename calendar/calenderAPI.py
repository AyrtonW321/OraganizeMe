import datetime
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# If modifying these scopes, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/calendar"]

def giveOutput():
  creds = None
  if os.path.exists("token.json"):
    creds = Credentials.from_authorized_user_file("token.json", SCOPES)
  # If there are no (valid) credentials available, let the user log in.
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          "credentials.json", SCOPES
      )
      creds = flow.run_local_server(port=0)
    # Save the credentials for the next run
    with open("token.json", "w") as token:
      token.write(creds.to_json())

  try:
    service = build("calendar", "v3", credentials=creds)

    # Call the Calendar API
    now = datetime.datetime.utcnow().isoformat() + "Z"

    # Grabs the top 10 events
    events_result = (
      service.events()
      .list(
        calendarId = 'primary', 
        timeMin = now, maxResults = 10, 
        singleEvents = True, 
        orderBy = "startTime"
      )
      .execute()
    )

    events = events_result.get("items", [])

    if not events:
      print("No upcoming events found.")
      return

    # Prints the start and names of the next 10 events
    for event in events:
      start = event["start"].get("dateTime", event[start].get("date"))
      print(start, event["summary"])

  except HttpError as error:
    print(f"An error occurred: {error}")

def needInput():
  creds = None
  if os.path.exists("token.json"):
    creds = Credentials.from_authorized_user_file("token.json", SCOPES)
  # If there are no (valid) credentials available, let the user log in.
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          "credentials.json", SCOPES
      )
      creds = flow.run_local_server(port=0)
    # Save the credentials for the next run
    with open("token.json", "w") as token:
      token.write(creds.to_json())

  try:
    service = build("calendar", "v3", credentials=creds)

    # Adds events to the calendar
    event = {
      'summary': '',
      'location': '',
      'description': '',
      'start': {
        'dateTime': '',
        'timeZone': '',
      },
      'end': {
        'dateTime': '',
        'timeZone': '',
      }
    }
    event = service.events().insert(calendarId = 'primary', body=event).execute()
    print('Event created: %s' % (event.get('htmlLink')))
  
  except HttpError as error:
    print(f"An error occurred: {error}")