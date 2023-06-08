FROM node:19-alpine AS pnpm
RUN apk add --no-cache libc6-compat
RUN apk update

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"
RUN npm install -g pnpm

# ----------------------------

FROM pnpm as builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY src ./src
COPY tsconfig.json ./
RUN pnpm build

# ----------------------------

FROM pnpm as runtime
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["pnpm", "serve"]
