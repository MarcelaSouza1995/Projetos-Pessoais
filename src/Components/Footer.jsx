import React from 'react';
import { Button, Icon } from 'semantic-ui-react';


const Footer = () => {
  const urlInstagram = 'https://www.instagram.com/maarceelasoouza/?hl=pt-br';
  const urlLinkedin = 'https://www.linkedin.com/in/marcela-souza-834696153/';
  const urlGithub = 'https://github.com/MarcelaSouza1995';
  const urlWpp = 'https://api.whatsapp.com/send?phone=5531997804875&text=Marcela%20Souza';
  
  return(
  <div className="footer">
    <span>Projeto desenvolvido por Marcela Souza, inspirado no Trybe Wallet desenvolvido na módulo de Front End.</span>
    <div>
      <a href={ urlLinkedin } target="_blank" rel="noreferrer" className="links"><Icon name='linkedin' /> LinkedIn</a>
      <a href={ urlInstagram } target="_blank" rel="noreferrer" className="links"><Icon name='instagram' /> Instagram</a>
      <a href={ urlGithub } target="_blank" rel="noreferrer" className="links"><Icon name='github' /> GitHub</a>
      <a href={ urlWpp } target="_blank" rel="noreferrer" className="links"><Icon name='whatsapp' /> Whatsapp</a>
     </div>
  </div>
)}

export default Footer;