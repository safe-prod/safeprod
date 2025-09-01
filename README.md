# SAFE

Superintelligence Alignment through Financial Engineering.

You can build the provided Dockerfile to create a Docker image. When you run this Docker image, it creates a new Docker container. Each Docker container corresponds to a financial product.

Steps for running locally:
1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t safe-<product-uid> .`.
1. Run your container: `docker run -p 3000:3000 safe-<product-uid>`.
1. You can view your images created with `docker images`.