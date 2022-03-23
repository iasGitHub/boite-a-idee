import React, {useState, useEffect} from 'react';
//import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

function Idea() {

    const [loading, setLoading] = useState(true);
    const [ideas, setIdeas] = useState([]);

    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/ideas`).then(res=>{
            if(res.status === 200)
            {
                setIdeas(res.data.ideas)
                setLoading(false);
            }
        });

    }, []);

    
    // const deleteIdea = (e, id) => {
    //     e.preventDefault();
        
    //     const thisClicked = e.currentTarget;
    //     thisClicked.innerText = "Deleting";

    //     axios.delete(`/api/delete-idea/${id}`).then(res=>{
    //         if(res.data.status === 200)
    //         {
    //             swal("Deleted!",res.data.message,"success");
    //             thisClicked.closest("tr").remove();
    //         }
    //         else if(res.data.status === 404)
    //         {
    //             swal("Error",res.data.message,"error");
    //             thisClicked.innerText = "Delete";
    //         }
    //     });
    // }

    // const Carte = ({idee}) => {
    //     const [statut, setStatut] = useState(idee.statut);
    
    //     const handleValidClick = () => {
    //         axios.patch(
    //             https://api-boite-idee.herokuapp.com/api/idee/${idee.id},
    //             {statut: true}
    //         )
    //         .then( () => setStatut(true))
    //     }
    //     const handleUndoClick = () => {
    //         axios.patch(
    //             https://api-boite-idee.herokuapp.com/api/idee/${idee.id},
    //             {statut: false}
    //         )
    //         .then( () => setStatut(false))
    //     }
    // }

    
    
        const [statut, setStatut] = useState(ideas.statut);
        // Approuvée idée
        const handleValidClick = () => {
            axios.patch(
                console.warn(ideas.statut)
                `http://127.0.0.1:8000/api/edit-status/${ideas.id}`,
                {statut: 1}
            )
            .then( () => setStatut(true))
        }
        // Rejetée idée
        const handleUndoClick = () => {
            axios.patch(
                `http://127.0.0.1:8000/api/edit-status/${ideas.id}`,
                {statut: 0}
            )
            .then( () => setStatut(false))
        }
    
    if(loading)
    {
        return <h4 className='mt-4'>Chargement des idées...</h4>
    }
    else
    {
        var idea_HTMLTABLE = "";
       
        idea_HTMLTABLE = ideas.map( (item, index) => {
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.titre}</td>
                    <td>{item.desc}</td>
                    <td>
                        <Link onChange={handleValidClick} to={`edit-status/${item.id}`} className="btn btn-success btn-sm">Approuver</Link>
                    </td>
                    <td>
                        <Link onChange={handleUndoClick} to={`edit-status/${item.id}`} className="btn btn-danger btn-sm">Refuser</Link>
                    </td>
                </tr>
            );
        });
    }

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Liste des idées
                                    <Link to={'add-idea'} className="btn btn-primary btn-sm float-end"> Ajouter une idée</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Titre</th>
                                            <th>Description</th>
                                            <th>Modifier</th>
                                            <th>Supprimer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {idea_HTMLTABLE}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Idea;