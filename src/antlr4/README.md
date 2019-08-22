# ANTLR4 Dockerfile 

![](https://img.shields.io/docker/pulls/qmu1/antlr4.svg)
![](https://img.shields.io/docker/build/qmu1/antlr4.svg)
[![layers badge](https://images.microbadger.com/badges/image/qmu1/antlr4.svg)](https://microbadger.com/images/qmu1/antlr4)

An alipine-based dockerfile which runs [antlr44](https://www.antlr4.org).

## Supported tags and respective Dockerfile links

* `latest` [(Dockerfile)](https://github.com/qmu/dockerfiles/blob/master/src/antlr4/Dockerfile)

## Usage

```
docker run -it --rm \
    -v $(pwd):/workspace \
    qmu1/antlr4:latest sh -c "
        cd /workspace
        java -jar /antlr4.jar -Dlanguage=Go -o ./code JSON.g4
        java -jar /rrd-antlr4.jar JSON.g4
    "
```

## DockerHub

Available on the DockerHub.

https://hub.docker.com/r/qmu1/antlr4/

## License 

**MIT License**

Copyright (c) qmu Co.,Inc.
