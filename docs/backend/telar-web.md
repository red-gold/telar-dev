---
sidebar_position: 2
---

# Telar Web

Telar web framework including, authentication, notifications, admin, actions and user management written in Go.

:::info

Find Telar Web repository [here](https://github.com/red-gold/telar-web).

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

```yml title="auth_config.yml"
environment:
  base_route: "" # Auth Microservice base route. In the case you are using a URL like `mysocial.com/auth` instead of `mysocial.com` you need to set this field `/auth`
  external_redirect_domain: https://social.telar.dev # Used as frontend domain(web) to redirect after login or verification
  web_url: https://social.telar.dev # Used as frontend domain(web) for verification URL which send to email
  auth_web_uri: https://auth.telar.dev # Authentication frontend(web) URI
  client_id: 7a9cbbf3e0bce602784f # Github OAuth client id
  client_secret: ""
  github_app_id: "12345" # Github app id
  oauth_client_secret_path: /var/openfaas/secrets/ts-client-secret
  oauth_provider: github # OAuth provider name
  oauth_provider_base_url: ""
  oauth_telar_base_url: ""
  report_status: "true"
  verify_type: emv
  write_debug: "true"
  exec_timeout: 20s
  read_timeout: 20s
  write_timeout: 20s


```

```yml title="gateway_config.yml"
environment:
  cookie_root_domain: .telar.dev # Cookie domain to accept
  gateway: https://social.faas.telar.dev # API gateway to access from frontend(web)
  internal_gateway: http://gateway.openfaas:8080/function # Internal API gateway to call between Microservices
  origin: "https://social.faas.telar.dev,https://social.telar.dev,https://auth.telar.dev" # Origin to accept
  websocket_server_url: https://ws.telar.dev # WebSocket URL

```

```yml title="notification_config.yml"
environment:
  base_route: "/notifications" # Notifications Microservice base route. In the case you are using a URL like `mysocial.com/notifications` instead of `mysocial.com` you need to set this field `/notifications`
  write_debug: "true"
  web_url: https://social.telar.dev # Used as frontend domain(web) for notification URL which send to email
  exec_timeout: 20s
  read_timeout: 20s
  write_timeout: 20s

```

```yml title="notification_config.yml"
environment:
  base_route: /storage # Storage Microservice base route. In the case you are using a URL like `mysocial.com/storage` instead of `mysocial.com` you need to set this field `/storage`
  bucket_name: resume-web-app.appspot.com # Your bucket name
  exec_timeout: "180"
  write_timeout: "180"
  read_timeout: "180"
  storage_secret_path: /var/openfaas/secrets/serviceAccountKey.json
  write_debug: "true"

```

 > ⭐️ This page needs help. Please help with your contribution. To start click on edit button.
