#!/bin/bash

# Build back for share graphql schema
docker-compose up -d --build web
docker exec pad-site_web_1 ./manage.py graphql_schema --indent 2
docker-compose down

cp kernel/schema.json client/schema.json && rm -f kernel/schema.json

# Build web client
docker-compose up -d --build webclient
docker exec pad-site_webclient_1 yarn install
docker exec pad-site_webclient_1 yarn relay
docker exec pad-site_webclient_1 yarn build
docker-compose down webclient

rm -rf client/schema.json
rm -rf kernel/webclient
cp -r client/build kernel/webclient
rm -rf client/build

docker-compose up -d --build nginx