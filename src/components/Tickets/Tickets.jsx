import React, {useEffect, useState} from "react";
import {Button, Col, Container, InputGroup, Nav, Navbar, Row, Spinner} from "react-bootstrap";

import styles from './Tickets.style.css'
import baseStyles from '../../index.module.css'
import MyNavbar from "../MyNavbar/MyNavbar";

import {Link} from "react-router-dom";
import {useAddress, useContract, useContractRead} from "@thirdweb-dev/react";
import {ethers} from "ethers";
import Timer from '../Timer/Timer'

const Tickets = () => {
    const address = useAddress()
    const [quantity, setQuantity] = React.useState(1);

    const { contract, isLoading } = useContract("0xFd24F711c939FDCA0439Ca72C218427118c0A839");
    const { data: RemainingTickets } = useContractRead(contract, "RemainingTickets")
    const { data: CurrentWinningReward } = useContractRead(contract, "CurrentWinningReward")
    const { data: ticketPrice } = useContractRead(contract, "ticketPrice")
    const { data: ticketCommission } = useContractRead(contract, "ticketCommission")
    const { data: expiration } = useContractRead(contract, "expiration")

    const handleClick = async () => {
        if (!ticketPrice) return;

    }

    if (isLoading) {
        return (
            <div className={baseStyles.my_centered}>
                <Spinner animation="border" variant={"light"}/>
            </div>
        )
    }

    return (
        <Container>
            <br/><br/><br/><br/><br/><br/>
            <Row>
                <Col md={5} className={baseStyles.my_wrapper}>
                    <h2 className={baseStyles.white}>The next Draw</h2>

                    <Row>
                        <Col className={baseStyles.my_wrapper2}>
                            <h6 className={baseStyles.grey}>
                                Total pool
                            </h6>
                            <p className={baseStyles.grey}>{ CurrentWinningReward && ethers.utils.formatEther(
                                CurrentWinningReward.toString()
                            )} ETH</p>
                        </Col>
                        <Col className={baseStyles.my_wrapper2}>
                            <h6 className={baseStyles.grey}>
                                Tickets remaining
                            </h6>
                            <p className={baseStyles.grey}>{ RemainingTickets?.toNumber() }</p>
                        </Col>
                    </Row>
                    <Row>
                        <Timer />
                    </Row>
                </Col>
                <Col md={5} className={baseStyles.my_wrapper}>
                    <p className={baseStyles.white}>
                        Price per ticket: <b>{ticketPrice && ethers.utils.formatEther(ticketPrice?.toString())} ETH</b>
                    </p>
                    <input
                    className={baseStyles.my_input}
                    type="number"
                    min={1}
                    max={20}
                    value={quantity}
                    onChange={(e => setQuantity(Number(e.target.value)))}
                    />
                    <span className={baseStyles.grey}>Service fees: {ticketCommission && ethers.utils.formatEther(ticketCommission?.toString())} ETH</span>
                    <br/>
                    <span className={baseStyles.grey}>+ Network fees: 0.005ETH</span>
                    <br/><br/>

                    <Button
                        onClick={handleClick}
                        disabled={expiration?.toString() < Date.now().toString()
                        || RemainingTickets?.toNumber() === 0} variant="light" className={baseStyles.width_btn}>Buy tickets</Button>{' '}
                </Col>
            </Row>
        </Container>
    );
};

export default Tickets;