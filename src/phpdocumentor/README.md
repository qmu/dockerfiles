# phpDocumentor Dockerfile 

![](https://img.shields.io/docker/pulls/qmu1/phpdocumentor.svg)
![](https://img.shields.io/docker/build/qmu1/phpdocumentor.svg)
[![layers badge](https://images.microbadger.com/badges/image/qmu1/phpdocumentor.svg)](https://microbadger.com/images/qmu1/phpdocumentor)

Runs [phpDocumentor](https://github.com/phpDocumentor/phpDocumentor2) (Not the alipine-based https://github.com/phpDocumentor/phpDocumentor2/issues/1874 )

## Supported tags and respective Dockerfile links

* `latest` [(Dockerfile)](https://github.com/qmu/dockerfiles/blob/master/src/phpdocumentor/Dockerfile)

## Usage

```
docker run --rm -v $(pwd):/project qmu1/phpdocumentor:latest /bin/sh -c "\
    phpdoc --version
"
```

## DockerHub

Available on the DockerHub.

https://hub.docker.com/r/qmu1/phpdocumentor/

## License 

**MIT License**

Copyright (c) qmu Co.,Inc.
