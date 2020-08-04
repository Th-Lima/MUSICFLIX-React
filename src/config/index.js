const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://musicflix-react.herokuapp.com';

export default {
  URL,
};
