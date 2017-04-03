FROM ubuntu:latest

WORKDIR /root

EXPOSE 8081

RUN apt-get -y update && apt-get install -y git curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN git clone https://github.com/masatora/doubutsuGallery.git
RUN cd doubutsuGallery && npm install -g webpack && npm install -y 
CMD cd doubutsuGallery && git pull origin && npm clean && NODE_ENV=production webpack --config webpack.config.prod.js && node prod.js
