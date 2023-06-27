up: docker-up
down: docker-down
restart: down up

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down --remove-orphans

docker-down-clear:
	docker-compose down -v --remove-orphans

docker-pull:
	docker-compose pull

docker-build:
	docker-compose build

app-npm-install:
	docker-compose run --rm web npm install

app-create:
	docker-compose run --rm web npx create-react-app my-app

app-start:
	docker-compose run --rm web npm start

json-server:
	docker run -d -p 3001:80 -v /media/cources/react-rtk-query-2023/server/db.json:/data/db.json clue/json-server