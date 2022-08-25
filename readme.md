# Docker image of Puppeteer

Build puppeteer image with extra fonts.

## Build

```shell
docker build -t puppeteer-chrome-linux
```

```shell
docker run -i --init --rm --cap-add=SYS_ADMIN --name puppeteer-chrome puppeteer-chrome-linux node -e "`cat test.js`"
```

## Example
<img src=https://user-images.githubusercontent.com/15277233/186731351-06c28220-2b9a-43b5-8596-ab404bd4313d.png width=500>
