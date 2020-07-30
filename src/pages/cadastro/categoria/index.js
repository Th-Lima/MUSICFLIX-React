import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){

  const valoresIniciais = {
    nome: '',
    descricao: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  const handleChange = (infos) => 
    setValue(
      infos.target.getAttribute('name'), 
      infos.target.value
    );

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      
      <form onSubmit={function handleSubmit(infos) {
          infos.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

        setValues(valoresIniciais);
          
      }}>

        <FormField 
          label="Nome da Categoria: "
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

       <FormField 
          label="Descrição"
          tag="textarea"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        /> 
      <ul>
          {categorias.map((categoria, index) => {
            return (
            <li key={`${categoria}${index}`}>
              {categoria.nome}
            </li>
            )
          })}
      </ul>    
      <button>
        Cadastrar
    </button>
    </form>

      <Link to="/">
      Voltar para home
      </Link>
    </PageDefault>
  )
  
}

export default CadastroCategoria;