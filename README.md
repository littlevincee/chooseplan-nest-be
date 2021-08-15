# Choose Plan Backend Quick Start

Choose Plan Backend uses [Nest](https://github.com/nestjs/nest) framework and it is dockerised.

## Running the app dockerised

```bash
1. build the docker image
$ docker build -t chooseplan-image:master .

2. run docker image
$ docker-compose up -d
```

The backend app is hosted by Nginx via port 80 which can be accessed via e.g. `localhost:80/api/plans-features/all`

## Running the app locally

### Installation

```bash
$ yarn install
```

```bash
# development
$ yarn run start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```