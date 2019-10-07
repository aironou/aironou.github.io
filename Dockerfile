FROM node:10.16.3

USER root
RUN npm install --global \
        gulp-cli \
        mustache
RUN useradd -m aironou
USER aironou
WORKDIR /aironou.github.io
