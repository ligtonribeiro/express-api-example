FROM node:16-alpine as development

WORKDIR /api

COPY tsconfig*.json ./
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine as production
WORKDIR /api
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=development /api/dist/ ./dist/

ENTRYPOINT [ "node", "dist/server.js" ]