FROM node:10.16-slim

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

RUN apt-get install ca-certificates openssl

RUN npm install -g npm
RUN npm install -g webpack webpack-cli

ENV ELM_VERSION=0.19.0
RUN npm install -g \
    elm@${ELM_VERSION}-no-deps \
    elm-test \
    elm-oracle \
    elm-format \
    --unsafe-perm=true --allow-root 

WORKDIR /workspace
