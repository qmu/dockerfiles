# storybook-react Dockerfile 

![](https://img.shields.io/docker/pulls/qmu1/storybook-react.svg)
![](https://img.shields.io/docker/build/qmu1/storybook-react.svg)
[![layers badge](https://images.microbadger.com/badges/image/qmu1/storybook-react.svg)](https://microbadger.com/images/qmu1/storybook-react)

An alipine-based dockerfile which runs [storybook](https://storybook.js.org), optimized for react.js.

Bundled Addons below

* [addon-actions](https://github.com/storybooks/storybook/tree/master/addons/actions)
* [addon-knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs)
* [storybook-addon-react-info](https://github.com/pocka/storybook-addon-react-info)

## Supported tags and respective Dockerfile links

* `latest` [(Dockerfile)](https://github.com/qmu/dockerfiles/blob/master/src/storybook-react/Dockerfile)

## Usage

```
docker run -it --rm \
    -v $(pwd):/workspace \
    -p 9001:9001 \
    qmu1/storybook:latest /bin/sh -c "
        start-storybook -p 9001 -c src/.storybook
"
```

## DockerHub

Available on the DockerHub.

https://hub.docker.com/r/qmu1/storybook-react/

## License 

**MIT License**

Copyright (c) qmu Co.,Inc.
