# EMQ API (Sails)

A REST API for managing EMQ Users and ACL Rules, built with [Sails.js](http://sailsjs.org) (for multiple database support)

# Endpoints

Supported all default [blueprints](http://sailsjs.com/documentation/reference/blueprint-api)

### EMQ-USER

- `POST` - `/emq-user`
  - AUTH (Basic)
    - admin `username`
    - admin `password`
  - DATA
    - emq-user `username`
    - emq-user `password`
    - is_superuser
- `GET (all)` - `/emq-user`
  - AUTH (Basic)
    - admin `username`
    - admin `password`
- `GET (one)` -  `/emq-user/:<id>`
  - AUTH (Basic)
    - admin `username`
    - admin `password`
- `DELETE (one)` - `/emq-user/:<id>`
  - AUTH (Basic)
    - admin `username`
    - admin `password`
- `PUT (one)` - `/emq-user/:<id>`
  - AUTH (Basic)
    - admin `username`
    - admin `password`
  - DATA
    - emq-user `username`
    - emq-user `password`
    - is_superuser

- ... and other that are less common and basically not used

### EMQ_ACL

- `POST` - `/emq-acl`
  - AUTH (Basic)
    - admin `username`
    - admin `password`
  - DATA
    - `allow` - integer
    - `ipaddr` - string
    - `username` - string
    - `clientid` - string
    - `access` - integer
    - `topic` - string
- `GET (all)` - `/emq-acl`
  - AUTH (Basic)
    - admin `username`
    - admin `password`
- `GET one` - `/emq-acl`
  - AUTH (Basic)
    - admin `username`
    - admin `password`
- `DELETE (one)` - `/emq-acl/:<id>`
  - AUTH (Basic)
    - admin `username`
    - admin `password`
- `PUT (one)` - `/emq-acl/:<id>`
  - AUTH (Basic)
    - admin `username`
    - admin `password`
  - DATA
    - `allow` - integer
    - `ipaddr` - string
    - `username` - string
    - `clientid` - string
    - `access` - integer
    - `topic` - string

# Development
To set up a local development environment, make sure you have Sails installed globally (`npm install -g sailsjs`). Then:

1. Clone this repository
2. Open the repository directory in your terminal
3. Update PostgreSQL credentials in `config/connections.js`
4. Run the following command, which creates an admin user:

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
