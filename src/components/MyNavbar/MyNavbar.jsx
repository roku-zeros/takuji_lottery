import React, {useEffect, useState} from "react";
import {Button, Container, DropdownButton, Nav, Navbar, Dropdown} from "react-bootstrap";
import { ethers } from 'ethers';

import styles from './MyNavbar.module.css'
import baseStyles from '../../index.module.css'

import logo from '../../assets/images/logo.svg';
import {Link} from "react-router-dom";
import {useAddress, useDisconnect, useMetamask} from "@thirdweb-dev/react";

const MyNavbar = () => {
    const connectWithMetaMask = useMetamask()
    const disconnect = useDisconnect();
    const address = useAddress()
    console.log('address is:')
    console.log(address)

    if (address) {
        document.getElementById('Wallet').style.display = 'block';
        document.getElementById('GetWallet').style.display = 'none';
    }


    return (
        <Navbar variant="dark" className='fixed-top' style={{ backgroundColor: '#111111'}}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo}/>
                </Navbar.Brand>
                <div className={styles.navigation}>
                    <a href="/">
                        Home
                    </a>
                    <a href="/lottery">
                        Lottery
                    </a>
                    <a href="#">
                        Account
                    </a>
                </div>
                <Button className={baseStyles.btn_outline} onClick={connectWithMetaMask} id='GetWallet'>
                    Connect Wallet
                </Button>

                <span className={[baseStyles.white, styles.address].join(' ')} id='Wallet' style={{ display: 'none' }} >
                    Wallet Address: {address}
                </span>
            </Container>
        </Navbar>

    );
};

export default MyNavbar;