# Okta Express Basic CRUD App Example

This tutorial shows you how to build a Node.js blog using [Express.js](https://expressjs.com/), [OpenID Connect](/blog/2017/07/25/oidc-primer-part-1), and [Sequelize.js](http://docs.sequelizejs.com/).

Please read [Tutorial: Build a Basic CRUD App with Node.js](https://developer.okta.com/blog/2018/06/28/tutorial-build-a-basic-crud-app-with-node) to walk through the tutorial.

**Prerequisites**

- Basic knowledge of JavaScript
- [Node.js](https://nodejs.org/en/)
- [Okta CLI](https://cli.okta.com/)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

## Getting Started

To install this example application, run the following commands:
```
git clone https://github.com/oktadev/okta-express-basic-crud-app-example.git
cd okta-express-basic-crud-app-example
```

### Create an OIDC Application in Okta

Create a free developer account with the following command using the [Okta CLI](https://cli.okta.com):

```shell
okta register
```

If you already have a developer account, use `okta login` to integrate it with the Okta CLI.

Provide the required information. Once you register, create a client application in Okta with the following command:

```shell
okta apps create
```

You will be prompted to select the following options:
- Type of Application: **1: Web**
- Redirect URI: `https://localhost:3000/authorization-code/callback`
- Logout Redirect URI: `https://localhost:3000/`

Run `cat .okta.env` (or `.okta.env` on Windows) to see the issuer and credentials for your app. Update `app.js` with your Okta settings.

Finally, create a new API token. You can find the steps to create an API token [here](https://developer.okta.com/docs/guides/create-an-api-token/main/). Update `auth.js` with your Org Domain and the API Token.

### Install dependencies and run the app

To install the dependencies and start the app, run the following commands:
```
npm install
npm start
```

## Help

Please post any questions as comments on the [blog post][https://developer.okta.com/blog/2018/06/28/tutorial-build-a-basic-crud-app-with-node], or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
