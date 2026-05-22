# Backend

Be The Hero API, responsible for NGOs, sessions, and published cases.

## Requirements

- Node.js 22 or newer.
- Yarn 1.x.

## Commands

Install dependencies:

```bash
yarn install
```

Run the SQLite database migrations:

```bash
npx knex migrate:latest
```

Start the API in development:

```bash
yarn start
```

The API is available at:

```text
http://localhost:3333
```

Run the tests:

```bash
yarn test
```

Check for vulnerabilities:

```bash
yarn audit
```

## Database

The project uses SQLite through Knex.

- Development database: `src/database/db.sqlite`
- Test database: `src/database/test.sqlite`
- Migrations: `src/database/migrations`

Useful commands:

```bash
npx knex migrate:latest
npx knex migrate:rollback
```

## Main Routes

- `POST /sessions`: authenticates an NGO by `id`.
- `GET /ongs`: lists NGOs.
- `POST /ongs`: creates an NGO.
- `GET /incidents?page=1`: lists paginated cases.
- `POST /incidents`: creates a case for the authenticated NGO.
- `DELETE /incidents/:id`: removes a case owned by the authenticated NGO.
- `GET /profile`: lists cases owned by the authenticated NGO.

Authenticated routes use the header:

```text
Authorization: <ong_id>
```

## Current Stack

- Express 5
- Celebrate 15
- Knex 3
- SQLite3 6
- Jest 30
- Supertest 7
- Nodemon 3

## Notes

The frontend and mobile apps expect this API to run on port `3333`.
If the mobile app times out on HTTP requests, confirm that the backend is running on the same machine serving Expo.
