import config from '../config';

const URL_CATEGORIAS = `${config.URL}/categorias`;
function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possívekl pegar os dados');
    });
}

export default {
  getAllWithVideos,
};
