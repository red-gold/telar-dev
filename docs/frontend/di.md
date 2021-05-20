---
sidebar_position: 4
---

# Dependency Injection

## Telar Social frontend DI (Dependency Injection)
In this article how DI (Dependency Injection) helped us to reduced module complexity and increasing system maintainability and reusability **in a nutshell**.

### Pre-requisites
- DI (Dependency Injection)
- Telar Social frontend architecture

### What is dependency injection in Telar Social frontend definition
To make it simple I will explain the real usecase defenition in Telar Social frontend. Most of the times services are depend on other services (consuming from other service). To increase isolation for each service, we avoid consuming services directly. Instead we define interface for each service to access each other base on their interface. The implementation of each interface can be different base on requirements. 

### Using IOC Container in Telar Social frontend
Thanks to InversifyJS we are able to implement javascript project that adheres to the SOLID principles. With this we can have different implementation from Data or Web Service API layer. With the least changes are able to have different solutions for backend such as server-less, docker, and etc.

For example OpenFaaS Client implemented by Red Gold team. To use OpenFaaS Client we need to call useOpenFaaS() that bind classes to core service interfaces. We need to call the function in Social Engine file that execute function before rendering components.

### How can I implement services for `different backend`
Your server side is on PHP, Java,ASP.NET, Python, etc. Or you are using serverless solutions such as Google Cloud Function, AWS Lambda, Azure Functions, etc. You can connect Telar Social Frontend to any backend you build. You only need to implement the interfaces of core services like implementation of OpenFaaS Client.

There is a summary steps of creating your own data client. Let's assume that we want to implement the services for PHP backend.

You need to know about [TypeScript](https://www.typescriptlang.org/samples/index.html) and [implementing interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html).

You can get help from other data clients implementation for your backend and also using core domain for the domain of backend could be helpful.

1. Create a folder in data layer name phpClient.
2. Create a folder in /phpClient folder name services then in services folder create some folders following core/services folder such as services/votes, services/posts and etc.
3. In each folder inside /phpClient/services/* folder you should implement following interfaces in core/services/* folder in file with appropriate name. For example we need to implement IPostService from core/services/posts/IPostService.ts in data/phpClient/services/posts/PostService.ts file.
4. After implementing interfaces for services layer. We should register the dependencies for our phpClient services. Create a file in phpClient folder name dependecyRegisterar.ts.
5. Following firestoreClient dependencies, add a function name usePhp() and bind dependencies in the the function. For example for PostService class add

```js
container.bind<IPostService>(SocialProviderTypes.PostService).to(PostService)
```

Here SocialProviderTypes has the identifier of each service. To learn more take a look at inversify docs.
6. Finally call registering dependencies function for in socialEngine file.
Enjoy ;)

   It also would be great if you could contribute your clientData and backend with us to be part of this contribution 😍 .


> ⭐️ This page needs help. Please help with your contribution. To start click on edit button.
