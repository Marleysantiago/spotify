import react from "react";
import { Container, Row, Col } from "react-bootstrap";
import './style.css'

export default function Login(){

    return(

        <>
            <Container className="display">
                <Row className="header">
                        <img src="" alt="logo" />     
                </Row>

                <Row>
                    <Col xl={12}className="login-app">
                            <h6>Para continuar, faça login no Spotify.</h6>
                            <button className="color1">CONTINUAR COM O FACEBOOK</button>
                            <button className="color2">CONTINUAR COM A APPLE</button>
                            <button className="color3">CONTINUAR COM O GOOGLE</button>
                            <button className="color3">CONTINUAR COM UM NÚMERO DE TELEFONE</button>
                    </Col>
                </Row>
                <Row>
                    <section className="login-email">
                        <Col xl={12}>
                            <h6 className="center">OU</h6>
                            <h6>Endereço de e-mail ou nome de usuário</h6>
                            <input type="text" placeholder="Endereço de e-mail ou nome de usuário"/>
                            <h6>Endereço de e-mail ou nome de usuário</h6>
                            <input type="text" placeholder="Senha"/>
                            <div>Esqueceu sua senha?</div>
                            <div className="positi">
                                <input type="checkbox"/> <div>Lembrar de mim</div> <button>ENTRAR</button>
                            </div> 
                        </Col>
                    </section>
                </Row>

                <Row>
                    <Col>
                    <h6>Não tem uma conta?</h6>
                    <button>INSCREVER-SE NO SPOTIFY</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}