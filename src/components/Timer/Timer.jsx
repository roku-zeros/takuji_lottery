import React from "react";
import {useContract, useContractRead} from "@thirdweb-dev/react";
import Countdown from "react-countdown";
import {Row, Col} from "react-bootstrap";
import baseStyles from '../../index.module.css'


function Timer() {
    const {contract} = useContract("0x2d668f670C55071Cfc7A965cdAa3edD58f6B7f3c");
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