# Example: Rollup + TypeScript * Jimp

This is a minimal reduction of a bug.
If we try to compile a typescript file with Jimp-depedndency with rollup we get the following error message:


## Error

~~~
$ yarn rollup
yarn run v1.22.5
$ rollup --config

./src/index.ts → ./dist...
[!] Error: 'default' is not exported by node_modules/jimp/es/index.js, imported by src/index.ts
https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module
src/index.ts (1:7)
1: import Jimp from 'jimp/es';
          ^
2: 
3: // open a file called "lenna.png"
Error: 'default' is not exported by node_modules/jimp/es/index.js, imported by src/index.ts
    at error (/home/mogoh/src/github.com/mogoh/rollup-typescript-jimp/node_modules/rollup/dist/shared/rollup.js:5265:30)
    at Module.error (/home/mogoh/src/github.com/mogoh/rollup-typescript-jimp/node_modules/rollup/dist/shared/rollup.js:9835:16)
    at handleMissingExport (/home/mogoh/src/github.com/mogoh/rollup-typescript-jimp/node_modules/rollup/dist/shared/rollup.js:9724:28)
    at Module.traceVariable (/home/mogoh/src/github.com/mogoh/rollup-typescript-jimp/node_modules/rollup/dist/shared/rollup.js:10228:24)
    at ModuleScope.findVariable (/home/mogoh/src/github.com/mogoh/rollup-typescript-jimp/node_modules/rollup/dist/shared/rollup.js:8747:39)
    at MemberExpression.bind (/home/mogoh/src/github.com/mogoh/rollup-typescript-jimp/node_modules/rollup/dist/shared/rollup.js:6451:49)
    at CallExpression$1.bind (/home/mogoh/src/github.com/mogoh/rollup-typescript-jimp/node_modules/rollup/dist/shared/rollup.js:2868:23)
    at CallExpression$1.bind (/home/mogoh/src/github.com/mogoh/rollup-typescript-jimp/node_modules/rollup/dist/shared/rollup.js:6644:15)
    at MemberExpression.bind (/home/mogoh/src/github.com/mogoh/rollup-typescript-jimp/node_modules/rollup/dist/shared/rollup.js:2868:23)
    at MemberExpression.bind (/home/mogoh/src/github.com/mogoh/rollup-typescript-jimp/node_modules/rollup/dist/shared/rollup.js:6469:19)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
~~~

* The error leads to this page: https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module
* It suggests using namedExports from `@rollup/plugin-commonjs`
* namedExports are deprecated: https://github.com/rollup/plugins/blob/master/packages/commonjs/CHANGELOG.md#v1300

Also: do we need to use `@rollup/plugin-commonjs`?
Because we don't.