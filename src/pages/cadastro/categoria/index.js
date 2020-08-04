/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const isLocalhost = window.location.hostname.includes('localhost');
    const URL = isLocalhost
      ? 'http://localhost:8080/categorias'
      : 'https://musicflix-react.herokuapp.com/categorias';

    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategorias([
          ...response,
        ]);
      });
  },
  [
    values.titulo,
  ]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria: {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infos) {
        infos.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {categorias.length === 0 && (
        <Loading />
        )}

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>
        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/">
        Voltar para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
