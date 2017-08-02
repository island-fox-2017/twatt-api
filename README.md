# twatt-api

      npm install
      npm start
      input your access token and secret key from twitter (process.env)
    
    
### Setting route

routes | HTTP | Description
-------|------|------------
/api/timeline | GET | User can see all their timeline
/api/timeline | POST | Posting something new
/api/timeline/search   | POST | input params (key: value) e.g (value: "hacktiv8"). The result will be show all about hacktiv8.
