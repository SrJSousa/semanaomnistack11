import React, {useState} from "react";
import {FiArrowLeft} from 'react-icons/fi'
import { useHistory } from "react-router-dom";

import './style.css';
import api from "../../services/api";

import logoImg from '../../assets/Logo.svg';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    
    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch (err) {
            alert ('Erro ao cadastrar o caso, tente novamente.');
        }
    }

    return (
        <div className="new-incident-container">
        <div className="content">
        <section>
            <img src={logoImg} alt="Be The Hero" />

            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

            <a className="blac-link" href="/profile">
                <FiArrowLeft size={16} color= "#E02041" />
                Voltar para a home
            </a>
        </section>

        <form onSubmit={handleNewIncident}>
            <input 
                placeholder="Titulo do Caso" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                />

            <textarea 
                placeholder="Descrição" 
                value={description}
                onChange={e => setDescription(e.target.value)}
                />

            <input 
                placeholder = "Valor em reais" 
                value={value}
                onChange={e => setValue(e.target.value)}
                />
            
            <button className="button" type="submit" > Cadastrar </button>
        </form>            
        </div>
        </div>
)}