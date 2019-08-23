# elm Dockerfile 

![](https://img.shields.io/docker/pulls/qmu1/elm.svg)
![](https://img.shields.io/docker/build/qmu1/elm.svg)
[![layers badge](https://images.microbadger.com/badges/image/qmu1/elm.svg)](https://microbadger.com/images/qmu1/elm)

An alipine-based dockerfile which runs [elm](https://elm-lang.org) includes [webpack](https://webpack.js.org).

## Supported tags and respective Dockerfile links

* `latest` [(Dockerfile)](https://github.com/qmu/dockerfiles/blob/master/src/elm/Dockerfile)

## Usage

```
docker run -it --rm \
    qmu1/elm:latest /bin/sh -c "
        elm repl
    "
```

## DockerHub

Available on the DockerHub.

https://hub.docker.com/r/qmu1/elm/

## License 

**MIT License**

Copyright (c) qmu Co.,Inc.
