# ReactJS Todo App

## Getting started

## Run server
```
npm install
npm start
```

## Build
You may build the app and serve it statically in say a python server
```
npm install
npm run build
python -m http.server --bind 127.0.0.1 -d static 8080
```

*Note*: All `public` resources should be loaded in `.css` and `.jsx` files with respect to `@public/`.
However, when using HTML in JSX (like an `img` tag, publi resources should be loaded wrt `/`)
