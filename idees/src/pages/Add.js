import React, {Component} from 'react';

class Add extends Component{

    render(){

        return(

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <form>
                            <div className='mb-3'>
                                <label className='mt-4'>Titre</label>
                                <input type="text" name='title' className="form-control" />
                                <label className='mt-4'>Description</label>
                                <textarea className='form-control' name='desc'></textarea>
                                <input type="submit" value="Enregistrer" className="btn btn-primary mt-4" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add;