FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --chown=nginx:nginx dist /www/site
