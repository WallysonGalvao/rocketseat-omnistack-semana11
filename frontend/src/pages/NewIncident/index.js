import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";

import "./styles.css";

import logo from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, SetTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = { title, description, value };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      toast.success("Caso cadastrado com sucesso!");
      history.push("/profile");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar caso, tente novamente!");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />

          <h1>Cadastro novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => SetTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={title}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={title}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit" onClick={handleNewIncident}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
