# Next SEO DevTools

Analyze SEO while developing your Next.js websites/apps.

(Only App Router is supported. Support for Pages Router is not a priority.)

# Getting started

1. run `npm i next-seo-devtools -D`

2. import and mount the component in `app/layout`:

```js
import NextSEODevTools from "next-seo-devtools";
import "next-seo-devtools/dist/index.css";
...

...
<body>
    <NextSEODevTools />
    ...
</body>
...
```
It'll automatically be hidden in a built site but you should still install it as `devDependencies`.
