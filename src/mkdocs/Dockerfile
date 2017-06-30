FROM python:3.4-alpine

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

RUN pip install mkdocs \
    && pip install mkdocs-material \
    && mkdir /project

WORKDIR /project
VOLUME /project

EXPOSE 8000

CMD mkdocs serve
