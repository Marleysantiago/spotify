import React from "react";
import './style.css'
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";


// eslint-disable-next-line import/no-anonymous-default-export
export default function Body() {
    return(
        <>
        <Header></Header>
        <div className="cont">
        <Container>
            <Row>
                <div className="col-12">
                    <h6>SPOTIFY PREMIUM.</h6>
                </div>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                    <h1>Curta 3 meses de Premium grátis</h1>
                    <h3>Curta músicas sem anúncios, 
                        ouça no modo offline e muito mais. Cancele quando quiser.
                    </h3>
                    <button>GANHE 3 MESES GRÁTIS</button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={6} className="center">
                    <img className="img" src={process.env.PUBLIC_URL + 'img/img.jpg'}  alt="" />
                </Col>
            </Row>
        </Container>
        </div>
        <div className="cont2">
        <Container> 
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                    <h6>SPOTIFY FREE</h6>
                    <h1>Escutar muda tudo</h1>
                    <h3>Milhões de músicas e 
                        podcasts para explorar. E nem precisa de cartão de crédito.
                    </h3>
                    <div><button>BAIXE O SPOTIFY FREE</button></div>
                </Col>
            </Row>
        </Container>
        </div>
        <Footer></Footer>
    </>
    )
    
}

