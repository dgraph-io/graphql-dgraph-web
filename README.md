### Running

```sh
yarn install
yarn start
```

### Adding a page 

Just add a `mdx` file with the `title` on top of the file. Now if you want to add a section which can have more parts then just create a folder and add the `index.mdx` file for the main file and again add a `title` field on top and then add as many files you want `*.mdx`.

### Adding GraphiQL component

The common GraphiQL component can be used throughout the site, just include it in the `mdx` file you want and you can even pass a `query` to fill it with a default value. Refer `index.js` for basic usage and  `api.mdx` for including a default value.

