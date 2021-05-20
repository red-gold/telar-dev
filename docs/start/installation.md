---
sidebar_position: 2
---

# Installation

Telar Social backend can be deployed to a variety of container orchestrators such as Kubernetes, OpenShift, Docker Swarm or to a single host with faasd and docker-compose.
Frontend can be deployed to the same infrastruction or hosting on Firebase hosting, AWS web hosting, netlify, or Vercel.


## Running locally (Development)

1. Clone repository
```sh
$ git clone git@github.com:red-gold/ts-ui.git
```
2. Add `[127.0.0.1 social.example.com]` domain into your host file. [Doc you may refer to](https://phoenixnap.com/kb/how-to-edit-hosts-file-in-windows-mac-or-linux)
3. Copy `ts-ui/docker/config/.env.secrets.init` file and set the name `.env.secrets`.
4. Config email to receive email notification for signup, reset password, etc. Please refer to [doc #2](https://github.com/Qolzam/telar-cli/blob/master/docs/ofcc-setup/8.md#2-enter-your-valid-gmail-and-password-for-sending-signupreset-password-verfication-code-to-telar-social-users)
   1. Set your smtp email`(e.g. for gmail is smtp.gmail.com:587)` and your email my@email.com

   ```sh
   $ npx envedit -s ./docker/config/.env.app_config -l smtp_email=YOUR_EMAIL_SMTP -l ref_email=YOUR_EMAIL
   ```
   
   1. Set your email password

   ```sh
   $ npx envedit -s ./docker/config/.env.secrets -l ref_email_pass=YOUR_EMAIL_PASS -b64
   ```
5. Run **back-end**
```sh
$ cd docker
$ docker-compose up

#or new docker compose installed by docker
$ docker compose up
```
6. Run **front-end**
```sh
$ yarn
$ yarn start

```

## Running on Kubernetes
We will add it soon :)

## Running on faasd
We will add it soon :)
