---
sidebar_position: 3
---

# Telar Social Serverless

Including all services relate to social network written in Go.

:::info

Find Telar Social Serverless repository [here](https://github.com/red-gold/ts-serverless).

:::

### Configuration

```yml title="app_config.yml"
environment:
  app_name: Telar Social # You app name
  base_route_domain: "" # In the case you are using a domain like `mysocial.com/social` instead of `mysocial.com` you need to set this field `/social`
  db_type: mongo # Type of Database (Right now we only support mongodb for Telar Social community version)
  header_cookie_name: he # Cookie name for JWT header
  org_avatar: https://avatars3.githubusercontent.com/u/43268620 # You organization avatar
  org_name: Red Gold # You organization name
  payload_cookie_name: pa # Cookie name for JWT payload
  phone_source_number: "0123456" # Phone source number to send SMS
  read_timeout: 10s
  recaptcha_site_key: 6LfXPboUAAAAAIQmwp8HVll7n7ZUpwNW1JL5RcoW # Recaptcha site key (not secret key)
  redis_address: redis-19712.c12.us-east-1-4.ec2.cloud.redislabs.com:19712
  ref_email: no-reply@telar.dev # The email which used to send signup verify email, reset password, etc.
  signature_cookie_name: si # Cookie name for JWT signature 
  smtp_email: smtp.zoho.com:587 # SMPT and port for `ref_email`
  write_timeout: 10s
  debug: true

```

```yml title="gateway_config.yml"
environment:
  cookie_root_domain: .telar.dev # Cookie domain to accept
  gateway: https://social.faas.telar.dev # API gateway to access from frontend(web)
  internal_gateway: http://gateway.openfaas:8080/function # Internal API gateway to call between Microservices
  origin: "https://social.faas.telar.dev,https://social.telar.dev,https://auth.telar.dev" # Origin to accept
  websocket_server_url: https://ws.telar.dev # WebSocket URL

```

 > ⭐️ This page needs help. Please help with your contribution. To start click on edit button.
