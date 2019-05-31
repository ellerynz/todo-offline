# Todo Offline (ish)

## Setup

To get up and running locally (without service worker):

```
yarn install
yarn --cwd server install
yarn serve
yarn --cwd server start # In another terminal tab
```

To get service workery goodness:
```
yarn build
serve -s dist # Assuming you've already got `yarn global add serve`
yarn --cwd server start # In another terminal tab
```

Run on 127.0.0.1:5000 and you should be right
