import axios from 'axios';

const pokemonApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export { pokemonApi };
