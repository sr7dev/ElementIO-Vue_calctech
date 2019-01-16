FROM nginx:alpine

RUN apk --no-cache update && apk --no-cache upgrade && apk add --no-cache tzdata

COPY nginx.conf /etc/nginx/nginx.conf

COPY --chown=nginx:nginx dist /www/site
