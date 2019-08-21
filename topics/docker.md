# Docker

- Docker is a platform to **develop**, **deploy** and **run** applications with containers.
- **Containerization**: Using linux containers to deploy applications.
- Containerization is popular because:
  - **Flexible**: Even complex applications can be containerized.
  - **Lightwieght**: Containers share the host kernel.
  - **Interchangeable**: Updates and upgrades can be deployed on-the-fly.
  - **Portable**: Containers can be build locally, can be pushed to the cloud and can run anywhere.
  - **Scalable**: Container replicas can be increased and be automatically distributed.
  - **Stackable**: Services can be stacked vertically on-the-fly.

## Images and containers

- An image is an executable package that includes everything needed to run an application
  - code
  - a runtime
  - libraries
  - environment variables
  - configuration files
- A container is launched by running an image.
  - A container is a runtime instance of an image.
  - A container is what the image becomes in memory when executed (an image with state, or a user process).
- Execute the following command to see a list of running containers.
  ```
  docker ps
  ```
 
 ### Containers and Virtual Machines
 
 - Containers
   - run natively on Linux and share the host machine's kernel(central part of the OS) with other containers.
   - runs as a lightweight process.
 - VMs
   - run a complete guest OS with virtual access to host resources throgh a hypervisor.
   - VMs usually provide an environment with more resources than an application needs.

### Cheat sheet

```
## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker images
docker image ls

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all
docker container ls -aq
```

### Conclusion

- Containers heavily benefit CI/CD
  - applications have no system dependencies
  - updates can be pushed to parts of a distributed application
  - resource count can be optimized
