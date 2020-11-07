# ReDoc CLI Dockerfile

![](https://img.shields.io/docker/pulls/qmu1/redoc-cli.svg)
![](https://img.shields.io/docker/build/qmu1/redoc-cli.svg)
[![layers badge](https://images.microbadger.com/badges/image/qmu1/redoc-cli.svg)](https://microbadger.com/images/qmu1/redoc-cli)

An alipine-based dockerfile which runs [ReDoc CLI](https://github.com/Redocly/redoc/tree/master/cli).

## Supported tags and respective Dockerfile links

* `latest` [(Dockerfile)](https://github.com/qmu/dockerfiles/blob/master/src/redoc-cli/Dockerfile)

## Usage

```
docker run -it --rm \
    -v $HERE:/data \
    qmu1/redoc-cli:latest \
    bundle swagger.yaml -o ./output/index.html
"
```

## DockerHub

Available on the DockerHub.

https://hub.docker.com/r/qmu1/redoc-cli/

## License

**MIT License**

Copyright (c) qmu Co.,Inc.
