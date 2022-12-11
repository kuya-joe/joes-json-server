# joes-json-server

## Install

Run `npm install`

## Run

Run using [json-server](https://github.com/typicode/json-server)

```
  json-server index.js
```

If you don't want to install node on your machine the docker way is to use [clue/docker-json-server](https://github.com/clue/docker-json-server)

And run (don't forget to change the path, better if its set absolutely):

```
   docker run -d -p 80:80 -v /path/to/data/cats.json:/data/db.json clue/json-server
```
