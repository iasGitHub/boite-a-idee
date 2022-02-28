import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function Approuve(props) {

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [ideaInput, setIdea] = useState([]);
    const [errorInput, setError] = useState([]);

    useEffect(() => {
        
        const idea_id = props.match.params.id;
        axios.get(`/api/approuve-idea/${idea_id}`).then( res => {

            if(res.data.status === 200)
            {
                setIdea(res.data.idea);
                setLoading(false);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history.push('/');
            }
        });

    }, [history]);

    const handleInput = (e) => {
        e.persist();
        setIdea({...ideaInput, [e.target.name]: e.target.value });
    }

    const updateIdea = (e) => {
        e.preventDefault();
        
        const idea_id = props.match.params.id;
        const data = {
            statut: true,
        }

        axios.put(`/api/update-idea/${idea_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                history.push('/');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandetory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history.push('/');
            }
        });
    }

    if(loading)
    {
        return <h4>Approbation en cours...</h4>
    }
    
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Approuver une idée 
                                    <Link to={'/'} className="btn btn-danger btn-sm float-end"> Voir la liste des idées</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={updateIdea} >    
                                    <div className="form-group mb-3">
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Approuver l'idée</button>
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

export default Approuve;