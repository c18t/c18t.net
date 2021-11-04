FROM node:lts-bullseye

ENV USER gatsbty
ENV USER_ID 1000
ENV GROUP_ID 1000
ENV APP_DIR /var/opt/app
ENV PORT 8000

WORKDIR ${APP_DIR}

RUN set -x && \
: "ユーザーを作成" && \
  useradd -s /bin/bash -d ${APP_DIR} -u ${USER_ID} -o ${USER} && \
: "グループIDの修正" && \
  groupmod -g ${GROUP_ID} -o ${USER} && \
: "アプリディレクトリの所有者を変更" && \
  chown -R ${USER}:${USER} ${APP_DIR}

RUN npm install -g gatsby-cli
USER ${USER}
EXPOSE ${PORT}
