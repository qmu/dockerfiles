FROM node:10.16-slim

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

RUN npm install -g npm
RUN npm install -g webpack webpack-cli 
RUN npm install -g \
    bs-platform \
    --unsafe-perm=true --allow-root 

WORKDIR /workspace
