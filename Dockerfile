FROM node:16.5

WORKDIR /app

COPY package.json wait-for-it.sh ./

RUN yarn install

RUN chmod +x wait-for-it.sh

COPY /dist .
COPY . .

ENV NODE_ENV=production
ENV PORT 3001

EXPOSE $PORT

CMD  ./wait-for-it.sh mysql:3306 --timeout=1000 -- ./start.sh