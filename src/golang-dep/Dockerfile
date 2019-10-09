FROM golang:1.12-alpine

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

RUN apk update && apk upgrade && \
    apk add --no-cache git build-base

# Install dep
RUN go get -u github.com/golang/dep/cmd/dep
