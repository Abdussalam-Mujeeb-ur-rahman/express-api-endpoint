# API Documentation

Welcome to the documentation for the CRUD API for managing person objects. This API provides endpoints for creating, reading, updating, and deleting person records.

## Table of Contents
- Standard Formats
- Sample Usage
- Limitations and Assumptions
- Setting Up and Deployment

### 1. Standard Formats

### Requests

- GET /api/all: Get all persons.
    - No request body is required.

- GET /api: Generate your details using query params.
    - Query Parameters:
        - slack_name (string): Slack username.
        - track (string): Desired track.

- GET /api/:id: Get person by ID.
    - No request body is required.

- POST /api: Create a new person.
    - Request Body (JSON):
    ```
    {"name": "John Doe"}
    ```

- PUT /api/:id: Update person by ID.
    - Request Body (JSON):    
    ```json
    {
  "name": "Updated Name"
   } 
    ```

- DELETE /api: Delete person by name.
    - Query Parameter:
        - name (string): Name of the person to delete.

- DELETE /api/:id: Delete person by ID.
    - No request body is required


### 2. Sample Usage

Here are some sample usage scenarios for the API:

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
  Response(200)
  ```
  {
    "persons": [
        {
            "_id": "65037d6d8672bdbbbe127e7b",
            "name": "Leonardos",
            "__v": 0
        },
        {
            "_id": "65037d8b8672bdbbbe127e7e",
            "name": "Raphael",
            "__v": 0
        },
        {
            "_id": "650394bcdff3202d997ead9c",
            "name": "Elon musk",
            "__v": 0
        },
        {
            "_id": "650394d6dff3202d997ead9f",
            "name": "Elon Musk",
            "__v": 0
        }
    ]
   }

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
  api/650387d6dbd2d4093ec94a16
  ```
  Response(200 OK)
  ```
  {
    "person": {
        "_id": "650387d6dbd2d4093ec94a16",
        "name": "Adebayor salami",
        "__v": 0
    }
   }
  ```

- Create a New Person
  ```
  /api
  ```  
  request body
  ```
  {
    "name": "Adebayor salami"
  }
  ```
  Response(201)
  ```
  {
    "newPerson": {
        "name": "Adebayor salami",
        "_id": "650387d6dbd2d4093ec94a16",
        "__v": 0
    }
  }
  ```


- Update a Person by ID
  ```
  /api/650387d6dbd2d4093ec94a16
  ```  
  Request body:
  ```
  {"name": "Updated Name"}
  ```
  Response(200 OK)
  ```
  {
    "person": {
        "_id": "650387d6dbd2d4093ec94a16",
        "name": "Updated Name",
        "__v": 0
    }
  }
  ```

- Delete person by name
  ```
  /api?name=Micheal Angelo
  ```
  status - 204

- Delete person by ID
  ```
  /api/65037d628672bdbbbe127e78
  ```  
  status - 204

### 3. Limitations and Assumptions

- The API assumes that MongoDB is used as the database and that it is configured properly in the config.json file.
- No authentication or authorization mechanisms are implemented in this API, which is suitable for a simple personal project but should be enhanced for production use.
- Error handling is basic, and detailed error messages are not exposed to clients for security reasons. In a production environment, more detailed error handling should be implemented.



### 4. Setting Up and Deployment

### Local Setup
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
create a .env file and add your `MONGO_URL`

start the api
```
npm start
```

### Deployment

To deploy the API to a server, you can follow these steps:

- Set up a server environment (e.g., AWS, Heroku, or a VPS provider).

- Configure your server environment with Node.js and MongoDB.

- Upload your API codebase to the server.

- Configure environment variables for production settings, such as database connection strings and any secrets.

- build with `npm install` and start with `npm start`

Ensure you have proper security measures in place, such as firewalls, HTTPS, and authentication, before deploying to a production environment.
