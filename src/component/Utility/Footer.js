import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import phone from '../../images/phone.png';
import facebook from '../../images/facebook.png';
import instegram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';

const Footer = () => {
    return (
        <div className='footer-background footer mt-3 pt-2' style={{ maxHeight: '50px' }}>
            <Container>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col sm='6' className='d-flex align-items-center'>
                        <div className='footer-shroot'>الشروط والاحكام</div>
                        <div className='footer-shroot mx-2'>سياسة الخصوصية</div>
                        <div className='footer-shroot mx-2'>اتصل بنا</div>
                    </Col>
                    <Col sm='6' className='d-flex justify-content-end align-items-center'>
                        <div className='d-flex pt-3 mx-2'>
                            <img width='25rem' height='25rem' src={phone} alt='phone' />
                            <p className='footer-phone'>01553001211</p>
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <img width='25rem' height='25rem' src={facebook} alt='facebook' />
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <img width='25rem' height='25rem' src={instegram} alt='instegram' />
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <img width='25rem' height='25rem' src={twitter} alt='twitter' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer