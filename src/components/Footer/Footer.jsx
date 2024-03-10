import { FooterStyle, LinkStyle, Text } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyle>
      <Text>Copyright © </Text>
      <LinkStyle href="https://github.com/KarinaCor" target="_blank">
        Karina Ahadzhanian
      </LinkStyle>
    </FooterStyle>
  );
};

export default Footer;
