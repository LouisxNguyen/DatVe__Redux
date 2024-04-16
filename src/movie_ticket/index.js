import React, { Component } from 'react';
import ListSeat from './ListSeat';
import Display from './Display'
import Inputform from './Inputform'
export default class Home extends Component {
    render() {
        return (
            <>
                <div className='background_datve'>
                    <div className="container">
                        <div className="w3ls-reg">
                            <Inputform/>
                            {/* //input fields */}
                            {/*-728x90-*/}
                            {/* seat availabilty list */}
                            <ul className="seat_w3ls">
                                <li className="smallBox greenBox" data-sider-select-id="c365c01e-f4d3-4608-ace3-fab33ee2103f">Selected Seat</li>
                                <li className="smallBox redBox">Reserved Seat</li>
                                <li className="smallBox emptyBox" data-sider-select-id="2d8ae410-1f8c-40cb-b131-9c2ec869fba3">Empty Seat</li>
                            </ul>
                            {/* seat availabilty list */}
                            {/* seat layout */}
                            <div className="seatStructure txt-center" style={{ overflowX: 'auto' }}>
                                <p id="notification" />
                                <ListSeat />
                                <div className="screen">
                                    <h2 className="wthree" data-sider-select-id="6b9dbe2f-d207-4135-88bf-3d934ab194f3">Screen this way</h2>
                                </div>
                            </div>
                            <button className='btn btn-success' onclick="updateTextArea()" disabled data-sider-select-id="ba436887-4825-46a7-95d5-5a45f0ab7b46">Confirm Selection</button>
                            {/* //seat layout */}
                            {/* details after booking displayed here */}
                            <Display/>
                            {/* //details after booking displayed here */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
