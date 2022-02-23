import React, {Component} from 'react';

class Add extends Component{

    render(){

        return(

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <form>
                            <div className='mb-3'>
                                <label>Titre</label>
                                <input type="text" className="form-control" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add;