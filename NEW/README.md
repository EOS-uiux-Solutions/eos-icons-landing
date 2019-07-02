# EOS project page
![Open Source Love png2](https://badges.frapsoft.com/os/v2/open-source.png?v=103)
![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)

### Installation

1. `git clone git@gitlab.com:SUSE-UIUX/eos.git`
2. `cd eos`
3. Make sure you have the corresponding version of Node and NPM:  
  a.
    ```
      sudo npm cache clean -f
      sudo npm install -g n
      sudo n 10.15.0
    ```
  b.   
    ```
      sudo npm install -g npm@6.9.0
    ```   
4. `npm install --engine-strict`  
5. `npm start`  
6. Visit: http://localhost:3000/  
7. Run `npm run browsersync` for livereload.

#### Working on the Backend?

You might want to auto-build everytime changes in the backend are applied:

Install Nodemon: `npm install -g nodemon`
and instead of running `npm start` now simply run `nodemon`

more info: https://github.com/remy/nodemon

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

### Need to run more than one node versions for this and other projects?

Consider using one of the following Node version managers:

https://github.com/nodenv/nodenv

https://github.com/tj/n

# Our "thank you" section

### Tested for every browser in every device

Thanks to [browserstack](https://www.browserstack.com) and their continuous contribution to open source projects, we continuously test the EOS to make sure all our features and components work perfectly fine in all browsers.
Browserstack helps us make sure our Design System also delivers a peace of mind to all developers and designers making use of our components and layout in their products.

### External assets
[Professional programmer - Designed by Freepik](https://www.freepik.com/free-vector/professional-programmer-engineer-writing-code_1311615.htm)    
[Hipster characters - Designed by Freepik](https://www.freepik.com/free-vector/5-hipster-characters-vector-pack_760827.htm)   
[Musical notes - Designed by Freepik](https://www.freepik.com/free-vector/musical-notes_795161.htm)   
[Sunny day with a barbecue - Designed by Freepik](https://www.freepik.com/free-vector/sunny-day-with-a-barbecue-party-background_888237.htm)  

### Projects using EOS

- [openSUSE](https://www.opensuse.org/)
- [HAWK](https://hawk-ui.github.io/)
