FROM node:4.2

EXPOSE 3333

RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src

COPY . /src

RUN npm install

CMD npm start