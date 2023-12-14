<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Agbalumo">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
</svelte:head>

<script>
  import Scacchiera from "./lib/Scacchiera.svelte";
  import Movimento from "./lib/Movimento.svelte";
  import { pos } from "./lib/store";
  import { main_status } from "./lib/store";
</script>

<main>
  <h1>
    Scacchiera di Movimento, 
    Posizione({$pos}), 
    {#if $main_status}
      Attivo
      {:else}
      Disattivo
    {/if}
  </h1>
  <Scacchiera />
  <Movimento />
</main>

<style>
  main{
    margin: -5px;
    width: 100%;
    height: 98vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  h1{
    color: red;
    font-size: 50px;
    font-family: 'Agbalumo';
  }
</style>