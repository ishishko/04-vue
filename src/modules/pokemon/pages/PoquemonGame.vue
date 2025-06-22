<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemons</h3>
  </section>

  <section v-else="" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1>Quien es este Pokemon?</h1>
    <!-- Pokemon piccture -->
    <PokemonPicture />
    <!-- Pokemon options -->
    <PokemonOption />
  </section>
</template>

<script setup lang="ts">
import PokemonOption from '../components/PokemonOption.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';

const { gameStatus, isLoading } = usePokemonGame();
</script>
