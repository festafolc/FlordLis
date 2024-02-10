// import logo from '../../assets/images/logo.png';
// import { Link } from "react-router-dom";

import './footerStyle.css';

export const Footer = () => {
  return (
    <section className='container__footer'>
      <footer className='footer'>
        <div className='footer__top'>
          <div className='footer__topLeft'>
            <h4 className='footer__topTitle'>Eco FlordLis</h4>
            <div className='footer__socialMedia'>
              <i className='fa-solid fa-instagram'></i>
              <i className='fa-solid fa-tiktok'></i>
            </div>
          </div>
          <div className='footer__topRight'>
            <h4 className='footer__topTitle'>FlordLis Home</h4>
            <div className='footer__socialMedia'>
              <i className='fa-solid fa-instagram footer__social-icon'></i>
              <i className='fa-solid fa-tiktok footer__social-icon'></i>
            </div>
          </div>
        </div>
        <div className='footer__down'>
          <div className='footer__down-content'>
            <h4 className='footer__downTitle'>AYUDA</h4>
            <h6 className='footer__link footer__link-pointer'>Pagos</h6>
            <h6 className='footer__link footer__link-pointer'>Devoluciones</h6>
            <h6 className='footer__link footer__link-pointer'>Estado de tu pedido</h6>
            <h6 className='footer__link footer__link-pointer'>Preguntas frecuentes</h6>
          </div>
          <div className='footer__down-content'>
            <h4 className='footer__downTitle'>INFORMACIÓN LEGAL</h4>
            <h6 className='footer__link footer__link-pointer'>Condiciones de uso</h6>
            <h6 className='footer__link footer__link-pointer'>Política de privacidad</h6>
            <h6 className='footer__link footer__link-pointer'>Política de devoluciones</h6>
          </div>
          <div className='footer__down-content'>
            <h4 className='footer__downTitle'>CONTACTO</h4>
            <h6 className='footer__link'>flordlis@flordlis.com</h6>
            <h6 className='footer__link'>Camino a Valledupar</h6>
          </div>
        </div>
        <div className='footer__copyright'>
          <h6 className='copyright'>&copy; 2024 FlordLis Colombia</h6>
        </div>
      </footer>
      {/* <Container>
                <Row>
                    <Col>
                        <Row>
                            <img height={100} width={50} src={logo} alt="Flor d' Lis" />
                        </Row>
                        <Row>
                            <h6>Tienda Flor d' Lis con mucho cariño y mucho amor. Creado con la alegría de cada planta cultivada desde semilla.</h6>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h2>Enlaces</h2>
                        </Row>
                        <Row>
                            <Row style={{ display: 'inline' }}>
                                <Link to={'https://www.instagram.com/flordlis_home'}><Instagram /></Link>
                                <Link to={'https://www.tiktok.com/@flordlis_home'}><Tiktok /></Link>
                            </Row>
                            <Link to={'/'}>Sobre Flor d' Lis</Link>
                            <Link to={'/'}>Preguntas frecuentes</Link>
                            <Link to={'/'}>Términos y condiciones</Link>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h2>Contacto</h2>
                        </Row>
                        <Row>
                            <div>
                                <TelephoneFill /> +57 312 6850043
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <EnvelopeAtFill /> flordlis@gmail.com
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <SignpostSplitFill /> Camino a Valledupar
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <h2>&copy; 2023 Flor d' lis</h2>
                </Row>
            </Container> */}
    </section>


  )
}
