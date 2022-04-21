FROM node:16    

WORKDIR /app

COPY . . 

RUN npm install

WORKDIR /app/server

RUN npm install

ENV PORT=3000

EXPOSE 3000

WORKDIR /app

CMD ["npm", "start"]



