# Gym App



## Configuration

Copy the file `.env.dist` to `.env` and edit the file with your own
settings - in particular your MongoDB settings if you are doing server
side development.  Note that these settings are only relevant to the
server implementation, not the front-end.

## Frontend Project

The `src` folder contains a template front-end React project to get you
started.

To install React and all the required packages, run:

```bash
npm install
```

To run the front-end development server:

```bash
npm run start
```

This will run the server on port 3000.

You can run the front-end tests as usual with:

```bash
npm run test
```

Which will run any tests you have added to the front-end project under `src`.  Currently it
runs one dummy test.

## Backend Server

The backend server is documented in [Backend Server](doc/backend.md). 
