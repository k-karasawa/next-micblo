FROM node:17.6.0

WORKDIR /usr/src/app

USER node
#RUN npm install -g npm@latest && npm install create-next-app