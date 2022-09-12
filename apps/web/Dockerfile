FROM my-base-image:nx-base AS builder

ARG NODE_ENV
ARG BUILD_FLAG
ARG GRAPHQL_ENDPOINT

WORKDIR /app/builder
COPY . .
ENV NODE_ENV=$NODE_ENV
RUN npx nx build web ${BUILD_FLAG}

FROM my-base-image:nx-base

WORKDIR /app
COPY --from=builder /app/builder ./
ENV NODE_ENV=$NODE_ENV
ENV GRAPHQL_ENDPOINT=$GRAPHQL_ENDPOINT

WORKDIR /app/dist/apps/web

CMD ["npm", "start"]