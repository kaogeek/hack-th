FROM node:18-alpine as base

WORKDIR /app

RUN corepack prepare pnpm@latest --activate
RUN pnpm add -g turbo
COPY . .
RUN turbo prune --scope=@hackth/web --docker

# ? -------------------------

# FROM base as deps-prod

# WORKDIR /app

# COPY package.json pnpm-lock.yaml* ./
# RUN npx pnpm -r i --frozen-lockfile --prod

# ? -------------------------

FROM base as builder

COPY package.json pnpm-lock.yaml* ./
RUN npx pnpm -r i --frozen-lockfile

COPY astro.config.mjs tailwind.config.cjs tsconfig.json ./
COPY public ./public
COPY src ./src

RUN npx pnpm build

# ? -------------------------

FROM gcr.io/distroless/nodejs18-debian11:nonroot as runner

USER nonroot
EXPOSE 8080

ENV NODE_ENV production
ENV PORT 8080

COPY package.json ./
COPY --chown=nonroot:nonroot --from=deps-prod /app/node_modules ./node_modules
COPY --chown=nonroot:nonroot --from=builder /app/dist ./dist
COPY server.mjs ./

CMD ["./server.mjs"]
