FROM node:16.12-slim

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

RUN npm install -g npm
RUN npm install -g webpack webpack-cli
RUN npm install -g \
    bs-platform@6.2.1 \
    --unsafe-perm=true --allow-root

WORKDIR /workspace
