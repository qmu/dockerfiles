# webpack Dockerfile 

![](https://img.shields.io/docker/pulls/qmu1/webpack.svg)
![](https://img.shields.io/docker/build/qmu1/webpack.svg)
[![layers badge](https://images.microbadger.com/badges/image/qmu1/webpack.svg)](https://microbadger.com/images/qmu1/webpack)

An alipine-based dockerfile which runs [webpack](https://webpack.js.org).

## Supported tags and respective Dockerfile links

* `latest` [(Dockerfile)](https://github.com/qmu/dockerfiles/blob/master/src/webpack/Dockerfile)

## Usage

```
docker run -it --rm -v $(pwd):/workspace qmu1/webpack:latest /bin/sh -c " \
    webpack your_task --cwd path/to/webpackfile/ \
"
```

## DockerHub

Available on the DockerHub.

https://hub.docker.com/r/qmu1/webpack/

## License 

**MIT License**

Copyright (c) qmu Co.,Inc.
