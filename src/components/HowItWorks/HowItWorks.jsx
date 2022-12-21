import React, {useEffect, useState} from "react";
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";

import styles from './HowItWorks.module.css'
import baseStyles from '../../index.module.css'
import coolPic from '../../assets/images/coolPic.svg'

import {Link} from "react-router-dom";

const HowItWorks = () => {

    return (
        <Container className={styles.hiw_wrapper}>
            <Row>
                <Col lg={5}>
                    <img src={coolPic}/>
                </Col>
                <Col lg={1}><br/><br/></Col>
                <Col lg={6}>
                    <h2 className={baseStyles.white}>
                        How it works?
                    </h2>
                    <br/>
                    <br/>
                    <h3 className={baseStyles.white}>
                        1. &nbsp; Deposit money for a chance to win
                    </h3>
                    <br/>
                    <h3 className={baseStyles.white}>
                        2. &nbsp; Prizes are awarded every day
                    </h3>
                    <br/>
                    <h3 className={baseStyles.white}>
                        3. &nbsp; Even if you don't win, keep all of your money!
                    </h3>
                </Col>
            </Row>
            <br/><br/><br/><br/>
        </Container>
    );
};

export default HowItWorks;