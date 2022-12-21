import React from "react";
import {useContract, useContractRead} from "@thirdweb-dev/react";
import Countdown from "react-countdown";
import {Row, Col} from "react-bootstrap";
import baseStyles from '../../index.module.css'


function Timer() {
    const {contract} = useContract("0xFd24F711c939FDCA0439Ca72C218427118c0A839");
    const {data: expiration, isLoadingExpiration} = useContractRead(contract, "expiration")

    const render = ({hours, minutes, seconds, completed}) => {
        if (false) {
            return (
                <div>
                    <h3>Ticket sales Closed</h3>
                </div>
            )
        } else {
            return (
                <div>
                    <hr  style={{ color: '#ffffff' }}/>
                    <h4 className={baseStyles.white}>Time remaining:</h4>
                    <Row>
                        <Col>
                            <h4 className={baseStyles.white}>{hours} hrs</h4>
                        </Col>
                        <Col>
                            <h4 className={baseStyles.white}>{minutes} min</h4>
                        </Col>
                        <Col>
                            <h4 className={baseStyles.white}>{seconds} sec</h4>
                        </Col>
                    </Row>
                </div>
            )
        }
    }

    return (
        <div>
            <Countdown date={new Date(expiration * 1000)} renderer={render} />
        </div>
    )
}

export default Timer