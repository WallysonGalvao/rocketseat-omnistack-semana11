import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";

import "./styles.css";

import logo from "../../assets/logo.svg";
import hero from "../../assets/heroes.png";

export default function Logon() {
  const [id, setId] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await api.post("/sessions", { id });
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", data.name);
      history.push("/profile");
      toast.success("ONG logada com sucesso!");
    } catch (error) {
      toast.error("Falha no login, tente novamente!");
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={hero} alt="Heroes" />
    </div>
  );
}
