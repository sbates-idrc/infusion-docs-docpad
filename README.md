Infusion Documentation
======================

Install DocPad:

```
npm install -g docpad
```

Get the node modules for this project:

```
npm install
```

Grab the infusion-docs:

```
git submodule init
git submodule update
```

Run Grunt:

```
grunt
```

To generate the HTML and run the DocPad server locally:

```
docpad run --env static
```

Point your browser to:

```
http://localhost:9778/README.html
```
