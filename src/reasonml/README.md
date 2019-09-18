# ReasonML Dockerfile 

![](https://img.shields.io/docker/pulls/qmu1/reasonml.svg)
![](https://img.shields.io/docker/build/qmu1/reasonml.svg)
[![layers badge](https://images.microbadger.com/badges/image/qmu1/reasonml.svg)](https://microbadger.com/images/qmu1/reasonml)

A node:x-slim based dockerfile which runs [bs-platform](https://bucklescript.github.io/en/) and [webpack](https://webpack.js.org).

## Supported tags and respective Dockerfile links

* `latest` [(Dockerfile)](https://github.com/qmu/dockerfiles/blob/master/src/reasonml/Dockerfile)

## Usage

```
docker run -it --rm \
    qmu1/reasonml:latest /bin/sh -c "
        bsb -h 
    "
```

## DockerHub

Available on the DockerHub.

https://hub.docker.com/r/qmu1/reasonml/

## License 

**MIT License**

Copyright (c) qmu Co.,Inc.
