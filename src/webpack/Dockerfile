FROM node:9.11-alpine

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

# Install bower, gulp
RUN npm install -g webpack webpack-cli && \
    rm -rf /var/cache/* /tmp/*

WORKDIR /workspace
