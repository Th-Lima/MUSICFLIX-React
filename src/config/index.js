const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://t8flix.herokuapp.com/categorias';

export default {
  URL,
};
