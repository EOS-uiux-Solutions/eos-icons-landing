import React, { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import Tabs from '../components/Tabs'
import Prism from 'prismjs'
import FontbookImg from '../assets/images/docs/fontbook.gif'
import UsingIconsImg from '../assets/images/docs/using-eos-icons.gif'
import { Link } from '@reach/router'
import DownloadEOSicons from '../components/DownloadEOSicons'
import { Helmet } from 'react-helmet'

const Docs = () => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <div className='docs'>
      <Helmet>
        <title>Get EOS Icons | EOS Icons</title>
        <meta
          name='description'
          content='Download the latest copy of our computer-specific icon files for your design or install them in your application using npm, our CDN or our Rails gem.'
        />
        <meta
          name='keywords'
          content='open source icon, ligature icon, action icon, animated icon, ai icon, design icon'
        />
      </Helmet>

      <PageHeader>
        <div className='docs-header'>
          <h1>Get EOS ICONS</h1>
          <div className='docs-header-tools'>
            <p>
              Download the latest copy of our computer-specific files. You’ll
              need them to be able to work with your desired design software.
            </p>

            <DownloadEOSicons />
          </div>
        </div>
      </PageHeader>

      <div className='toolbar'></div>

      <div className='container no-padding'>
        <Tabs showMultipleSwitch={false}>
          <div label='In your application'>
            <div className='container'>
              <h2>Installing EOS icons</h2>
              <p>
                There are several options for you to use EOS icons in your
                product:
              </p>
              <h3 className='padding-top-xs'>
                Installing the npm
                <a
                  href='https://www.npmjs.com/package/eos-icons'
                  data-event-category='External link'
                  data-event-action='Link to EOS Icons NPM'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  <i className='eos-icons eos-18'>open_in_new</i>
                </a>
              </h3>
              <pre className='code language-shell'>
                <code>npm install eos-icons --save</code>
              </pre>
              <h3 className='padding-top-xs'>
                Using the CDN
                <a
                  href='https://cdn.jsdelivr.net/npm/eos-icons@latest/dist/'
                  data-event-category='External link'
                  data-event-action='Link to EOS Icons CDN (title)'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  <i className='eos-icons eos-18'>open_in_new</i>
                </a>
              </h3>
              <p>
                Default theme (filled):
              </p>
                <div className='resp-link-edit'>
               
                <a
                  href='https://cdn.jsdelivr.net/npm/eos-icons@latest/dist/css/eos-icons.css'
                  data-event-category='External link'
                  data-event-action='Link to EOS Icons CDN'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
       
                  
                >
                  {' '}
                  https://cdn.jsdelivr.net/npm/eos-icons@latest/dist/css/eos-icons.css
                </a>
                </div>
                <br />
                <p>
                Outline theme:
                </p>
                <div className='resp-link-edit'>
                <a
                  href='https://cdn.jsdelivr.net/npm/eos-icons@latest/dist/css/outlined/eos-icons-outlined.css'
                  data-event-category='External link'
                  data-event-action='Link to EOS Icons CDN'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  https://cdn.jsdelivr.net/npm/eos-icons@latest/dist/css/outlined/eos-icons-outlined.css
                </a>
                </div>
              <p>
                Add one of the following lines in your{' '}
                <code> &lt;head&gt;</code> tag as <code> link:css </code>
                according to which theme you want to import:
              </p>
              <h4>Default theme</h4>
              <pre className='code language-html'>
                <code>
                  {
                    "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/eos-icons@latest/dist/css/eos-icons.css' />"
                  }
                </code>
              </pre>
              <h4>Outlined theme</h4>
              <pre className='code language-html'>
                <code>
                  {
                    "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/eos-icons@latest/dist/css/outlined/eos-icons-outlined.css' />"
                  }
                </code>
              </pre>
              <h3 className='padding-top-xs'>
                Installing the Ruby gem
                <a
                  href='https://rubygems.org/gems/eos-icons-font'
                  data-event-category='External link'
                  data-event-action='Link to EOS Icons Gem'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  <i className='eos-icons eos-18'>open_in_new</i>
                </a>
              </h3>
              <pre className='code language-shell'>
                <code>gem install eos-icons-font</code>
              </pre>
              <p>
                Add the following directive to your application:{' '}
                <code>*= require eos-icons-font</code>
              </p>
              <h2>Using EOS icons in your projects</h2>
              <p>
                Just like in any other iconic font, you need to add the Fonts
                and CSS files in your project:
              </p>
              <p>
                1- Add the <code>eos-icons.css</code> or{' '}
                <code>eos-icons-outlined.css</code> file available under the
                <code> dist/css </code>
                folder into your project's
                <code> &lt;head&gt;</code>.
                <br />
                (*) If you're using the CDN, you can skip this step.
              </p>
              <pre className='code language-html'>
                <code>{"<link rel='stylesheet' href='eos-icons.css'/>"}</code>
              </pre>
              or
              <pre className='code language-html'>
                <code>
                  {"<link rel='stylesheet' href='eos-icons-outlined.css'/>"}
                </code>
              </pre>
              <p>
                2- Make sure the fonts folder available at{' '}
                <code>dist/fonts</code> is placed at the same location as your{' '}
                <code>eos-icons.css </code> file so the fonts can be read
                correctly.
                <br />
                (*) If you're using the CDN, you can skip this step.
              </p>
              <code>
                - index.html
                <br />
                - eos-icons.css
                <br />- fonts/...
              </code>
              <p>3- Use the icons in your html as follows:</p>
              <pre className='code language-html'>
                <code>{"<i class='eos-icons'>LIGATURE_OF_THE_ICON</i>"}</code>
              </pre>
              or for outlined icons
              <pre className='code language-html'>
                <code>
                  {"<i class='eos-icons-outlined'>LIGATURE_OF_THE_ICON</i>"}
                </code>
              </pre>
              <p>
                Where the <code>LIGATURE_OF_THE_ICON</code> is the name of the
                icon. Go to the
                <a
                  href='/'
                  data-event-category='Internal link'
                  data-event-action='Link to home page'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  home page
                </a>{' '}
                to see the all icons' names.
              </p>
              <h2>Using Animated icons</h2>
              <p>
                The animated EOS icons are built using SMIL SVG animations. To
                implement them you don't need anything special, just an
                <code> img</code> tag with the <code>src</code> to the svg. For
                example:
              </p>
              <pre className='code language-html'>
                <code>{"<img src='loading'/>"}</code>
              </pre>
              <p>
                Head to the
                <a
                  href='/'
                  data-event-category='Internal link'
                  data-event-action='Link to home page'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  home page
                </a>{' '}
                to download animated icons. Click on the icon you want to use to
                see the code snippet.
              </p>
              <h2>Our recommended sizes</h2>
              <p>
                Both MD icons and EOS icons have been designed to work and look
                perfect at: 18px, 24px, 36px, and 48px.
              </p>
              <h2>Implementation Examples</h2>
              <h4>Implementation example</h4>
              <i className='eos-icons eos-18 mr-3'>miscellaneous</i>
              <i className='eos-icons eos-24 mr-3'>miscellaneous</i>
              <i className='eos-icons eos-36 mr-3'>miscellaneous</i>
              <i className='eos-icons eos-48'>miscellaneous</i>
              <pre className='code language-html'>
                <code>
                  {`<i class='eos-icons eos-18'>miscellaneous</i>
  <i class='eos-icons eos-24'>miscellaneous</i>
  <i class='eos-icons eos-36'>miscellaneous</i>
  <i class='eos-icons eos-48'>miscellaneous</i> `}
                </code>
              </pre>
              <h4>SCSS code snippet</h4>
              <pre className='code language-css'>
                <code>
                  {`/* size variables */
  $eos-18: 18px;
  $eos-24: 24px;
  $eos-36: 36px;
  $eos-48: 48px;

  /* Rules for sizing the icon. */
  .eos-18 { font-size: $eos-18; }
  .eos-24 { font-size: $eos-24; }
  .eos-36 { font-size: $eos-36; }
  .eos-48 { font-size: $eos-48; } `}
                </code>
              </pre>
              <p>
                EOS icons is open source. Go to our Gitlab repository to find
                out more :
                <a
                  href='https://gitlab.com/SUSE-UIUX/eos-icons'
                  data-event-category='External link'
                  data-event-action='Link to Gitlab repository'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  https://gitlab.com/SUSE-UIUX/eos-icons
                </a>
              </p>
            </div>
          </div>
          <div label='On your computer'>
            <div className='container'>
              <h2>Download EOS icons</h2>
              <p>
                EOS icons can be used on your computer. Adding them to your
                designs is now very easy with our ligature-based font files.
                We’ve also included optimized vector SVG files of each separate
                icon.
              </p>
              <p>
                Download he latest copy of our computer-specific files. You’ll
                need them to be able to work with your desired design software.
              </p>
              <DownloadEOSicons />

              <h2>What’s included in the package?</h2>
              <p>
                Once you’ve downloaded the EOS Icons package, you’ll need to
                uncompress it. If you’re a Windows user, you’ll need to use a
                free tool such as {''}
                <a
                  href='https://www.7-zip.org/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  7-Zip
                </a>{' '}
                {''}
                to be able to do it. Once uncompressed, you’ll find several
                folders. The ones relevant for designers are the following:
              </p>
              <div>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Folders</th>
                      <th>What are they</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>dist/fonts/</code>
                      </td>
                      <td>
                        Ligature-based font files in different formats (.eot,
                        .woff, .woff2, .svg & .ttf).
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>/svg</code>
                      </td>
                      <td>Optimized individual SVG vector files.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2>Installing the ligature-based font files</h2>
              <p>
                Inside the <code>fonts/</code> folder you’ll find the following
                font-file formats. You can also download them individually from
                here:
              </p>
              <div className='resp-link-edit'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Font-files</th>
                      <th>Direct download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>dist/fonts/eos-icons.eot</code>
                      </td>
                      <td>
                        <a
                          href='https://cdn.jsdelivr.net/npm/eos-icons/dist/fonts/eos-icons.eot'
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          https://cdn.jsdelivr.net/npm/eos-icons/dist/fonts/eos-icons.eot
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>dist/fonts/eos-icons.ttf</code>
                      </td>
                      <td>
                        <a
                          href='https://cdn.jsdelivr.net/npm/eos-icons/dist/fonts/eos-icons.ttf'
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          https://cdn.jsdelivr.net/npm/eos-icons/dist/fonts/eos-icons.ttf
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>dist/fonts/eos-icons.woff</code>
                      </td>
                      <td>
                        <a
                          href='https://cdn.jsdelivr.net/npm/eos-icons/dist/fonts/eos-icons.woff'
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          https://cdn.jsdelivr.net/npm/eos-icons/dist/fonts/eos-icons.woff
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>dist/fonts/eos-icons.woff2</code>
                      </td>
                      <td>
                        <a
                          href='https://cdn.jsdelivr.net/npm/eos-icons/dist/fonts/eos-icons.woff2'
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          https://cdn.jsdelivr.net/npm/eos-icons/dist/fonts/eos-icons.woff2
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                In order to install the fonts, you’ll need to use the font
                manager tool provided by your operative system. For Macs, the
                default tool is Font Book:
              </p>
              
              <img
                src={FontbookImg}
                alt='Animation displaying how to install the eos-icons font'
                className='onyour-img-edit'
              />
          
              <h2>Using EOS icons in your favourite design tool</h2>
              <p>
                Once you’ve installed the font, you’re ready to use EOS Icons in
                your designs. All you need to do, is select the
                <em>“eos-icons”</em>
                font and use type the ligature for your icon. We have a
                cheatsheet with all the ligatures which can be found &nbsp;
                <Link to='../cheatsheet'>here</Link>.
              </p>
              <img
                src={UsingIconsImg}
                alt='Animation displaying how to use eos icons in design tool'
                className='onyour-img-edit'
              />
            </div>
          </div>
          <div label='React'>
            <div className='container'>
              <h2>Installing EOS icons React</h2>
              <p>
                Note: we've introduced several improvements in
                eos-icons-react@2.1.1 and we strongly suggest upgrading.
              </p>
              <h3 className='padding-top-xs'>
                Installation with npm
                <a
                  href='https://www.npmjs.com/package/eos-icons-react'
                  data-event-category='External link'
                  data-event-action='Link to EOS Icons React NPM'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  <i className='eos-icons eos-18'>open_in_new</i>
                </a>
              </h3>
              <pre className='code language-shell'>
                <code>npm install eos-icons-react</code>
              </pre>
              <h3 className='padding-top-xs'>
                Installation with yarn
                <a
                  href='https://yarnpkg.com/package/eos-icons-react'
                  data-event-category='External link'
                  data-event-action='Link to EOS Icons React yarn'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  <i className='eos-icons eos-18'>open_in_new</i>
                </a>
              </h3>
              <pre className='code language-shell'>
                <code>yarn add eos-icons-react</code>
              </pre>
              <h2>Using EOS icons React in your projects</h2>
              Note: the middle part of the component name is the same as the
              icon name and should always be written in uppercase.
              <pre className='code language-js'>
                <code>{`import { EOS_STAR, EOS_STAR_FILLED, EOS_STAR_OUTLINED } from 'eos-icons-react';

function App() {
  return (
    <div>
        <EOS_STAR/>
        <EOS_STAR_FILLED />
        <EOS_STAR_OUTLINED />
    </div>
  );
}

export default App;`}</code>
              </pre>
              <h2>Using Animated icons</h2>
              <pre className='code language-js'>
                <code>{`import { EOS_LOADING_ANIMATED } from 'eos-icons-react';

function App() {
  return (
    <div>
        <EOS_LOADING_ANIMATED />
    </div>
  );
}

export default App;`}</code>
              </pre>
              <h2>Props</h2>
              <div className='resp-link-edit'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>size</code>
                      </td>
                      <td>string, number</td>
                      <td>'m'</td>
                      <td>sets the size of icon *</td>
                    </tr>
                    <tr>
                      <td>
                        <code>color</code>
                      </td>
                      <td>string</td>
                      <td>black</td>
                      <td>sets the color of icon</td>
                    </tr>
                    <tr>
                      <td>
                        <code>rotate</code>
                      </td>
                      <td>string, number</td>
                      <td>0</td>
                      <td>sets the rotation degree of icon</td>
                    </tr>
                    <tr>
                      <td>
                        <code>horizontalFlip</code>
                      </td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Flips icon horizontally</td>
                    </tr>
                    <tr>
                      <td>
                        <code>verticalFlip</code>
                      </td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Flips icon vertically</td>
                    </tr>
                    <tr>
                      <td>
                        <code>theme</code>
                      </td>
                      <td>string</td>
                      <td>'filled'</td>
                      <td>
                        sets icon theme (only available for common components)**
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>className</code>
                      </td>
                      <td>string</td>
                      <td>''</td>
                      <td>set custom styling class for icon component</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                (**) The theme prop is only available for common icon component.
                Eos-Icons React has 4 different types of icon components (common
                / filled / outlined / animated). The common icon component
                contains both filled and outlined version of the icon. For
                switching between the two types of version you can either supply
                'outlined' or 'filled' to the theme prop.
              </p>
              <h4>Pre-defined size list</h4>
              <p>
                (*) Size can be provided using either string or number.
                Pre-Defined size list
              </p>
              <div>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Size Name</th>
                      <th>Size Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>xs</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>s</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>base</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>m</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>l</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>xl</td>
                      <td>32</td>
                    </tr>
                    <tr>
                      <td>xxl</td>
                      <td>48</td>
                    </tr>
                    <tr>
                      <td>xxxl</td>
                      <td>64</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                checkout storybook for an in-depth look at the various different
                icons that are provided by EOS-Icons React as well the props
                available for configuring icons.
                <a
                  href='https://storybook.eos-icons.com/'
                  data-event-category='External link'
                  data-event-action='Link to storybook react'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  https://storybook.eos-icons.com/
                </a>
              </p>
              <p>
                EOS icons React is open source. Go to our GitHub repository to
                find out more :
                <a
                  href='https://github.com/EOS-uiux-Solutions/eos-icons-react'
                  data-event-category='External link'
                  data-event-action='Link to Github repository'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  https://github.com/EOS-uiux-Solutions/eos-icons-react
                </a>
              </p>
            </div>
          </div>
          <div label='Vue 2/3'>
            <div className='container'>
              <h2>Installing EOS icons for Vue 3</h2>
              <h3 className='padding-top-xs'>
                Installation with npm
                <a
                  href='https://www.npmjs.com/package/eos-icons-vue3'
                  data-event-category='External link'
                  data-event-action='Link to EOS Icons vue3 NPM'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  <i className='eos-icons eos-18'>open_in_new</i>
                </a>
              </h3>
              <pre className='code language-shell'>
                <code>npm install eos-icons-vue3</code>
              </pre>
              <h3 className='padding-top-xs'>
                Installation with yarn
                <a
                  href='https://yarnpkg.com/package/eos-icons-vue3'
                  data-event-category='External link'
                  data-event-action='Link to EOS Icons React vue3'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  <i className='eos-icons eos-18'>open_in_new</i>
                </a>
              </h3>
              <pre className='code language-shell'>
                <code>yarn add eos-icons-vue3</code>
              </pre>
              <h2>Installing EOS icons for Vue 2</h2>
              <h3 className='padding-top-xs'>
                Installation with npm
                <a
                  href='https://www.npmjs.com/package/eos-icons-vue2'
                  data-event-category='External link'
                  data-event-action='Link to EOS Icons vue2 NPM'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  <i className='eos-icons eos-18'>open_in_new</i>
                </a>
              </h3>
              <pre className='code language-shell'>
                <code>npm install eos-icons-vue2</code>
              </pre>
              <h3 className='padding-top-xs'>
                Installation with yarn
                <a
                  href='https://yarnpkg.com/package/eos-icons-vue2'
                  data-event-category='External link'
                  data-event-action='Link to EOS Icons React vue2'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  <i className='eos-icons eos-18'>open_in_new</i>
                </a>
              </h3>
              <pre className='code language-shell'>
                <code>yarn add eos-icons-vue2</code>
              </pre>
              <h2>Using EOS icons Vue in your projects</h2>
              Note: the middle part of the component name is the same as the
              icon name and should always be written in uppercase.
              <h3>Vue 3 usage:</h3>
              <pre className='code language-js'>
                <code>{`<template>
  <div>
    <EOS_10K_FILLED />
    <EOS_10K_OUTLINED />
    <EOS_LOADING_ANIMATED />
  </div>
</template>

<script>
import { EOS_10K_FILLED, EOS_10K_OUTLINED, EOS_LOADING_ANIMATED } from "eos-icons-vue3";

export default {
  name: "App",
  components: {
    EOS_10K_FILLED,
    EOS_10K_OUTLINED,
    EOS_LOADING_ANIMATED
  },
};
</script>`}</code>
              </pre>
              <h3>Vue 2 usage:</h3>
              <pre className='code language-js'>
                <code>{`<template>
  <div>
    <EOS_10K_FILLED />
    <EOS_10K_OUTLINED />
    <EOS_LOADING_ANIMATED />
  </div>
</template>

<script>
import { EOS_10K_FILLED, EOS_10K_OUTLINED, EOS_LOADING_ANIMATED } from "eos-icons-vue2";

export default {
  name: "App",
  components: {
    EOS_10K_FILLED,
    EOS_10K_OUTLINED,
    EOS_LOADING_ANIMATED
  },
};
</script>`}</code>
              </pre>
              <h2>Props</h2>
              <div>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>size</code>
                      </td>
                      <td>string</td>
                      <td>'m'</td>
                      <td>sets the size of icon *</td>
                    </tr>
                    <tr>
                      <td>
                        <code>color</code>
                      </td>
                      <td>string</td>
                      <td>#000000</td>
                      <td>sets the color of icon</td>
                    </tr>
                    <tr>
                      <td>
                        <code>rotate</code>
                      </td>
                      <td>string</td>
                      <td>0</td>
                      <td>sets the rotation degree of icon</td>
                    </tr>
                    <tr>
                      <td>
                        <code>horizontalFlip</code>
                      </td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Flips icon horizontally</td>
                    </tr>
                    <tr>
                      <td>
                        <code>verticalFlip</code>
                      </td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Flips icon vertically</td>
                    </tr>
                    <tr>
                      <td>
                        <code>theme</code>
                      </td>
                      <td>string</td>
                      <td>'filled'</td>
                      <td>
                        sets icon theme (only available for common components)**
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                (**) The theme prop is only available for common icon component.
                Eos-Icons React has 4 different types of icon components (common
                / filled / outlined / animated). The common icon component
                contains both filled and outlined version of the icon. For
                switching between the two types of version you can either supply
                'outlined' or 'filled' to the theme prop.
              </p>
              <h4>Pre-defined size list</h4>
              <p>
                (*) Size can be provided using either string or number.
                Pre-Defined size list
              </p>
              <div>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Size Name</th>
                      <th>Size Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>xs</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>s</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>base</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>m</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>l</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>xl</td>
                      <td>32</td>
                    </tr>
                    <tr>
                      <td>xxl</td>
                      <td>48</td>
                    </tr>
                    <tr>
                      <td>xxxl</td>
                      <td>64</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                EOS icons Vue 3 -{' '}
                <a
                  href='https://github.com/EOS-uiux-Solutions/eos-icons-vue'
                  data-event-category='External link'
                  data-event-action='Link to Github repository'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                  
                >
                  {' '}
                  https://github.com/EOS-uiux-Solutions/eos-icons-vue
                </a>{' '}
                and Vue 2 -{' '}
                <a
                  href='https://github.com/EOS-uiux-Solutions/eos-icons-vue2'
                  data-event-category='External link'
                  data-event-action='Link to Github repository'
                  data-event-label='Docs page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  https://github.com/EOS-uiux-Solutions/eos-icons-vue2
                </a>{' '}
                are open source. Go to our GitHub repository to find out more.
              </p>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default Docs
