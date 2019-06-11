# EOS iconic font landing page
![Open Source Love png2](https://badges.frapsoft.com/os/v2/open-source.png?v=103)
![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)


Demo: http://suse-uiux.gitlab.io/eos-icons-landing/

This is the landing page for the EOS Design System iconic font. It showcases all the icons included in it.

This is the iconic font used in the EOS Design System. The official SUSE Linux Design System, and for all open source projects to use and re-use.

To view the EOS Design System iconic font project, check its repository: https://gitlab.com/SUSE-UIUX/eos-icons

To view the EOS Design System project, check https://gitlab.com/SUSE-UIUX/eos

# Installing dependencies

`npm i`

# Generate the page

Just like in any other iconic font, you need to add the Fonts and CSS files in your project:

Running the `grunt` command will initiate the default Grunt task, generating a `dist` folder.

You can now open the landing page here `dist/index.html` or simply run `open dist/index.html`.

# Developing the page

1- You will find the html, js, scss files under the `views`, `js` & `scss` folders. We strongly recommend that you have a look at our guideline on developing for the [EOS Design System](https://gitlab.com/SUSE-UIUX/eos/wikis/home#developing-the-eos-project).

2- Once you've implemented your changes you need to generate the `dist` folder again by running the `grunt` command.

This task will also lint your html, js and css files and will return an error in the console.

3- If you want to run a specific linter, you can also do it by only running its grunt task (found in `grunfile.js`):

- For html: `grunt htmlvalidate`
- For js: `grunt eslint`
- For scss: `grunt sasslint`

# Our "thank you" section

### Tested for every browser in every device

Thanks to [browserstack](https://www.browserstack.com) and their continuous contribution to open source projects, we continuously test the EOS to make sure all our features and components work perfectly fine in all browsers.
Browserstack helps us make sure our Design System also delivers a peace of mind to all developers and designers making use of our components and layout in their products.


### Projects using EOS

- [openSUSE](https://www.opensuse.org/)
- [HAWK](https://hawk-ui.github.io/)
