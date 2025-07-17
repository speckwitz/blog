FROM node:24-alpine3.21

WORKDIR /app
COPY . /app/

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]