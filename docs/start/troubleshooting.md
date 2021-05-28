---
sidebar_position: 3
---

# Troubleshooting

We added the most common issue can happen when you build/deploy/run Telar Social. If you can not see your issue use [Slack community](https://docs.google.com/forms/d/e/1FAIpQLSdkwt5pxmyCZQO0AmyAghBOdA-XBG298Pfm5Dw1xjNGaGeCYQ/viewform) for general question. For technical bug [Github](https://github.com/red-gold/ts-ui/issues/new/choose) is the right place to track technical issues.


## Backend

#### I get error like wrong username/password to send email while trying signup new user

- Check if your `smtp_email`, `ref_email`, `ref_email_pass` email cofiguration are correct. 
- Check if you set the right port for `smtp_email` e.g. for gmail `smtp_email=smtp.gmail.com:587`.
- In case you are using `gmail` make sure you use one of these options.
  - [Gmail app password](https://support.google.com/accounts/answer/185833?hl=en) **(Recommended)**: This option will [create an app password](https://myaccount.google.com/apppasswords) to use for specific app(Telar Social) instead of using your Gmail account password. But to create an app password you need to enable [2-Step Verification](https://support.google.com/accounts/answer/185839) to secure your account.
  - Turn on [less secure app](https://support.google.com/accounts/answer/6010255?hl=en) **(Not Recommended):** If you want to use your Gmail account password you need to [turn on less secure app access](https://myaccount.google.com/lesssecureapps).