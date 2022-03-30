import React, { Component } from 'react'
//import thư viện kết nối với store
import { connect } from 'react-redux';
class CarModalRedux extends Component {
    render() {
        return (
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.carDetailReducer.name}</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <img src={this.props.carDetailReducer.img} width={400}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
//Hàm chuyển đổi state từ redux biến đổi thành props của component
const mapStatetoProps = (rootReducer) => {
    return {
        carDetailReducer: rootReducer.carDetailReducer
    }
}
export default connect(mapStatetoProps)(CarModalRedux);
