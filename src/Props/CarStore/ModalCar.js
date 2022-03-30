import React, { Component } from 'react'

export default class ModalCar extends Component {

    render() {
        let { product } = this.props;
        return (
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{product.name}</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <img src={product.img} width={400}></img>
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
