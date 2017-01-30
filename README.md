# EMQ API (Sails)

A REST API for managing EMQ Users and ACL Rules, built with [Sails.js](http://sailsjs.org) (for multiple database support)

# Development
To set up a local development environment, make sure you have Sails installed globally (`npm install -g sailsjs`). Then:

1. Clone this repository
2. Open the repository directory in your terminal
3. Run the following command, which creates an admin user:

```
sails_permissions__adminUsername="admin" sails_permissions__adminPassword="test12345" sails lift
```

Once Sails has lifted, you can make requests to the REST API.

Be sure to include your Base 64 encoded username and password in the request header:

```
Authorization: Basic <Base64enc username:password>
```

E.g. with curl:

```
curl -H "Authorization: Basic YWRtaW46dGVzdDEyMzQ1" -X POST "http://localhost:1337/emq-user" -d "username=friendly&password=secretpassword"
```
