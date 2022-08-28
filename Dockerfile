FROM node:18-alpine AS deps

RUN apk add --no-cache git && git config --global --add safe.directory /usr/src/app
# openssh
RUN apk add --no-cache --virtual .build-deps libc6-compat binutils-gold g++ gcc gnupg libgcc linux-headers make python3

WORKDIR /usr/src/app
COPY package.json yarn.lock decorate-angular-cli.js ./

RUN yarn

RUN apk del .build-deps


FROM deps AS dev


# FROM node:18-alpine AS runner

# RUN apk add --no-cache libc6-compat git openssh make g++ python3

# WORKDIR /usr/src/app
# COPY package.json yarn.lock ./

# RUN yarn install --prod

# COPY --from=builder /usr/src/app/dist ./dist
