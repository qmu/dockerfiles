FROM qmu1/jdk8:latest

MAINTAINER TAMURA Yoshiya <a@qmu.jp>

RUN apk add --no-cache --update git ca-certificates openssl

# Add Maven
ENV MAVEN_VERSION 3.5.4
ENV MAVEN_HOME /usr/lib/mvn
ENV PATH $MAVEN_HOME/bin:$PATH
RUN wget http://archive.apache.org/dist/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz && \
  tar -zxvf apache-maven-$MAVEN_VERSION-bin.tar.gz && \
  rm apache-maven-$MAVEN_VERSION-bin.tar.gz && \
  mv apache-maven-$MAVEN_VERSION /usr/lib/mvn

# Add Antlr
ENV ANTLR_VERSION 4.6
ENV CLASSPATH .:/antlr-${ANTLR_VERSION}-complete.jar:$CLASSPATH

RUN wget http://www.antlr.org/download/antlr-${ANTLR_VERSION}-complete.jar \
    && mv antlr-${ANTLR_VERSION}-complete.jar /antlr.jar \
    && chmod +x /antlr.jar

# Add rrd-antlr4
RUN git clone  https://github.com/bkiers/rrd-antlr4.git
RUN cd /rrd-antlr4 && mvn clean package
RUN mv /rrd-antlr4/target/rrd-antlr*.jar /rrd-antlr.jar \
    && chmod +x /rrd-antlr.jar

RUN mkdir /workspace
WORKDIR /workspace
