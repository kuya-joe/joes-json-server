## The docker way

If you don't want to install node on your machine the docker way is to use [clu$

And run:

(Don't forget to change the path to your json file, better if its set absolutel$

```
   docker run -d -p 80:80 -v /absolute/path/to/data/folder:/data/db.json clue/json-server
```
