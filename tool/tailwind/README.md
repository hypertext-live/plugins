Blueprint using [tailwind][], see the [blueprint][] repository to learn more.

Edit the `site/assets/css/style.css` file; the generated style file is `assets/css/style.css` in the target build directory (eg: `build/debug`).

## Development

To start a development server with live reload run one of:

```
npm run start
yarn start
```

## Release

To create a release build for production:

```
npm run release
yarn release
```

## Open

To create a release build and open it in the browser:

```
npm run open
yarn open
```

Note that live reload is not enabled; this task is for previewing prior to publishing.

[tailwind]: https://tailwindcss.com
[blueprint]: https://github.com/hypertext-live/blueprint
