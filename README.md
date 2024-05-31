![Contensis 11ty Starter](/readme.png)

# Contensis 11ty (Eleventy) Starter

A starter project for building completely static websites with [Contensis](https://www.contensis.com/) and [11ty](https://www.11ty.dev/).

## Quick install

Required: Git, Node >18, NPM.

```
git clone https://github.com/tbreeze-zengenti/contensis-11ty-starter.git my-project
cd my-project
npm i
```

## Development

### Local development

A local development server with hot-reloading is available at [http://localhost:8080/](http://localhost:8080/). To access it run:

```
npm run dev
```

### Contensis JS Delivery API

To configure the project for your Contensis environment a .env file is provided. This will define a suitable client config for working with the (Contensis JS Delivery API)[https://www.npmjs.com/package/contensis-delivery-api].

### Axios

As an alternative to the JS Delivery API an Axios example is provided within the `_data` folder.

## Deployment

A Dockerfile is included for deploying the application to Contensis's Blocks infrastructure.

