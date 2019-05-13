FROM node:latest
EXPOSE 3000 9229
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app

RUN npm ci
COPY . /app

ENTRYPOINT [ "/bin/bash", "start.sh" ]
