import React, { Component } from 'react'
import { connect } from "react-redux";
class Inputform extends Component {
  constructor(props){
    super(props);
    this.state = {
      isBtnDisabled: false,
    }
    
  }
  handleOnchange = (event) =>{
    this.props.volumeSeat(event.target.value)
  }
  handleStartSelect = () => {
    const {volume} = this.props;
    if(volume <= 0 || !volume){
      this.props.startSelect(false);
      alert("Số lượng ghế phải khác 0 và không được rỗng")
    }
    else{
      this.props.startSelect(true);
      this.setState({
        isBtnDisabled: false,
      })
    }
  }
    render() {
    return (
      <>
      <div className="inputForm" data-sider-select-id="1548a9c6-c31d-4784-924b-739e27502ce9">
                                <h2 className='text-website'>Fill the required details below and select your seats</h2>
                                <div className="mr_agilemain d-flex">
                                    <div className="agileits-right">
                                        <label className='text-website'> Number of Seats
                                            <span>*</span>
                                        </label>
                                        <input onChange={this.handleOnchange} type="number" id="Numseats" required min={1} data-sider-select-id="24cd14bf-63fa-4893-bef0-7805f1d2d510" />
                                    </div>
                                </div>
                                <button disabled={this.state.isBtnDisabled} className='btn btn-outline-success mt-4' onClick={this.handleStartSelect}>Start Selecting</button>
                            </div>
      </>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      volumeSeat: (volume) => {
        const action = {
          type: `GET_VOLUME`,
          payload: volume,
        }
        dispatch(action);
      },
      startSelect: (isStart) => {
        const action = {
          type: `GET_START`,
          payload: isStart,
        }
        dispatch(action);
      }
    }
  }
const mapStateToProps = (state) => {
    return {
      volume: state.seatReducer.volume,
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Inputform);
