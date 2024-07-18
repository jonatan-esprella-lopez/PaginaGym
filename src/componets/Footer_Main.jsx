import React from 'react';
import { Link } from 'react-router-dom';
import Fb from '../assets/images/facebook.svg';
import IG from '../assets/images/instagram.svg';
import Spotify from '../assets/images/spotify.svg';
import Twitter from '../assets/images/twitter.svg';
import YouTube from '../assets/images/youtube.svg';
import '../styles/Footer/general-footer.css';

const SocialLink = ({ href, icon: Icon, children }) => (
  <a href={href} className="social-link">
    <img src={Icon} alt="social icon" className="social-icon" />
    {children}
  </a>
);

const FooterLink = ({ href, text }) => (
  <Link to={href} className="footer-link">
    {text}
  </Link>
);

const FooterColumn = ({ title, links }) => (
  <div className="footer-column">
    <h4>{title}</h4>
    <div>
      {links.map((link, index) => (
        <FooterLink href={link.href} key={index} text={link.text} />
      ))}
    </div>
  </div>
);

function FooterMain() {
  const socialLinks = [
    { href: 'https://www.facebook.com/CEC.FGI', icon: Fb, text: 'FACEBOOK' },
    { href: 'https://www.instagram.com/cecfgi/', icon: IG, text: 'INSTAGRAM' },
    {
      href: 'https://open.spotify.com/user/31g2vmorc4wigjwrhjrqiax7g3je',
      icon: Spotify,
      text: 'SPOTIFY',
    },
    { href: 'https://x.com/Cec_Fgi', icon: Twitter, text: 'TWITTER' },
    { href: 'https://www.youtube.com/@CecFGI', icon: YouTube, text: 'YOUTUBE' },
  ];

  const footerColumns = [
    {
      title: 'CEC - FGI',
      links: [
        { href: '/Nosotros', text: 'Quienes somos' },
        { href: '/Nosotros', text: 'Hable con nosotros' },
        { href: '/Politica de privacidad', text: 'Aviso de Privacidad' },
      ],
    },
    {
      title: 'Planes',
      links: [
        { href: '#', text: 'Planes' },
        { href: '#', text: 'Documentos' },
      ],
    },
    {
      title: 'Nuestra Compañía',
      links: [
        { href: '#', text: 'Quiero ser franquiciatario' },
        { href: '#', text: 'Promociona tu marca' },
        { href: '#', text: 'Indica un local' },
        { href: '#', text: 'Trabaja con nosotros' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <h3 className="footer-title">Síguenos</h3>
        <div className="footer-social-links">
          {socialLinks.map((link, index) => (
            <SocialLink href={link.href} icon={link.icon} key={index}>
              {link.text}
            </SocialLink>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        {footerColumns.map((column, index) => (
          <FooterColumn key={index} title={column.title} links={column.links} />
        ))}
      </div>
    </footer>
  );
}

export default FooterMain;
