# Next SEO DevTools

Analyze SEO while developing your Next.js websites/apps.

(Only App Router is supported. Support for Pages Router is not a priority.)

# Getting started

1. run `npm i next-seo-devtools -D`

2. import component and its styles in `app/layout`:

```js
import NextSEODevTools from "next-seo-devtools";
import "next-seo-devtools/dist/index.css";
```

3. mount the component:

```js
    ...
    <body>
        <NextSEODevTools />
        ...
    </body>
    ...
```

It will automatically not render in a built site.
