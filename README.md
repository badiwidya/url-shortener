# URL Shortener

## Endpoint

- `POST /api/url` - Add new short url
- `GET /:shorturl` - Redirect to real url

## Sample Request

```json
{
  "url": "https://google.com/"
}
```

**_Note: url must have http:// or https:// protocol. If not, the middleware will decline it._**
