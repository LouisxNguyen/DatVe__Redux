import React, { Component } from 'react'
import { connect } from "react-redux";
import Seats from './Seats'
class ListSeat extends Component {
    renderSeats = () => {
        const {listSeat} = this.props;
        return listSeat.map((item)=>{
            return <Seats key={item.hang} item={item}/>
        })
    }

    render() {
        return (
            <>
                <table id="seatsBlock">
                    <tbody><tr className='rowNumber'>
                        <td />
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                        {this.renderSeats()}
                    </tbody></table>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        listSeat: state.seatReducer.listSeat,
    }
}
export default connect(mapStateToProps, null)(ListSeat);