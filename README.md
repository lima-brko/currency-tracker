# currency-tracker
A currency price tracker app built with Koa, GraphQL, MongoDB

### GraphiQL DEMO
[GraphiQL Page](https://api-currency-tracker.herokuapp.com/graphql)


### Usage
- Get all tracks
```js
{
  tracks {
    id
    fromCurrency
    toCurrency
    fromPrice
    toPrice
    email
    until
  }
}
```

- Get one track
```js
{
  track(id: "*track_id*") {
    email
    until
  }
}
```

- Create a track
```js
mutation {
  createTrack(
    fromCurrency: "USD", 
    toCurrency: "KRW", 
    fromPrice: 1, 
    toPrice: 500, 
    email: "test@domain.com", 
    until: "2020-03-28T03:29:21.482Z"
  ) {
    id
  }
}
```

- Delete a track
```js
mutation {
  deleteTrack(id: "*track_id*") {
    id
  }
}
```


## Install
### Local
- Install [NodeJS](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/)
- Run `npm install`
- Create a `.env` file based on `.env.example` and edit `MONGO_URI` value to `mongodb://localhost:27017/currency-tracker`
- Run `npm start`

### Docker
- Install [Docker](https://www.docker.com/)
- Run `docker-compose up`

## Built-with

- NodeJS ([Koa framework](https://koajs.com/))
- [GraphQL](https://graphql.org/)
- [MongoDB](https://www.mongodb.com/)

## Roadmaps

- Add validation on mutations
- Add currency cc validation
- Add code test

## License

[MIT © Felipe Lima](./LICENSE)
