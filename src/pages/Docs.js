import React, { useEffect } from 'react'
import DownloadEosIcons from '../components/DownloadEosIcons'
import Prism from 'prismjs'

const Docs = () => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <div>
      <div className='container'>
        <div>
          <h1>Installing EOS icons</h1>
          <p>
            There are several options for you to use EOS icons in your product:
          </p>
          <div>
            <h2> Installing with npm </h2>

            <pre className='code language-shell'>
              <code>npm install eos-icons --save</code>
            </pre>
          </div>
          <div>
            <h2>With our CDN</h2>
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
          </div>
        </div>
        <div>
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
              href='https://eos-icons.eosdesignsystem.com/cheatsheet'
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
        </div>
        <div>
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
              href='https://eos-icons.eosdesignsystem.com/cheatsheet'
              data-event-category='Internal link'
              data-event-action='Link to cheatsheet (animated)'
              data-event-label='Docs page'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              cheatsheet
            </a>{' '}
            to download animated icons. Click on the icon you want to use to see
            the code snippet.
          </p>
        </div>

        <div>
          <h1>Our recommended sizes</h1>
          <p>
            Both MD icons and EOS icons have been designed to work and look
            perfect at: 18px, 24px, 36px, and 48px.
          </p>
          <div>
            <h2>Implementation Examples</h2>
            <ul>
              <li>
                <h4>Implementation example</h4>
              </li>
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
.eos-48 { font-size: $eos-48; }  `}
                </code>
              </pre>
            </ul>
          </div>
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
      </div>
      <DownloadEosIcons />
    </div>
  )
}

export default Docs
