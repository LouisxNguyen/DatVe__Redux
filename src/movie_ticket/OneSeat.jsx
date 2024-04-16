
import React, { Component, createRef } from 'react'
import { connect } from 'react-redux';
class OneSeat extends Component {
    constructor(props){
        super(props)
        this.state = {
            isSeatDisabled: true,
        }
        this.dom = React.createRef();
    }
    // Nhận Props mới
    UNSAFE_componentWillReceiveProps(nextProps){
        const {isStart} = nextProps;
        if(isStart){
            this.setState({
                isSeatDisabled: false,
            })
        }
        else{this.setState({
            isSeatDisabled: true,
        },()=>{ console.log('this.state.isSeatDisabled',this.state.isSeatDisabled)})} 
    }
    handleGetSeat = (number, row) => {
        if(this.dom.current.checked){
            this.props.checkSelected(this.dom.current.checked)
            this.props.getSeatRow(row);
            this.props.getSeatNumber(number);
        }
        else{
            this.props.checkSelected(this.dom.current.checked)
            this.props.getSeatRow(row);
            this.props.getSeatNumber(number);
        }  
    }
    render() {
        const {seat, soHang} = this.props;
        return (
            <>
                <td>
                    <input ref={this.dom} onClick={()=>{this.handleGetSeat(seat.soGhe, soHang)}} type="checkbox" className="seats" defaultValue={seat.soGhe} disabled={this.state.isSeatDisabled} />
                </td>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      isStart: state.seatReducer.isStart,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSeatRow: (row) => {
          const action = {
            type: `GET_SEATROW`,
            payload: row,
          }
          dispatch(action);
        },
        getSeatNumber: (number) => {
            const action = {
              type: `GET_SEATNUMBER`,
              payload: number,
            }
            dispatch(action);
          },
        checkSelected: (flag) => {
            const action = {
              type: `GET_CHECKSELECT`,
              payload: flag,
            }
            dispatch(action);
          }
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(OneSeat);
