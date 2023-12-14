<script>
    import { pos } from "./store";
    import { main_status } from "./store";
    import { div_status } from "./store";
    $div_status[$pos]=true;
    let max=3;
    let matrix=9;
    const status = () => {$main_status=!$main_status;}
    const up = () => {
        if($main_status){
            $pos-=max;
            if($pos>=1 && $pos <=9){
                $div_status[$pos]=true;
                for(var i=0;i<=matrix;i++){
                    if(i!=$pos){$div_status[i]=false;}
                }
            }
            else{$pos+=max;}
        }
    }
    const left = () => {
        if($main_status){
            $pos-=1;
            if($pos>=1 && $pos <=9){
                $div_status[$pos]=true;
                for(var i=0;i<=matrix;i++){
                    if(i!=$pos){$div_status[i]=false;}
                }
            }
            else{$pos+=1;}
        }
    }
    const right = () => {
        if($main_status){
            $pos+=1;
            if($pos>=1 && $pos <=9){
                $div_status[$pos]=true;
                for(var i=0;i<=matrix;i++){
                    if(i!=$pos){$div_status[i]=false;}
                }
            }
            else{$pos-=1;}
        }
    }
    const down = () => {
        if($main_status){
            $pos+=max;
            if($pos>=1 && $pos <=9){
                $div_status[$pos]=true;
                for(var i=0;i<=matrix;i++){
                    if(i!=$pos){$div_status[i]=false;}
                }
            }
            else{$pos-=max;}
        }
    }
</script>

<main>
    <button class="elemento inactive"></button>
    <button class="elemento" on:click={up}><span class="material-icons-outlined icona">arrow_upward</span></button>
    <button class="elemento inactive"></button>
    <button class="elemento" on:click={left}><span class="material-icons-outlined icona">arrow_back</span></button>
    {#if $main_status}
        <button class="elemento verde center" on:click={status}><span class="material-icons-outlined icona">toggle_on</span></button>
    {:else}
        <button class="elemento rosso center" on:click={status}><span class="material-icons-outlined icona">toggle_off</span></button>
    {/if}
    <button class="elemento" on:click={right}><span class="material-icons-outlined icona">arrow_forward</span></button>
    <button class="elemento inactive"></button>
    <button class="elemento" on:click={down}><span class="material-icons-outlined icona">arrow_downward</span></button>
    <button class="elemento inactive"></button>
</main>

<style>
    main{
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    button{
        border: none;
        background-color: white;
        border-radius: 20px;
    }
    .icona{vertical-align: -10%;font-size: 100px;}
    .elemento{
        width: 31%;
        height: 31%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .elemento:hover{
        background-color: lime;
        cursor: pointer;
    }
    .inactive:hover{background-color: red;}
    .center:hover{background-color: black;color: white;}
    .rosso{background-color: red;}
    .verde{background-color: lime;}
</style>