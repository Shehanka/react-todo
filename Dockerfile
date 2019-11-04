FROM alpine:3.9

RUN mkdir -p c:/temp/src/app

WORKDIR c:/temp/src/app

COPY package.json c:/temp/src/app/

RUN npm install

ADD src c:/temp/app/src
ADD public c:/temp/src/app/public

RUN npm build

CMD ["npm", "start"]