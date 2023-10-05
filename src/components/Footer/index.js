import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to="/signin">Essence</FooterLink>
                            <FooterLink to="/signin">Search</FooterLink>
                            <FooterLink to="/signin">Dogma</FooterLink>
                            <FooterLink to="/signin">News</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to="/signin">Essence</FooterLink>
                            <FooterLink to="/signin">Search</FooterLink>
                            <FooterLink to="/signin">Dogma</FooterLink>
                            <FooterLink to="/signin">News</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to="/signin">Essence</FooterLink>
                            <FooterLink to="/signin">Search</FooterLink>
                            <FooterLink to="/signin">Dogma</FooterLink>
                            <FooterLink to="/signin">News</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to="/signin">Essence</FooterLink>
                            <FooterLink to="/signin">Search</FooterLink>
                            <FooterLink to="/signin">Dogma</FooterLink>
                            <FooterLink to="/signin">News</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>wisdom</SocialLogo>
                        <WebsiteRights>wisdom © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;