---
sidebar_position: 1
---

# Overview

This page give you an overview of Telar Scoial UI and things are working together in frontend.


![Telar Social UI Tools](/img/telar/ts-ui-tools.svg)


:::info

Find Telar Social UI repository [here](https://github.com/red-gold/ts-ui).

:::
## Directory Structure

```bash
root-directory
├── src
│   ├── api
│   ├── assets
│   ├── components
│   ├── config
│   ├── constants
│   ├── containers
│   ├── core
│   │   ├── domain
│   │   │   ├── entityName1
│   │   │   ├── entityName2
│   │   │   └── ...
│   │   ├── factories
│   │   └── services
│   │       ├── entityName1
│   │       ├── entityName2
│   │       └── ...
│   ├── data
│   │   ├── webAPI1
│   │   │   ├── services
│   │   │   │   ├── entityName1
│   │   │   │   ├── entityName2
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── webAPI2
│   │   │   ├── services
│   │   │   │   ├── entityName1
│   │   │   │   ├── entityName2
│   │   │   │   └── ...
│   │   │   └── ...
│   ├── layouts
│   ├── lib
│   ├── locales
│   ├── models
│   │   ├── entityName1
│   │   ├── entityName2
│   │   └── ...
│   ├── routes
│   ├── sotre
│   │   ├── actions
│   │   ├── reducers
│   │   └── sagas
│   ├── styles
│   │   ├── base
│   │   └── components
│   └── typings
└── public
```

  ### Directory Descriptions
 
  * **React Components**: We devided react components components in three parts. The component which is [stateless](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc), we keep in `src/layouts`.
                          The `src/containers` including master components which we use router to load these components. 
                          The `src/components` in including state components.
  * **State Management**: The `src/store` including directories managing redux store states. 
                          The `store/actions` including [actions creators](https://redux.js.org/basics/actions#action-creators).
                          The `store/reducers` including [redux reducers](https://redux.js.org/basics/reducers).
                          The `store/sagas` including saga files from [redux-saga](https://redux-saga.js.org/) 
                            to manage side effects such as asynchronous things like data fetching. 
    contains example documentation files written in Markdown.
  * **Web API Service**: The `website/blog-examples-from-docusaurus` directory contains examples of blog posts written in markdown.
  * **Core Management**: We keep the `src/core` as a most stable layer that includes `core/domain` including Web API Service class entities,
                          `core/factories` including factory interface and class for Web API Service classes and `core/services`
                          including main interfaces for Web API Service in `src/data` directory.
### General Frontend Flow

<img alt="General Frontend Flow" src="/img/telar/frontend-flow.png" />

To **manage states** in frontend side, Telar Social has a simple implementation of [Redux](https://redux.js.org/introduction/motivation). Follow above diagram `Components` emit an action from `Actions`. 
If the action is a direct change on state in [Redux Store](https://redux.js.org/api/store) `Reducers` will execute that action. If the action is async or needs to call an async web api `Sagas` will execute that action.

`Sagas` is a layer that manage side effects. Using [redux-saga](https://redux-saga.js.org/) library we can handle `async actions` easier.
> Asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, simple to test, and better at handling failures. [redux-saga doc](https://redux-saga.js.org/)

<img alt="General Frontend Flow" src="/img/telar/redux-store-flow.png" />

`Sagas` layer using IOC container to access the `Web Service API`. When async action is done, `saga` will call another action to change respective state in (https://redux.js.org/api/store).

### Using IOC Container 

Thanks to [InversifyJS](http://inversify.io/) we are able to implement javascript project that adheres to the SOLID principles. With this we can have different implementation from `Data` or `Web Service API` layer. With the **least** changes are able to have different solutions for backend such as server-less, docker, and etc.


<img alt="General Frontend Flow" src="/img/telar/ioc-flow.png" />


 > ⭐️ This page needs help. Please help with your contribution. To start click on edit button.