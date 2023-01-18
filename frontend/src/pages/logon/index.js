import React, {useState} from "react";
import { FiLogIn } from 'react-icons/fi';
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import './styles.css';

import LogoImg from '../../assets/Logo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={ LogoImg } alt="Logo Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1> Faça seu Logon </h1>

                    <input placeholder="Sua ID"
                        value={id}
                        onChange= {e => setId(e.target.value)}
                         />

                    <button className="button" type="Submit"> Entrar </button>

                    <a className="blac-link" href="/register">
                        <FiLogIn size={16} color= "#E02041" />
                        Não tenho cadastro
                    </a>
                </form>            
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}