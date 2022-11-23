FROM node:18-alpine AS deps

USER root

RUN addgroup -g 501 user && adduser -u 501 -G user -s /bin/sh -D user
RUN apk add --no-cache git
RUN apk add --no-cache --virtual .build-deps g++ gcc make python3

WORKDIR /usr/src/app

RUN chown -R user.user /usr/src/app

USER user

COPY package.json yarn.lock decorate-angular-cli.js ./

RUN git config --global --add safe.directory /usr/src/app
# RUN yarn install --frozen-lockfile

USER root

RUN apk del .build-deps


FROM deps AS dev

USER user


# FROM node:18-alpine AS runner

# RUN apk add --no-cache libc6-compat git openssh make g++ python3

# WORKDIR /usr/src/app
# COPY package.json yarn.lock ./

# RUN yarn install --prod

# COPY --from=builder /usr/src/app/dist ./dist
