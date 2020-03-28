FROM node:latest
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY . /usr/app
ADD .env.example /usr/app/.env
RUN npm install --only=prod
EXPOSE 3000
CMD [ "npm", "start" ]
