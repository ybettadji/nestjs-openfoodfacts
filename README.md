This project is an api developed with the NestJs framework. 

This API will allow you (after importing the Open Food Facts database) to retrieve products from the Open Food Facts database based on the product code or the product name.



## Prerequisites

- npm
- Docker (https://docs.docker.com/get-docker/)
- NodeJs (https://nodejs.org/en/)
- NestJs (https://docs.nestjs.com/)
# Installation

## Database

In the database-installation folder, build an image using the Dockerfile. (The dockerfile will download and decompress the dump of the open food facts database. This database is about 40 GB, so be sure to allocate enough space to your container)

```
docker build -t {IMAGE_NAME} .
```

Run the image (Here I match port 28496 of my local machine to port 27017 of my container. You are free to change it, just be aware that each change will have to be replicated in the .env file) :

```
docker run -d -p 28496:27017 {IMAGE_NAME}
```

Execute a bash in the created container :

```
docker exec -it {CONTAINER ID} bash
```

After that, execute the mongo-script present in the container.
```
./mongo-script.sh
```


## Application

In the root of the project, run the command 

```
npm i
```

Modify the variables in the .env file according to the port you specified when you launched the container

By default, the application port is 3000 and the database port is 28496. If you want to keep the same configuration, the docker image must be launched by matching the port 27017 of the container to the port 28496 of your local machine


When the dependencies have been installed, launch the application : 

```
nest start --watch
```

## API Documentation

The documentation of the api has been made with Swagger. To access this documentation, launch the project,

then go to the following url (be sure to replace the port by the one where you decided to launch the application) : 

```
http://127.0.0.1/{PORT}/api
```


