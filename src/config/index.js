const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : '//t8flix.herokuapp.com/categorias';

export default {
  URL,
};
