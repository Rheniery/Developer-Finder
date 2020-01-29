# Developer-Finder
This is my first project done with React.js and React Native. It's an app to find other developers nearby or by technologies, the basis of this project was made in an event called "Oministack Week 10", where developers come together to learn some new technologies and this year it was done with Node.js, React.js and React Native.

# Observation
I will make some changes to include more methods, like editing, deleting and maybe other.


## Tecnologies used in this project

## NodeJS

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. NodeJS was the platform in which we built this application.

### [YARN package manager](https://yarnpkg.com/) used

I separated the project in 3 folders:

1.**backend:** The API.\
2.**web:** Web Application\
3.**mobile:** Mobile Application

#### For API, backend folder

These packages are used into backend

##### [express](https://yarnpkg.com/package/express)

Fast, unopinionated, minimalist web framework for node. This is the framework with which we built the application.

##### [body-parser](https://yarnpkg.com/package/body-parser)

Is a Node.js body parsing middleware, it parses incoming request bodies in a middleware before your handlers. We used it to parse the   body content of the request.

##### [cors](https://yarnpkg.com/package/cors)

CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

##### [mongoose](https://yarnpkg.com/package/mongoose)

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

##### [dot-env](https://yarnpkg.com/package/dot-env)

By requiring dot-env into your source, your current working directory is scanned for a .env.json file to merge into your process.env runtime variables.

##### [socket.io](https://yarnpkg.com/package/socket.io)

Socket.IO enables real-time bidirectional event-based communication

##### [axios](https://yarnpkg.com/package/axios)

Promise based HTTP client for the browser and node.js

#### [nodemon](https://yarnpkg.com/package/nodemon)

Simple monitor script for use during development of a node.js app.

#### To UI, web folder
Loading... Soon I'll commit

#### To UI mobile, mobile folder
Loading... Soon I'll commit

### Pre-requisites:

* Clone this repository:
  ```
  $ git clone https://github.com/Rheniery/Developer-Finder.git
  ```
	For API:
  ```
  $ cd Developer-Finder/backend
	$ yarn install
  ```
  For WEB:
  ```
  $ cd Developer-Finder/web
	$ yarn install
  ```
  For MOBILE:
  ```
  $ cd Developer-Finder/mobile
	$ yarn install
  ```
* Follow the tutorial to install the packages mentioned above.

### How to run this application:

To run this application locally, you'll need to:
* Inside the project folder 'backend':
  Configure *scripts* of your *package.json* like this: 
  ```
  "scripts": {
    "dev": "nodemon src/index.js"
  },
  ```
  Run:
  ```
  $ yarn dev
  ```
* Inside the project folder 'web' run:
  ```
  $ yarn start
  ```
