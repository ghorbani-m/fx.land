Generate user:pass with 
`echo $(htpasswd -nb user password) | sed -e s/\\$/\\$\\$/g`

Replace domain in docker-compose.yml for traefik
and also in ./configs/traefik.yml

Create and .env file from the example and fill in the required vars

Remove ./configs/acme.json if exists

Create new acme.json with the right permission using the following commands:
`touch ./configs/acme.json`
`chmod 600 ./configs/acme.json`

Run server with:
`docker-compose up -d`

Check logs:
`docker-compose logs -f`

Recreate:
`docker-compose up -d --force-recreate`

Recreate + build:
`docker-compose up -d --force-recreate --build`

Stop:
`docker-compose stop`

Destroy:
`docker-compose down -v`
