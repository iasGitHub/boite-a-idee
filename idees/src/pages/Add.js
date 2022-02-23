import React, {Component} from 'react';
import axios from 'axios';

class Add extends Component{

    state = {
        titre = '',
        desc =''
    }

    handleInput = (e) => {

        this.setState({
            [e.target.title]: e.target.value
        });
    }

    saveIdea = async (e) => {
        e.preventDefault();

        const res = await axios.post('/api/add-idea', this.state);

    }

    render(){

        return(

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <form onSubmit={this.saveIdea}>
                            <div className='mb-3'>
                                <label className='mt-4'>Titre</label>
                                <input type="text" name='titre' onChange={this.handleInput} value={this.state.titre} className="form-control" />
                                <label className='mt-4'>Description</label>
                                <input className='form-control' name='desc' onChange={this.handleInput} value={this.state.title}></input>
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