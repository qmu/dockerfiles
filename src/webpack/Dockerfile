FROM node:10.23.1-alpine3.11

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

# Install bower, gulp
RUN npm install -g webpack webpack-cli && \
    rm -rf /var/cache/* /tmp/*

WORKDIR /workspace
