FROM node:22-alpine
WORKDIR /app

COPY package*.json ./

RUN npm isntall --save-dev nodemon

COPY . .
RUN npm isntall
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "dev" ]