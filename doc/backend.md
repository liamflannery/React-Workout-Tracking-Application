# Backend Server

The project provides a backend service to support real time chat.   Users can
register and create new program topics, post and join programs.
Real time chat is supported via web sockets.

To star the backend, run:

```bash
npm run server
```

To run the backend tests:

```bash
npm run test-server
```

## Routes

All API calls except for `/auth/register` should have
an `Authorization` header set to `Basic xxxxxx`  where `xxxxx` is the token returned when
the user registers.  

`/auth/register`

* `POST` - register a new username
  * request: `{"username": "bob"}`
  * response: `{"status": "username taken"}` or `{"status": "success", "username": "bob", "token": "xxxxxx"}`
    * The returned `token` value is used for authorization is subsequent requests.

`/auth/`

* GET - get the user details
  * response: {"status": "unregistered"} or `{"status": "success", "username": "bob", "token": "xxxxxx"}`

`/api/programs/`

* `POST` - create a new program
  * requires a valid session cookie
  * request: `{"title": "program title"}`
  * response: `{"status": "success" | "unauthorised", "id": "program id"}

* `GET` - list programs
  * requires a valid session cookie
  * response: `{"programs": [{"title": "xyzzy", "days": 99, "id": "program id"}]}`

`/api/programs/:id`

* `GET` - list recent days
  * requires a valid session cookie
  * query parameter `N` - number of days, default 10
  * response: `{"days": [{"creator": "username", "text": "day text", "timestamp": "TTT", "id": "day id"}]}`

* `POST` - post a new day
  * requires a valid session cookie
  * request: `{"text": "day text"}`
  * response: `{"status": "success" | "unauthorised", "id": "day id"}`

`/api/programs/:id/:dayid`

* `GET` - get day detail
  * requires a valid session cookie
  * response: `{"creator": "usernamae", "text": "day text", "timestamp": "TTT", "id": "day id"}`

* `DELETE` - delete day
  * requires a valid session cookie for the user who created the day
  * response: `{"status": "success" | "unauthorised"}

## Database

We use MongoDB to store data with the following tables.  To run the server yourself you
need to create a MongoDB database, for example with
[MongoDB Atlas](https://www.mongodb.com/atlas/database) as described in
[the textbook](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#mongo-db).  
You will need to add the access URL to your `.env` file for the server to work.

### Sessions

```json
{
    "_id": "session id used as authorization token",
    "username": "unique username registered"
}
```

### Programs

```json
{
    "_id": "program id",
    "title": "program title",
    "creator": "username of creator"
}
```

### Days

```json
{
    "_id": "day id",
    "program": "program id",
    "user": "username of author",
    "timestamp": "ISO timestamp for day",
    "text": "markdown text of the day"
}
```
