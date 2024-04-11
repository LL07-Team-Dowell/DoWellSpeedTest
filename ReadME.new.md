# DoWellSpeedTest
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Camera Feed
The Camera works following basic camera principle once caputred the app save the image in base64 encoded format

# SomApi.me

For development you can create new Speedof.me account on [https://speedof.me/api/user/]
This will give you apiKey and you can add domain on the user settings, once finished with this you can change this values in constants.js file

Note: The Domain of the app in development, on api call and in user settings must be identical. Else you will have domain mismatch and the api call will not work.

To avoid domain mismatch change you local machine domain to for example [local.dev.com]. make this your domain name for the SomApi.me user account, and change SomApiDomain in constants.js to [local.dev.com] then run[local.dev.com:3000]. Your api call runs smoothly

# Google Sheet Integration

Same with the SomApi integration you can chage values on constants.js for now the api is working using [sheet.best] as api provider for the google sheet, you can create account, create connection using the google sheet link, once you have done this you can do CRUD operation just like the updateGoogleSheet function inside the ResultForm.js file.

This is not the end of Google sheet Integration there is a plan to change it to google cloud platform