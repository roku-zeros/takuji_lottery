import React, {useEffect, useState} from "react";
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";

import styles from './Welcome.module.css'
import baseStyles from '../../index.module.css'

import {Link} from "react-router-dom";

const Welcome = () => {

    return (
        <Container className={styles.welcome_wrapper}>
            <br/><br/>
            <Row>
                <Col lg={6}>
                    <br/><br/>
                    <h1 className={baseStyles.white}>
                        Takuji lottery
                    </h1>
                    <span className={baseStyles.grey}>
                        Takuji is a crypto-powered savings protocol
                        based on Premium Bonds. Save money and have a
                        chance to win every day.
                    </span>
                </Col>
                <Col lg={1}></Col>
                <Col lg={5}>
                    <div className={styles.jp_wrapper}>
                        <h2 className={baseStyles.white}>CURRENTLY</h2>
                        <h1 className={baseStyles.white}>$29,400</h1>
                        <h2 className={baseStyles.white}>IN WEEKLY PRIZES</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Welcome;