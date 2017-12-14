FROM node:8.8.1-alpine

# Create app directory
RUN mkdir -p /app

ENV HOST 0.0.0.0
EXPOSE 8080


# Install app dependencies
#RUN apk update && apk upgrade && apk add git

COPY . /app/
WORKDIR /app

RUN npm install

# Build app
RUN npm run build

# start command
CMD [ "npm", "start" ]