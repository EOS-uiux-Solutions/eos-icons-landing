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
5. In MacOS, run the server in a new terminal with:

    ```
      npm run serve:macos
    ```
    It will build your assets and serve in `localhost:8000`

6. In linux, access the dist folder with `cd dist` and start a server:

    ```
      python3 -m http.server
    ```

    or

    ```
      python2 -m SimpleHTTPServer
    ```

    Depending on the version of Python available in your system

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
