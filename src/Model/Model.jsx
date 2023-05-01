import React,{Component}from "react";

export default class Model extends Component{
    render(){
        let modelStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',
        }
        return(
            <div className="modal show fade" style ={modelStyle}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.name}</h5>
                            <button type="button" class="btn-close" onClick={this.props.hide}></button>
                        </div>
                        <div className="modal-body">
                            <img src={this.props.img} className="img-fluid"/>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}