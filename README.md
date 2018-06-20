# CMPaaS Project - Backend Services

The CMPaaS Project is an open-source project that allows the development of intelligent applications applied to Conceptual Maps.
## Services

- Users

## You can also:
  - Import Concept Maps from CMapTools file.

## Technologies

This project uses the following technologies:

* [NodeJS] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [MongoDB] - a free and open-source cross-platform document-oriented database program.
* [Swagger] - an open source software framework backed by a large ecosystem of tools that helps developers design, build, document, and consume RESTful Web services.

# Installation

**_Important_**: This project requires [NodeJs] and [MongoDB] to run. So be sure that you have both installed and one instance of mongodb running.
**_Important 2_**: You have to create a 'secrets.json' file in the 'config' folder. This file should contain the followin structure:
```sh
[
  {"key": "bcrypt_salt", "value": <ENTER_A_INTERGER_VALUE_HERE>}
]
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd CMPaaS
$ npm install
$ node server.js
```



If all goes well, you'll see the following message on the console:

```sh
...
Server running at port 3000
```

## Documentation

 after running, navigate through the browser to the URL "http://localhost:3000/v1/docs" to see all API's documentation.

### Todos

 - Implement other services

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen.)

   [nodejs]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [mongodb]: <https://www.mongodb.com>
   [swagger]: <https://swagger.io>
