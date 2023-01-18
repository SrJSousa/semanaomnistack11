import React, {useEffect, useState} from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import {useHistory} from 'react-router-dom';

import logoImg from '../../assets/Logo.svg';
import api from '../../services/api';
import './styles.css';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const history = useHistory()
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            })
         setIncidents(incidents.filter(incidents => incidents.id !== id));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    function handLeLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className='profile-container'>
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <a className='button' href='/incidents/new'> Cadastrar novo caso </a>
                <button onClick={handLeLogout} type='button'>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1> Casos cadastrados </h1>

            <ul>
               {incidents.map(incident => (
                 <li key={incident.id}>
                    
                    <strong> CASO: </strong>
                    <p> {incident.title} </p>

                    <strong> DESCRIÇÃO: </strong>
                    <p> {incident.description} </p>

                    <strong> VALOR: </strong>
                    <p> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)} </p>

                    <button onClick={() => handleDeleteIncident(incident.id)} type='button'>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>

                 </li>  
               ))}         
            </ul>
        </div>
    )
}