FROM node:18-slim as deps-prod

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npx pnpm -r i --frozen-lockfile --prod

# ----------------------------

FROM node:18-alpine as builder

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npx pnpm -r i --frozen-lockfile

COPY src ./src
COPY tsconfig.json ./

RUN npx pnpm build

# ----------------------------

FROM gcr.io/distroless/nodejs18-debian11:nonroot as runner

USER nonroot

ENV NODE_ENV production
ENV PAYLOAD_CONFIG_PATH dist/payload.config.js

COPY package.json ./
COPY --chown=nonroot:nonroot --from=deps-prod /app/node_modules ./node_modules
COPY --chown=nonroot:nonroot --from=builder /app/dist ./dist
COPY --chown=nonroot:nonroot --from=builder /app/build ./build

EXPOSE 3000

CMD ["./dist/server.js"]
