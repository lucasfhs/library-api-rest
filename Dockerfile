FROM node:22

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

CMD ["npm", "start"]