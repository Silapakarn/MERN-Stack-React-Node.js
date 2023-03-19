# FROM node:alpine3.11

# WORKDIR /app

# COPY  . .

# ENV PATH /app/node_modeules/.bin:$PATH

# RUN npm install

# CMD [ "npm", "start" ]

FROM nginx:stable-alpine
COPY build/ /etc/nginx/html/
# new
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]




