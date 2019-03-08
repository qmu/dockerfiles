FROM node:11.11-alpine

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

# Install bower, gulp
RUN npm install -g \
    @storybook/vue \
    babel-loader \
    vue \
    webpack \
    vue-loader \
    css-loader \
    vue-template-compiler \
    @babel/core \
    babel-preset-vue \
    && \
    rm -rf /var/cache/* /tmp/*

WORKDIR /workspace
