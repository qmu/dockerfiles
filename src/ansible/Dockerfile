FROM alpine:3.6

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

RUN echo "===> Adding Python runtime..."  && \
    apk --update add python py-pip openssl ca-certificates    && \
    apk --update add --virtual build-dependencies \
                python-dev libffi-dev openssl-dev build-base  && \
    pip install --upgrade pip cffi                            && \
    \
    \
    echo "===> Installing Ansible..."  && \
    pip install ansible==2.4.2         && \
    \
    \
    echo "===> Removing package list..."  && \
    apk del build-dependencies            && \
    rm -rf /var/cache/apk*

CMD [ "ansible-playbook", "--version" ]
