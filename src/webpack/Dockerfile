FROM node:10.23-alpine

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

# Install bower, gulp
RUN npm install -g webpack@4.41.4 webpack-cli && \
    rm -rf /var/cache/* /tmp/*

WORKDIR /workspace
