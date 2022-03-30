import React, { Component } from 'react'
import { connect } from 'react-redux'
class CarItemRedux extends Component {
    render() {
        let { item } = this.props;
        return (
            <div className='card'>
                <img src={item.img} />
                <div className='card-body'>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <button className='btn btn-success' data-toggle="modal" data-target="#myModal" onClick={() => { this.props.viewDetail(item) }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        viewDetail: (carDetail) => {
            const action = {
                type: 'XEM_CHI_TIET',
                carDetail: carDetail
            }
            //Dùng hàm dispatch để đưa dữ liệu lên redux
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchtoProps)(CarItemRedux);

