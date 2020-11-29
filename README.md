# Steps to reproduce
1. `npm install`
1. `serverless webpack` or `serverless offline start`

will yield:

```
[me@my-computer webpack-fails]$ sls webpack
Serverless: Running "serverless" installed locally (in service node_modules)
Serverless: Bundling with Webpack...
Starting type checking service...
Using 1 worker with 2048MB memory limit
internal/modules/cjs/loader.js:967
  throw err;
  ^

Error: Cannot find module '/home/evac/code/webpack-fails/--max-old-space-size=2048'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:964:15)
    at Function.Module._resolveFilename (pkg/prelude/bootstrap.js:1346:46)
    at Function.Module._load (internal/modules/cjs/loader.js:840:27)
    at Function.Module.runMain (pkg/prelude/bootstrap.js:1375:12)
    at internal/main/run_main_module.js:17:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
```
