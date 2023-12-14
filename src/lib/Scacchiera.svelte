<script>
    import { div_status } from "./store";
</script>

<main>
    {#if $div_status[1]}
    <div class="elemento"><span class="material-icons-outlined icona">star</span></div>
    {:else}
    <div class="elemento"></div>
    {/if}
    {#if $div_status[2]}
    <div class="elemento"><span class="material-icons-outlined icona">star</span></div>
    {:else}
    <div class="elemento"></div>
    {/if}
    {#if $div_status[3]}
    <div class="elemento"><span class="material-icons-outlined icona">star</span></div>
    {:else}
    <div class="elemento"></div>
    {/if}
    {#if $div_status[4]}
    <div class="elemento"><span class="material-icons-outlined icona">star</span></div>
    {:else}
    <div class="elemento"></div>
    {/if}
    {#if $div_status[5]}
    <div class="elemento"><span class="material-icons-outlined icona">star</span></div>
    {:else}
    <div class="elemento"></div>
    {/if}
    {#if $div_status[6]}
    <div class="elemento"><span class="material-icons-outlined icona">star</span></div>
    {:else}
    <div class="elemento"></div>
    {/if}
    {#if $div_status[7]}
    <div class="elemento"><span class="material-icons-outlined icona">star</span></div>
    {:else}
    <div class="elemento"></div>
    {/if}
    {#if $div_status[8]}
    <div class="elemento"><span class="material-icons-outlined icona">star</span></div>
    {:else}
    <div class="elemento"></div>
    {/if}
    {#if $div_status[9]}
    <div class="elemento"><span class="material-icons-outlined icona">star</span></div>
    {:else}
    <div class="elemento"></div>
    {/if}
</main>

<style>
    main{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 600px;
        height: 600px;
    }
    div{border-radius: 20px;}
    .icona{vertical-align: -10%;font-size: 100px;}
    .elemento{
        width: 31%;
        height: 31%;
        border: 5px solid lime;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>