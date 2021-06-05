---
sidebar_position: 5
---

# Secrets

Make sure to keep your secrets out of public access like Github repository.

 - `admin_username` - Admin dashboard username.
 - `admin_password` - Admin dashboard password.
 - `mongo_host` - Mongo database host URI.
 - `mongo_database` - Mongo database name.
 - `phone_auth_id` - SMS auth id from plivo.
 - `phone_auth_token` - SMS auth token from plivo.
 - `key` - Generated private key using _openssl ecparam -genkey -name prime256v1 -noout -out key_.
 - `key_pub` - Generated public key using _openssl ec -in key -pubout -out key.pub_.
 - `recaptcha_key` - ReCaptcha secret key.
 - `ref_email_pass` - Email password of __ref_email__ to send verification, reset password , etc. emails.
 - `payload_secret` - You long string/random payload secret using to secure Microservices calls by HMAC.
 - `service_account_key_json` - Your Firebase service account file generated from your console settings.
 - `ts_client_secret` - Github OAuth app secret key.

 > ⭐️ This page needs help. Please help with your contribution. To start click on edit button.
