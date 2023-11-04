
# Score Update API Service Module

## Concept

This module is responsible for handling score updates on our website's scoreboard.
It provides functionality for updating user scores when specific actions are completed and ensures the prevention of unauthorized score increases.
The API service module plays a crucial role in maintaining an up-to-date scoreboard while maintaining the security and integrity of user scores.

## Excution Flow

1. The user accomplised an action on the website.
2. The website sends an API call to the application server with the user's ID and the details of the completed action.
3. The application server receives the API call and verifies the user's authorization.
4. If user is authorized, the server updates the user's score based on the action.
5. The updated score is saved in the database.
6. The server sends a response to the website with the updated score.
7. The website updates the scoreboard with the new score.

## API Endpoints

### Update Scoreboard

* Endpoint: `api/scores`
* Method: PUT
* Request Body:
    * user_id (integer): unique id of a user
    * action_id (integer): unique id of an action 
* Response:
    * status (string): "success" || "error"
    * message (string): a message briefly describe the result after updating score
    * data (any): the user score after updated

### Get Top 10 User Score

* Endpoint: `api/scores`
* Method: GET
* Request Params:
    * limit (integer): the number of user score required to query. In this case is 10
    * order_by (string): the order of records to query.  
* Response:
    * status (string): "success" || "error"
    * message (string): a message briefly describe the result after updating score
    * data (any): the array of top 10 user

## Security

### Authorization

To prevent malicious users from increasing scores without authorization, the server must implement proper authentication and authorization mechanisms. This could involve using JWT (JSON Web Tokens) or session-based authentication. Ensure that only authenticated users can access the /api/score/update endpoint.

### Error Handling

Implement robust error handling to handle scenarios like unauthorized access, database errors, and invalid input. Return meaningful error messages and appropriate HTTP status codes to the website.

### Rate Limiting

Consider implementing rate limiting to prevent abuse or excessive requests from users. Rate limiting can help protect the server from spam or denial-of-service attacks.

## Testing

Thoroughly test the API service module, including positive and negative test cases, to ensure its reliability and security. Use testing frameworks like Jest or Mocha for automated testing.

## Documentation

Provide API documentation for the website developers, including the endpoint details, expected request and response formats, and usage examples. Use tools like Swagger or Postman for generating interactive API documentation.




