# golang-dep Dockerfile 

![](https://img.shields.io/docker/pulls/qmu1/golang-dep.svg)
![](https://img.shields.io/docker/build/qmu1/golang-dep.svg)
[![layers badge](https://images.microbadger.com/badges/image/qmu1/golang-dep.svg)](https://microbadger.com/images/qmu1/golang-dep)

An alipine-based dockerfile which runs [golang](https://golang.org/) with [dep](https://golang.github.io/dep/).

## Supported tags and respective Dockerfile links

* `latest` [(Dockerfile)](https://github.com/qmu/dockerfiles/blob/master/src/golang-dep/Dockerfile)

## Usage

```
docker run -it --rm -v $(pwd):/usr/src/myapp -w /usr/src/myapp  qmu1/golang-dep:latest go version
```

## DockerHub

Available on the DockerHub.

https://hub.docker.com/r/qmu1/golang-dep/

## License 

**MIT License**

Copyright (c) qmu Co.,Inc.
