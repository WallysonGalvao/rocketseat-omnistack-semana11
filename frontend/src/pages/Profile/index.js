import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";

import "./styles.css";

import logo from "../../assets/logo.svg";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  const history = useHistory();

  useEffect(() => {
    async function getIncidents() {
      const { data } = await api.get("incidents", {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(data);
    }

    getIncidents();
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
      toast.success("Caso deletado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar caso, tente novamente!");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={16} color="#E02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incident => {
          const value = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(incident.value);
          return (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{incident.description}</p>

              <strong>VALOR:</strong>
              <p>{value}</p>

              <button type="button" onClick={() => handleDelete(incident.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
