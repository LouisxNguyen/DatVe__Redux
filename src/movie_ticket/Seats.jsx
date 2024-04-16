import React, { Component } from 'react'
import OneSeat from './OneSeat'
export default class Seats extends Component {
    renderSeats = () => {
        const {item} = this.props;
        return item.danhSachGhe.map((seat)=>{
            return <OneSeat key={seat.soGhe} seat={seat} soHang={item.hang}/>
        })
    }
    render() {
    const {item} = this.props
    return (
      <>
      <tr className='rowNumber'>
                            <td>{item.hang}</td>
                            {this.renderSeats()}
                        </tr>
      </>
    )
  }
}
