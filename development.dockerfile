FROM node:18.14.1

WORKDIR /app

COPY . .

RUN npm run install

EXPOSE ${PORT}

CMD ["npm","run","start:dev"]
