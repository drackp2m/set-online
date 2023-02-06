FROM node:19.6-alpine3 AS deps

RUN apk add --no-cache sudo git vim zsh g++ gcc make python3

WORKDIR /usr/src/app

RUN adduser -u 501 -s /bin/zsh -D user \
&& addgroup user node \
&& addgroup user root \
&& echo "%root ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers

RUN chown -R user.user /usr/src/app

USER user

RUN git config --global --add safe.directory /usr/src/app

COPY package.json yarn.lock* decorate-angular-cli.js* ./

RUN yarn install --frozen-lockfile

RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k \
&& echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc



FROM deps AS dev

USER user

CMD yarn start


# FROM node:18-alpine AS runner

# WORKDIR /usr/src/app
# COPY package.json yarn.lock ./

# RUN yarn install --prod

# COPY --from=builder /usr/src/app/dist ./dist
