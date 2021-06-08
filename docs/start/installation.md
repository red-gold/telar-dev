---
sidebar_position: 2
---

# Installation

Telar Social backend can be deployed to a variety of container orchestrators such as Kubernetes, OpenShift, Docker Swarm or to a single host with faasd and docker-compose.
Frontend can be deployed to the same infrastructure or hosting on [Firebase hosting](https://firebase.google.com/docs/hosting), [AWS web hosting](https://aws.amazon.com/websites/), [Netlify](https://www.netlify.com/), [Render](https://render.com), or [Vercel](https://vercel.com/) separately.


## Running locally (Development)


### Pre-required

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

### Setup

1. Clone repository
```sh
git clone git@github.com:red-gold/ts-ui.git
```
2. Add `[127.0.0.1 social.example.com]` domain into your host file. [Doc you may refer to](https://phoenixnap.com/kb/how-to-edit-hosts-file-in-windows-mac-or-linux)
3. Copy `ts-ui/docker/config/.env.secrets.init` file and set the name `.env.secrets`.
4. Config email to receive email notification for signup, reset password, etc. Please refer to [doc #2](https://github.com/Qolzam/telar-cli/blob/master/docs/ofcc-setup/8.md#2-enter-your-valid-gmail-and-password-for-sending-signupreset-password-verfication-code-to-telar-social-users)
   1. Set your smtp email`(e.g. for gmail is smtp.gmail.com:587)` and your email my@email.com

   ```sh
   npx envedit -s ./docker/config/.env.app_config -l smtp_email=YOUR_EMAIL_SMTP -l ref_email=YOUR_EMAIL
   ```
   
   1. Set your email password

   ```sh
   npx envedit -s ./docker/config/.env.secrets -l ref_email_pass=YOUR_EMAIL_PASS -b64
   ```
5. Run **back-end**
```sh
cd docker
docker-compose up

#or new docker compose installed by docker
docker compose up
```
:::tip

If you want change other configuration like default URL or MongoDB host URL(form [Secrets](../backend/serctes.md) ) you can change all config in `path-to-project/ts-ui/docker/config/`.

:::

1. Run **front-end**
```sh
yarn
yarn start
```

## Running on Kubernetes using Telar CLI

:::caution

[Telar CLI](https://github.com/Qolzam/telar-cli) is under development. Use [manual setup](#running-on-kubernetes-manually) instead!

:::

## Running on Kubernetes (Manually)

### Pre-required

- Familiar with [Kubernetes](https://kubernetes.io/)
- Know how to work with [OpenFaaS](https://openfaas.com)

### Setup

1. Clone Telar repositories
```sh
   git clone git@github.com:red-gold/ts-serverless.git && \
   git clone git@github.com:red-gold/telar-web.git && \
   git clone git@github.com:red-gold/ts-ui.git && \
   git clone git@github.com:red-gold/ts-websocket.git
```

2. Change projects config based on your requirements
   -  Set your Telar Web [configuration](../backend/telar-web#configuration) in `path-to-project/telar-web/config/*.yml`
   -  Set your Telar Scoial [configuration](../backend/ts-serverless#configuration) in `path-to-project/ts-serverless/config/*.yml`
   -  Set your User Interface [configuration](../frontend/config#environment-variables) in `path-to-project/ts-serverless/.env.production`
   -  Set your WebSocket server [configuration](../backend/ws#configuration) in `path-to-project/ts-websocket/k8s/deploy.yml`

:::note

For WebSocket server `PAYLOAD_SECRET`, `PUBLIC_KEY` in configuration, read from Kubernetes secret which you will create on next step.

:::

3. Create Secret for Kubernetes
Telar Social use Kubernetes secrets to keep sensitive information safe. Set the environment variable (e.g. ) in terminal and run commnad below.

```sh
 kubectl -n openfaas-fn create secret generic secrets --from-file=./key --from-file=./key.pub --from-file=./serviceAccountKey.json \
  --from-literal="ts-client-secret=$CLIENT_SECRET" --from-literal="mongo-host=$MONGO_HOST" \
  --from-literal="mongo-database=$MONGO_DB" \
  --from-literal="recaptcha-key=$RECAPTCHA_KEY" --from-literal="ref-email-pass=$REF_EMAIL_PASS" \
  --from-literal="redis-pwd=$REDIS_PWD" --from-literal="admin-username=$ADMIN_USERNAME"\
  --from-literal="admin-password=$ADMIN_PASSWORD" --from-literal payload-secret="$PAYLOAD_SECRET"\
  --from-literal="phone-auth-token=$PHONE_AUTH_TOKEN" --from-literal="phone-auth-id=$PHONE_AUTH_ID" 
```

:::info

To know more about each secret field [check here](../backend/serctes.md).

:::

4. Deploy `telar-wb` and `ts-serverless`
We supposed you are familiar with `OpenFaaS`. All you need now is moving to root of each project and change the `stack.yml` file to your own docker user (e.g. `qolzam/actions:v0.1.13` to `my_docker_user/actions:v0.1.0`). Then run command below to build/push/depoy each Microservice.

```sh
faas up 
```

5. Deploy WebScoket server
You are able to run WebScoket server on any server(e.g. Heroku) but here we prefer to keep the WebSocket server on Kuberenetes cluster. Run command below to deploy WebSocet server.

```sh
kubectl apply -f ./k8s/service.yml
kubectl apply -f ./k8s/deploy.yml
```

6. Deploy User Interface (`ts-ui`)
User interface can be deployed on Kubernetes or web host providers like [Firebase hosting](https://firebase.google.com/docs/hosting).

- Hosting on web host providers, you can simply build the project using `npm run build` and deploy based on web host provider instruction. (e.g. [Firebase hosting](https://firebase.google.com/docs/hosting)) 
- To host on Kebenetes change `stack.yml` file for your own docker user and run command below.


```sh
npm run build
faas up
```

7. To start go `https://your-social-domain/admin/login` page. Login with admin username/password and wait until you see welcome page. And we are done!

## Running on faasd
We will add it soon :)


## Expose Social Network to the internet from your local
In the case you need to make your social network available on the internet from your local PC/Server, you may consider options below.

- **[inlets](https://github.com/inlets/inlets) (Recommended):** inlets uses a websocket to create a tunnel between a client and a server. The server is typically a machine with a public IP address, and the client is on a private network with no public address.
inlets is considered production-ready, but you should do some testing before you depend on it. For a commercially-supported solution, see [inlets PRO](https://inlets.dev/), which enables additional use-cases, has more thorough testing and secure defaults.

- **[ngrok](https://ngrok.com/):** ngrok provides a real-time web UI where you can introspect all HTTP traffic running over your tunnels. Replay any request against your tunnel with one click.

- **[Cloudflare](https://developers.cloudflare.com/argo-tunnel/):** You can connect applications, servers, and other resources to Cloudflare's network using Cloudflare Tunnel. When connected, Cloudflare can apply Zero Trust policies to determine who can reach the resource.

## Config Traefik for Telar Social
Traefik is an open-source Edge Router that makes publishing your services a fun and easy experience. It receives requests on behalf of your system and finds out which components are responsible for handling them.

We also config DNS challenge to resolve certificate by Let's Encrypt. We used `digitalocean` provider as an example but you can find your own provider [here](https://doc.traefik.io/traefik/v2.0/https/acme/#providers)

#### Create secret for certificate resolver
Change `digitalocean` with your provider name and replace `your_token` with your token.

```sh

kubectl create secret -n kube-system generic digitalocean --from-literal=dns-token=your_token

```

#### Deploy Traefik on K8S cluster
Excute command below to deploy Traefik. Before that, change `my@email.com` to your email and `digitalocean` to your provider.

> In command below we use letsencrypt in `production` mode if you are in development statge you can change it to `staging`.
> 
> letsencrypt production: https://acme-v02.api.letsencrypt.org/directory
> 
> letsencrypt staging: https://acme-staging-v02.api.letsencrypt.org/directory


```sh
helm install --namespace=kube-system \
    --set="additionalArguments={--accesslog=true,--api.insecure=true,--log.level=DEBUG,--certificatesresolvers.letsencrypt.acme.email=my@email.com,--certificatesresolvers.letsencrypt.acme.storage=/data/acme.json,--certificatesresolvers.letsencrypt.acme.caserver=https://acme-v02.api.letsencrypt.org/directory,--certificatesResolvers.letsencrypt.acme.dnschallenge=true,--certificatesResolvers.letsencrypt.acme.dnschallenge.provider=digitalocean}" \
    --set="env[0].name=DO_AUTH_TOKEN" \
    --set="env[0].valueFrom.secretKeyRef.name=digitalocean" \
    --set="env[0].valueFrom.secretKeyRef.key=dns-token" \
    traefik traefik/traefik
```

#### Deploy Telar Social functions ingress route
To have a pretty URL we use `social-middleware-gateway` ingress route to have `https://my.social.com/*` URL instead of `https://my.social.com/function/*`. The `ingress-route-social` ingress route will route requests to `OpenFaaS` gateway service.

```sh title="social-middleware-gateway.yml"

apiVersion: traefik.containo.us/v1alpha1
kind: Middleware
metadata:
  name: social-middleware-gateway
spec:
  addPrefix:
    prefix: /function

```


```sh title="ingress-route-social.yml"

apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: ingress-route-social
spec:
  entryPoints:
    - websecure
  routes:
    - match: Host(`my.social.com`)
      kind: Rule
      middlewares:
        - name: social-middleware-gateway
          namespace: default
      services:
        - name: gateway
          namespace: openfaas
          kind: Service
          port: 8080
  tls:
    certResolver: letsencrypt
    domains:
    - main: my.social.com
      sans:
      - '*.my.social.com'

```


#### Deploy WebSocket ingress route

```sh title="ws-ingress.yml"

apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: ws-ingress
spec:
  entryPoints:
    - websecure
  routes:
    - match: Host(`ws.social.com`)
      kind: Rule
      services:
        - name: ws-service
          namespace: openfaas-fn
          kind: Service
          port: 3001
  tls:
    certResolver: letsencrypt
    domains:
    - main: social.com
      sans:
      - '*.social.com'

```

> ⭐️ This page needs help. Please help with your contribution. To start click on edit button.