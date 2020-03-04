import React from 'react';
/* Footer links */
const footerLinks = [
  {
    name: 'Join us on Slack',
    href: 'https://slack.eosdesignsystem.com/',
    category: 'External link',
    action: 'Link to EOS Slack',
    label: 'Footer'
  },
  {
    name: 'Repository',
    href: 'https://gitlab.com/SUSE-UIUX/eos-icons',
    category: 'External link',
    action: 'Link to Gitlab repo',
    label: 'Footer'
  },
  {
    name: 'Report a issue',
    href: 'https://gitlab.com/SUSE-UIUX/eos-icons/issues',
    category: 'External link',
    action: 'Link to Gitlab issues',
    label: 'Footer'
  },
  {
    name: 'EOS on Twitter',
    href: 'https://twitter.com/eosdesignsystem',
    category: 'External link',
    action: 'EOS in Twitter',
    label: 'Footer'
  },
  {
    name: 'Cookie policy',
    href: 'https://eos-icons.eosdesignsystem.com/cookies-policy.html',
    category: 'External link',
    action: '',
    label: 'Footer'
  }
];

const Footer = () => {
  return (
    <footer>
      {footerLinks.map((ele, index) => (
        <a
          key={index}
          href={ele.href}
          data-types-category={ele.category}
          data-types-label={ele.label}
          data-types-action={ele.action}
          rel="noopener noreferrer"
          target="_blank"
        >
          {ele.name}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
