import React, { useEffect } from 'react'
import DownloadEosIcons from '../components/DownloadEosIcons'
import PageHeader from '../components/PageHeader'
import Tabs from '../components/Tabs'
import Button from '../components/Button'
import Prism from 'prismjs'
import FontbookImg from '../assets/images/docs/fontbook.gif'
import UsingIconsImg from '../assets/images/docs/using-eos-icons.gif'
import axios from 'axios'
import { Link } from '@reach/router'

const getEOSIconsVersion = async () => {
  const eosIconsPackage = await axios.get(
    'https://cdn.jsdelivr.net/npm/eos-icons/package.json'
  )

  window.open(
    `https://registry.npmjs.org/eos-icons/-/eos-icons-${eosIconsPackage.data.version}.tgz`,
    '_blank'
  )
}

const Docs = () => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <div className='docs'>
      <PageHeader theme='purple'>
        <h2>
          EOS Icons can be installed on your application and also on your
          computer.
        </h2>
      </PageHeader>

      <div className='toolbar'></div>

      <div className='container'>
        <Tabs>
          <div label='In your application'>
            <div className='cta-box cta-installing'>
              <div>
                <p className='cta-box-title'>
                  Download EOS icons for your computer
                </p>
                <p className='cta-box-text'>
                  Download he latest copy of our computer-specific files. You’ll
                  need them to be able to work with your desired design
                  software.
                </p>
              </div>
              <div className='download-link'>
                <Button primary type='button' onClick={getEOSIconsVersion}>
                  <i className='eos-icons eos-18'>file_download</i>
                  Download EOS Icons
                </Button>
              </div>
            </div>
            <h1>Installing EOS icons</h1>
            <p>
              There are several options for you to use EOS icons in your
              product:
            </p>

            <h2>
              Installing with npm
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
            </h2>
            <pre className='code language-shell'>
              <code>npm install eos-icons --save</code>
            </pre>

            <h2>
              With our CDN
              <a
                href='https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css'
                data-event-category='External link'
                data-event-action='Link to EOS Icons CDN (title)'
                data-event-label='Docs page'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                <i className='eos-icons eos-18'>open_in_new</i>
              </a>
            </h2>
            <p>
              For EOS set:
              <a
                href='https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css'
                data-event-category='External link'
                data-event-action='Link to EOS Icons CDN'
                data-event-label='Docs page'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css
              </a>
            </p>
            <pre className='code language-html'>
              <code>
                {
                  "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css' />"
                }
              </code>
            </pre>

            <p>
              Import them in your <span className='command'> &lt;head&gt;</span>{' '}
              tag as <span className='command'> link:css </span>.
            </p>

            <h2>
              With our Rails gem
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
            </h2>

            <pre className='code language-shell'>
              <code>gem install eos-icons-font</code>
            </pre>

            <p>
              Add the following directive to your application:{' '}
              <span className='command'>*= require eos-icons-font</span>
            </p>

            <h1>Using EOS icons in your projects</h1>
            <p>
              Just like in any other iconic font, you need to add the Fonts and
              CSS files in your project:
            </p>
            <p>
              1- Add the <span className='command'>eos-icons.css</span> file
              available under the dist/css folder into your project's{' '}
              <span className='command'> &lt;head&gt;</span>:
            </p>

            <pre className='code language-html'>
              <code>
                {"<link rel='stylesheet' href='assets/eos-icons.css'/>"}
              </code>
            </pre>
            <p>
              2- Make sure the font files available in{' '}
              <span className='command'>thedist/fonts</span> folder are placed
              under your <span className='command'>assets/fonts</span> folder so
              the .css file can read them correctly.
            </p>
            <p>3- Use the icons in your html as follows:</p>

            <pre className='code language-html'>
              <code>{"<i class='eos-icons'>LIGATURE_OF_THE_ICON</i>"}</code>
            </pre>
            <p>
              Where the LIGATURE_OF_THE_ICON is the name of the icon. Use our
              &nbsp;
              <a
                href='/cheatsheet'
                data-event-category='Internal link'
                data-event-action='Link to cheatsheet'
                data-event-label='Docs page'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                cheatsheet
              </a>
              &nbsp; to see the icon's name.
            </p>
            <h1>Using Animated icons</h1>
            <p>
              The animated EOS icons are built using SMIL SVG animations. To
              implement them you don't need anything special, just an{' '}
              <code>img</code> tag with the <code>src</code> to the svg. For
              example:
            </p>

            <pre className='code language-html'>
              <code>{"<img src='loading'/>"}</code>
            </pre>
            <p>
              Head to the
              <a
                href='/cheatsheet'
                data-event-category='Internal link'
                data-event-action='Link to cheatsheet (animated)'
                data-event-label='Docs page'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                cheatsheet
              </a>{' '}
              to download animated icons. Click on the icon you want to use to
              see the code snippet.
            </p>
            <h1>Our recommended sizes</h1>
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
              EOS icons is open source. Go to our Gitlab repository to find out
              more :
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
          <div label='On your computer'>
            <h1>Download EOS icons</h1>
            <p>
              EOS icons can be used on your computer. Adding them to your
              designs is now very easy with our ligature-based font files. We’ve
              also included optimized vector SVG files of each separate icon.
            </p>
            <div className='cta-box'>
              <div>
                <p className='cta-box-title'>
                  Download EOS icons for your computer
                </p>
                <p className='cta-box-text'>
                  Download he latest copy of our computer-specific files. You’ll
                  need them to be able to work with your desired design
                  software.
                </p>
              </div>
              <a
                href='https://registry.npmjs.org/eos-icons/-/eos-icons-4.3.1.tgz'
                data-event-category='External link'
                data-event-action='Link to latest EOS icons package'
                data-event-label='Docs page (on computer tab)'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button primary type='button'>
                  <i className='eos-icons eos-18'>file_download</i>
                  Download EOS Icons
                </Button>
              </a>
            </div>
            <h2>What’s included in the package?</h2>
            <p>
              Once you’ve downloaded the EOS Icons package, you’ll need to
              uncompress it. If you’re a Windows user, you’ll need to use a free
              tool such as {''}
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
            <div>
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
              In order to install the fonts, you’ll need to use the font manager
              tool provided by your operative system. For Macs, the default tool
              is Font Book:
            </p>
            <img
              src={FontbookImg}
              alt='Animation displaying how to install the eos-icons font'
            />
            <h2>Using EOS icons in your favourite design tool</h2>
            <p>
              Once you’ve installed the font, you’re ready to use EOS Icons in
              your designs. All you need to do, is select the
              <em>“eos-icons”</em>
              font and use type the ligature for your icon. We have a cheatsheet
              with all the ligatures which can be found &nbsp;
              <Link to='../cheatsheet'>here</Link>.
            </p>
            <img
              src={UsingIconsImg}
              alt='Animation displaying how to use eos icons in design tool'
            />
          </div>
        </Tabs>
      </div>
      <DownloadEosIcons />
    </div>
  )
}

export default Docs
