FROM node:20.2-alpine3.17 AS deps

RUN apk add --no-cache build-base python3

ARG USER_UID

RUN if [ -n "$USER_UID" ] && [ "$USER_UID" != "1000" ]; then \
			sed -i "s/node:x:1000:/node:x:$USER_UID:/" /etc/passwd; \
		fi

WORKDIR /usr/src/app

COPY package.json yarn.lock* .

RUN chown -R node:node /usr/src/app \
			&& chown -R node:node /home/node

USER node

RUN yarn install



FROM deps AS dev

CMD yarn start



FROM deps AS dev-attached

USER root

RUN apk add --no-cache sudo git openssh-client gnupg \
			vim zsh zsh-vcs alpine-zsh-config zsh-theme-powerlevel10k

RUN addgroup node root \
			&& echo "%root ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers

USER node

RUN git config --global --add safe.directory /usr/src/app

RUN mkdir /home/node/.gnupg \
			&& chmod 700 /home/node/.gnupg

RUN mkdir -p ~/.local/share/zsh/plugins \
			&& ln -s /usr/share/zsh/plugins/powerlevel10k ~/.local/share/zsh/plugins/ \
			&& mkdir -p ~/.config/zsh

CMD yarn start
