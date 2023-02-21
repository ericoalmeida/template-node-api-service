FROM node:18.14-alpine

WORKDIR /database

COPY ./prisma ./prisma
COPY ./package.json ./package.json

RUN npm install prisma -g

CMD [ "npm", "run", "db:deploy" ]
