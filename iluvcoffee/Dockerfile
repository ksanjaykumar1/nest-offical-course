FROM node:20-alpine as base

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

FROM base as development

RUN npm install

COPY . .

CMD ["npm","run", "start:dev" ]