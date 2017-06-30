FROM alpine:latest

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

RUN apk update \
    && apk add --no-cache openjdk8 fontconfig \
    && rm -rf /tmp/* \
    && mkdir /usr/share/fonts

COPY ipagp.ttf /usr/share/fonts/
ENV LANG ja_JP.UTF-8
RUN fc-cache -fv
