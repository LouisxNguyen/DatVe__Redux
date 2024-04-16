import React, { Component } from 'react'
import { connect } from "react-redux";
export default class Display extends Component {
  render() {
    return (
      <>
      <div className="displayerBoxes txt-center" style={{ overflowX: 'auto' }}>
                                <table className="Displaytable w3ls-table" width="100%">
                                    <tbody><tr>
                                        <th className='text-website' data-sider-select-id="f8542aea-590a-4831-b807-d413a6c29ba0">Name</th>
                                        <th className='text-website' data-sider-select-id="ba138958-6ec3-4e26-b882-58debfa40880">Number of Seats</th>
                                        <th className='text-website' data-sider-select-id="87987660-ee03-4908-b0cf-890c59e811e7">Seats</th>
                                    </tr>
                                        <tr>
                                            <td>
                                                <textarea id="nameDisplay" disabled defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea id="NumberDisplay" disabled defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea id="seatsDisplay" disabled defaultValue={""} />
                                            </td>
                                        </tr>
                                    </tbody></table>
                            </div>
      </>
    )
  }
}
