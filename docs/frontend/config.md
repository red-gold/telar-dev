---
sidebar_position: 10
---

# Configuration

We keep the main configuration in  `.env` file for local/development and `.env.production` for production build. However all the configurations are managed in `path-to-project/ts-ui/src/config/*`.


### Environment Variables

- `REACT_APP_GATEWAY` - Gateway URL to access API (e.g. _https://social.faas.telar.dev_)
- `REACT_APP_AUTH_WEB_URI` - URI to access authentication pages (e.g. _https://auth.telar.dev_)
- `REACT_APP_BASE_ROUTE_API` - Base route for API URL (e.g. _/social_ for URL _https://social.faas.telar.dev/social_)
- `REACT_APP_NAME` - Your app name (e.g. _Telar Social Engine_)
- `REACT_APP_COMPANY_NAME` - Your company name (e.g. _Telar_)
- `REACT_APP_EMAIL_SUPPORT` - Your email support (e.g. support@telar.dev)
- `REACT_APP_WEBSOCKET_URL` - Your WebSocket server (e.g. _https://ws.telar.dev_)

:::note

`REACT_APP_BASE_ROUTE_API` is different with [base href](https://create-react-app.dev/docs/deployment/#building-for-relative-paths) for frontend server root.

:::


> ⭐️ This page needs help. Please help with your contribution. To start click on edit button.
