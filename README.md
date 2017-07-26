# Twatt-API App

Demo app for basic Use of OAuth 1 using Twitter API

## Twatt-API REST API

List of basic routes:

| Route       | HTTP | Description                             |
| ----------- |:----:| :---------------------------------------|
| /           | GET  | Welcome To OAuth 1 using Twitter API!   |

List of routes:

| Route       | HTTP | Description                                                                        |
| ----------- |:----:| :----------------------------------------------------------------------------------|
| /trends     | GET  | Get the top 50 trending topics for a specific WOEID (Where On Earth IDentifier)    |
| /timeline   | GET  | Get your timeline                                                                  |
| /search     | POST | Search for specific tweets                                                         |
| /tweet      | POST | Post a tweet as your profile                                                       |


### Don't Forget
After you clone this repo, create a .env file and fill it like the already made .env.template file. 
you can get all the necessary keys in https://apps.twitter.com
