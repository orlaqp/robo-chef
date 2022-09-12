FROM node:lts-alpine as builder
RUN apk add g++ make py3-pip

ARG NODE_ENV
ARG BUILD_FLAG

WORKDIR /app/builder

COPY . .
RUN yarn