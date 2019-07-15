# EOS project landing page
![Open Source Love png2](https://badges.frapsoft.com/os/v2/open-source.png?v=103)
![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)

Demo: https://eos-icons.eosdesignsystem.com

### Installation

1. `git clone git@gitlab.com:SUSE-UIUX/eos-icons-landing.git`
2. `cd eos-icons-landing`
3. Install all dependencies. This will also install the FE vendors in a followup script:
  ```
    npm install
  ```
4. If you are developing this site, run the watchers with `npm start`
5. Run the server in a new terminal with either:

    ```
      npm run serve-macos
    ```
  or
    ```
      npm run serve-linux      
    ```
  It will build your assets and serve in `localhost:8000`

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
