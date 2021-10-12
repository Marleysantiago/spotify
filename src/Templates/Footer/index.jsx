import React from "react";
import './style.css'
import { Container, Row, Col } from "react-bootstrap";



// eslint-disable-next-line import/no-anonymous-default-export
export default function Footer() {    
    return(
        <div className="footer">
        <Container>
            <Row className="footer-text">
                <Col xs={12} sm={12} md={12} lg={12} xl={2}>
                    <img className="logo" src={process.env.PUBLIC_URL + 'img/logo.jpg'} alt="logo" />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={2} className="line">
                    <dt className="font-color">EMPRESA</dt>
                    <div>Sobre</div>
                    <div>Empregos</div>
                    <div>For the Record</div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={2}className="line">
                    <dt className="font-color">COMUNIDADES</dt>
                    <div>Para Artistas</div>
                    <div>Desenvolvedores</div>
                    <div>Publicidade</div>
                    <div>Investidores</div>
                    <div>Fornecedores</div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={2} className="line">
                    <dt className="font-color">LINKS ÚTEIS</dt>
                    <div>Suporte</div>
                    <div>Player da Web</div>
                    <div>Aplicativo móvel grátis</div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={4} className="line2">
                    <img className="icons" src={process.env.PUBLIC_URL + 'img/insta.png'} alt="insta" />
                    <img className="icons" src={process.env.PUBLIC_URL + 'img/twitter.png'} alt="twiter" />
                    <img className="icons" src={process.env.PUBLIC_URL + 'img/face.png'} alt="face" />
                </Col>
            </Row>
            <Row className="footer-text-2">
                <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                    <span className="Text">Legal</span>
                    <span className="Text">Centro de Privacidade</span>
                    <span className="Text">Política de privacidade</span>
                    <span className="Text">Cookies</span>
                    <span className="Text">Sobre anúncios</span>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <div className="font">Brasil</div>
                    <div className="bot">© 2021 Spotify AB</div>

                </Col>

            </Row>
        </Container>
            
        </div>
    )
        
}
