# Docker image of Puppeteer

Build puppeteer image with extra fonts.

## Build

```shell
docker build -t puppeteer-chrome-linux
```

```shell
docker run -i --init --rm --cap-add=SYS_ADMIN --name puppeteer-chrome puppeteer-chrome-linux node -e "`cat test.js`"
```