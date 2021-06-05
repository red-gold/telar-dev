---
sidebar_position: 4
---

# WebSocket server
WebSocket server to handle realtime data like user chat and dispatching actions for User Interface.

### Configuration

- `BASE_ROUTE` - Base route for API URL (e.g. _/social_ for URL _https://social.faas.telar.dev/social_)
- `GATEWAY` - Gateway URL to access API (e.g. _https://social.faas.telar.dev_)
- `ORIGIN` - Origin to accept by WebSocket server (e.g. https://social.telar.dev,https://social.faas.telar.dev)
- `PAYLOAD_SECRET` - You long string/random payload secret using to secure Microservices calls by HMAC.
- `PUBLIC_KEY` - Generated public key using _openssl ec -in key -pubout -out key.pub_.
- `EMAIL_NOTIFY_INTERVAL` - The time interval to send user notifications by email. Each time it will read 10 user notifications.
- `FN_UUID` - Function identifier to call API functions.

:::caution

Make sure that your `PAYLOAD_SECRET`, `PUBLIC_KEY` are not exposed to public.

:::


 > ⭐️ This page needs help. Please help with your contribution. To start click on edit button.
