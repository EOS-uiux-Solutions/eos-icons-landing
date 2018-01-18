# EOS iconic font

This is the iconic font used in the EOS Design System [public URL here when available - yes, we are still working on it]. The official SUSE Design System, and for all open source projects to use and re-use.

To view the EOS Design System project check gitlab https://gitlab.com/SUSE-UIUX/eos

# What do you need to build the fonts locally?

This project uses Webfont for Grunt to build. More info about the project: https://www.npmjs.com/package/grunt-webfont

We use Fontforge to render our icons since the quality is better than using plain node, and it supports Ligatures.
Our icons follow Google Material Icons guidelines one-to-one. This is the main reason for us to use ligatures as well. We made a perfectly compatible icon font for those already using MD icons.
If you want to know more about all the standards we follow for the EOS, visit our public wiki, which is our main internal guideline: https://gitlab.com/SUSE-UIUX/eos/wikis/home

### Installing dependencies

Install the dependencies (this assumes you already have Node.js and npm in your machine):

- OSX

```
brew install ttfautohint fontforge --with-python
npm install grunt-webfont --save-dev
```

- Linux

```
sudo apt-get install fontforge ttfautohint
npm install grunt-webfont --save-dev
```

Add your icons into the `svg/` folder. All our icons have been designed with Illustrator, but designing with any tool like Inkscape will work as well, just make sure the exported SVG code is as clean as possible.

SVG file names with more than one word in it should not have a minus character separating the words (e.g.: some-name.svg), use an underscore (e.g.: some_name.svg). For some reason the minus symbol creates some issues in the built library.

Then all you need to do, being in the project directory, is run `grunt`, which will build the assets under the `dist/` folder.

Open the `index.html` in your browser to easily navigate the iconic font and check the look of the icons in different sizes.
We added the recommended sizes MD icons uses: 18, 24, 36, and 48 pixel icons, plus 16px which is our minimum allowed size at EOS Design System.

**That's it!!.. easy as pie, they say**
