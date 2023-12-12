FROM docker.mobvoi.com/ngingx-nodejs-npm:v1

MAINTAINER simonlin@mobvoi.com 

ARG NGINX_ENV=prd
ENV VUE_APP_TICO_ENV $NGINX_ENV
ADD package.json /nerv.app/
RUN cd /nerv.app; npm install --registry https://registry.npm.taobao.org
ADD . /nerv.app/
RUN cd /nerv.app; npm run build

RUN cp -r /nerv.app/dist/* /usr/share/nginx/html/
RUN cp /nerv.app/nginx_config/gzip.conf /etc/nginx/conf.d/gzip.conf
RUN cp /nerv.app/nginx_config/default.$NGINX_ENV.conf /etc/nginx/conf.d/default.conf
#COPY ["./nginx_config/default.$NGINX_ENV.conf","/etc/nginx/conf.d/default.conf"] ;
