import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type RickyMortyResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonsOptions = ref<Pokemon[]>([]);
  const isLoading = computed(() => pokemons.value.length === 0);

  const getPokemons = async () => {
    const response = await pokemonApi.get<RickyMortyResponse>('/character');
    const pokemonArray: Pokemon[] = response.data.results.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
      };
    });

    return pokemonArray.sort(() => Math.random() - 0.5);
  };

  const getOptions = (howMany: number = 5) => {
    gameStatus.value = GameStatus.Playing;
    pokemonsOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  onMounted(async () => {
    await new Promise((r) => setTimeout(r, 1000));
    pokemons.value = await getPokemons();
    getOptions();
  });

  return {
    gameStatus,
    isLoading,
    pokemonsOptions,
  };
};
