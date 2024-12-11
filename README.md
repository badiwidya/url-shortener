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

## Sample Response

```json
{
  "message": "Generated successfully.",
  "new_url": "randomstringhere"
}
```

The generated url can be accessed on example.com/new_url
