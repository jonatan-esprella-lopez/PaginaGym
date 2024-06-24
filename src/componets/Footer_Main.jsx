import React from "react";
import { ReactComponent as Fb } from "../assets/images/facebook.svg";
import { ReactComponent as IG } from "../assets/images/instagram.svg";
import { ReactComponent as Spotify } from "../assets/images/instagram.svg";
import { ReactComponent as Twitter } from "../assets/images/instagram.svg";
import { ReactComponent as YouTube } from "../assets/images/instagram.svg";
import "../styles/Footer/general-footer.css";

const SocialLink = ({ href, icon: Icon, children }) => (
    <a href={href} className="social-link">
        <Icon className="social-icon" /> {children}
    </a>
);

const FooterColumn = ({ title, links }) => (
    <div className="footer-column">
        <h4>{title}</h4>
        {links.map((link, index) => (
            <a href={link.href} key={index}>
                {link.text}
            </a>
        ))}
    </div>
);

function FooterMain() {
    const socialLinks = [
        { href: "#", icon: Fb, text: "FACEBOOK" },
        { href: "#", icon: IG, text: "INSTAGRAM" },
        { href: "#", icon: Spotify, text: "SPOTIFY" },
        { href: "#", icon: Twitter, text: "TWITTER" },
        { href: "#", icon: YouTube, text: "YOUTUBE" }
    ];

    const footerColumns = [
        {
            title: "CEC - FGI",
            links: [
                { href: "#", text: "Quienes somos" },
                { href: "#", text: "Hable con nosotros" },
                { href: "#", text: "Aviso de Privacidad" }
            ]
        },
        {
            title: "Planes",
            links: [
                { href: "#", text: "Planes" },
                { href: "#", text: "Documentos" }
            ]
        },
        {
            title: "Nuestra Compañía",
            links: [
                { href: "#", text: "Quiero ser franquiciatario" },
                { href: "#", text: "Promociona tu marca" },
                { href: "#", text: "Indica un local" },
                { href: "#", text: "Trabaja con nosotros" }
            ]
        }
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
                    <FooterColumn title={column.title} links={column.links} key={index} />
                ))}
            </div>
        </footer>
    );
}

export default FooterMain;