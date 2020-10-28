FROM ubuntu:20.04

USER root

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN apt-get update

RUN apt-get install -y graphviz

RUN apt-get -y install curl gnupg

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash 

RUN apt-get install nodejs -yq

RUN npm install

EXPOSE 4000





