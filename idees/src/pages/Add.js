import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function Add() {

    const history = useHistory();
    const [ideaInput, setIdea] = useState({
        titre: '',
        desc: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setIdea({...ideaInput, [e.target.name]: e.target.value })
    }

    const saveIdea = (e) => {
        e.preventDefault();
        
        const data = {
            titre:ideaInput.titre,
            desc:ideaInput.desc,
        }

        axios.post(`http://127.0.0.1:8000/api/add-idea`, data).then(res => {

            if(res.data.status === 200)
            {
                swal("Success!",res.data.message,"success");
                setIdea({
                    titre: '',
                    desc: '',
                    error_list: [],
                });
                history.push('/');
            }
            else if(res.data.status === 422)
            {
                setIdea({...ideaInput, error_list: res.data.validate_err });
            }
        });
    }

    return (
        <div>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Ajouter une idée</h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={saveIdea} >
                                    <div className="form-group mb-3">
                                        <label>Titre</label>
                                        <input type="text" name="titre" onChange={handleInput} value={ideaInput.titre} className="form-control" />
                                        <span className="text-danger">{ideaInput.error_list.titre}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Description</label>
                                        <input type="text" name="desc" onChange={handleInput} value={ideaInput.desc}  className="form-control" />
                                        <span className="text-danger">{ideaInput.error_list.desc}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Enregistrer</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Add;