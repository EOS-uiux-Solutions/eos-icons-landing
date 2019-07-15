# EOS project landing page
![Open Source Love png2](https://badges.frapsoft.com/os/v2/open-source.png?v=103)
![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)

Demo: https://www.eosdesignsystem.com/

### Installation

1. `git clone git@gitlab.com:SUSE-UIUX/eos-icons-landing.git`
2. `cd eos-icons-landing`
3. Make sure you have the corresponding version of Node and NPM:  
  a.
    ```
      npm install
    ```
  b.
    ```
      npm install -g npm@6.9.0
    ```   
4. `npm install --engine-strict`  
5. `npm start`  
6. It will build your assets & open: `dist/index.html` in your browser
7. It will also start the `gulp watch` task, which will watch changes in the assets

### Running lints:

Test all:
`npm run test:all`

Sass:
`npm run test:sass`

JS:
`npm run test:js`

Pug:
`npm run test:pug`

Unit testing:
`npm run test:unit`

Generate vendors folder:
`npm run build:vendors`
