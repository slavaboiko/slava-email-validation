# Email Validation Service

A tiny email validation service that allows to verify email address with multiple validators.

## Running

```
docker run -t -p 8080:8080 -e PORT=8080 slavaboiko/email-validation
```

## Testing

```
curl -XPOST -d '{"email":"xxx@yyy.zzz"}' http://localhost:8080/email/validate
```


## Included Validators

 - `regexp` - checks email against https://emailregex.com/
 - `domain` - checks email domain with known TLDs
 - `smtp` - tries to connect to SMTP server if MX records are found 