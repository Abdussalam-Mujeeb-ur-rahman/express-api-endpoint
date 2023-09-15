# express-api-endpoint
### Overview
This repository contains an Express.js application. This endpoint accepts two GET request parameters, `slack_name` and `track`, and returns a JSON object containing several data points. And also perform Create, Read, Update, and Delete (CRUD) operations on person records.

### Table of Contents

- Prerequisites
- Installation
- Configuration
- Running the API
- Endpoints
- Usage Examples
- Testing
- Deployment

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your system.
- MongoDB installed and running locally or accessible remotely (update the connection string in the configuration if needed).


### Installation
Clone the repository to your local machine:
if you are using https,
```
git clone https://github.com/Abdussalam-Mujeeb-ur-rahman/express-api-endpoint.git
```
if you are using ssh key, 
```
git clone git@github.com:Abdussalam-Mujeeb-ur-rahman/express-api-endpoint.git
```
Navigate into the project directory:
```
cd express-api-endpoint
```
Install the necessary packages:
```
npm install
```

### Configuration
- create a .env file, and add MONGODB_URI: The MongoDB connection URI (default is mongodb://localhost/your-database).


### Usage
To start the server, run:
```
npm start
```

Endpoints

The following endpoints are available:

- GET /api/all: Get all persons
- GET /api?slack_name=HNG_Internship&track=backend: Generate your details using query params
- GET /api/:id: Get person by ID
- POST /api: Create a new person
- PUT /api/:id: Update person by ID
- DELETE /api?name=Micheal Angelo: Delete person by name
- DELETE /api/:id: Delete person by ID

### Usage Examples

Here are some examples of how to use the API:

- Get a List of All Persons
  ```
  GET /api/all
  ```

- Generate your details using query params
  ```
  api?slack_name=example_name&track=backend
  ```

  The response will be a JSON object in the following format:
  ```
  {
     "slack_name": "example_name",
     "current_day": "Monday",
     "utc_time": "2023-08-21T15:04:05Z",
     "track": "backend",
     "github_file_url": "https://github.com/Abdussalam-Mujeeb-ur-rahman/express-api-endpoint/blob/main/index.js",
     "github_repo_url": "https://github.com/Abdussalam-Mujeeb-ur-rahman/express-api-endpoint",
     "status_code": 200
   }
   ```

- Get a Person by ID
  ```
  /api/:id
  ```

- Create a New Person
  ```
  /api
  ```  
  request body
  ```
  {"name": "Mark Essien"}
  ```

- Update a Person by ID
  ```
  /api/:id
  ```  
  Request body:
  ```
  {"name": "Updated Name"}
  ```

- Delete person by name
  ```
  /api?name=Micheal Angelo
  ```

- Delete person by ID
  ```
  /api/:id
  ```  
### Testing
You can use tools such as Postman or your web browser to test the API endpoint. Make sure the endpoint is accessible and returns the correct data in the correct format. 
Click [this](https://documenter.getpostman.com/view/23410424/2s9YBz3v4v) to view the postman testing I did 

### Deployment
You can deploy the application to a hosting platform like Render,Heroku, AWS, or Google Cloud. Follow the instructions provided by the hosting service to deploy your app.