FROM alpine:3.9

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

RUN echo "===> Adding Python runtime..."  && \
    echo http://dl-2.alpinelinux.org/alpine/edge/community/ >> /etc/apk/repositories && \
    apk --update add python py-pip openssh shadow sudo && \
    apk --update add --virtual build-dependencies \
                python-dev libffi-dev openssl-dev build-base  && \
    pip install --upgrade pip cffi pycrypto               && \
    \
    \
    echo "===> Installing Ansible..."  && \
    pip install ansible==2.9.9         && \
    \
    \
    echo "===> Adding docker user..."  && \
    useradd -m -d /home/docker -u 1000 -s /bin/sh docker     && \
    echo 'docker ALL=(ALL:ALL) NOPASSWD:ALL' >> /etc/sudoers && \
    echo 'docker:docker' | chpasswd                          && \
    \
    \
    echo "===> Removing package list..."  && \
    apk del build-dependencies            && \
    rm -rf /var/cache/apk*

CMD [ "ansible-playbook", "--version" ]
