# HOW TO START THIS PROJECT

To start this project, you need

- Docker

## BUILD A DOCKER IMAGE

Build a docker, using this command:

```sh
docker build -t node/app .
```

## START A DOCKER CONTAINER

After building an image, run this command:

```sh
docker run -dti --rm --name node-app -p 8080:8080 -v ./public:/app node/app
```

This command will create a Docker container, which has a Node.js server. It'll run on http://localhost:8080
