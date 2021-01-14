# build environment
FROM node:13.12.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ARG NODE_ENV
ARG LOG_LEVEL
ARG SERVICE_NAME
ARG PORT

ENV NODE_ENV ${NODE_ENV}
ENV LOG_LEVEL ${LOG_LEVEL}
ENV SERVICE_NAME ${SERVICE_NAME}
ENV PORT ${PORT}

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent --production
COPY . ./
RUN npm run build
# new
EXPOSE ${PORT}
#CMD ["pm2-runtime", "server.js", "--name"]
CMD pm2-runtime ./dist/server.js --name ${SERVICE_NAME}