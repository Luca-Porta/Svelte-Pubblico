import { writable } from "svelte/store";
export let pos=writable(1);
export let main_status=writable(false);
export let div_status=writable([]);