/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  const handleChange = (infos) => setValue(
    infos.target.getAttribute('name'),
    infos.target.value,
  );

  useEffect(() => {
    const isLocalhost = window.location.hostname.includes('localhost');
    const URL = isLocalhost
      ? 'http://localhost:8080/categorias'
      : 'https://t8flix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategorias([
          ...response,
        ]);
      });
  },
  [
    values.nome,
  ]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria: {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infos) {
        infos.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          type="text"
          value={values.nome}
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
            <li key={`${categoria.nome}`}>
              {categoria.nome}
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
