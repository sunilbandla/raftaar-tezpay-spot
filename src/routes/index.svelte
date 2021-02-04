<script context="module" lang="ts">
	export async function preload() {
		return this.fetch(`/recent_transactions.json`)
    .then((r: { json: () => any; }) => {
      return r.json();
    })
    .then((recent_transactions: any) => {
			return { recent_transactions };
		});
	}
</script>

<script lang="ts">
	import Recent from '../components/Recent.svelte';
	export let recent_transactions: any;

</script>

<style>
	h5 {
		text-align: center;
		margin: 0 auto;
	}

	@media (min-width: 480px) {
		h5 {
			font-size: 2em;
		}
	}
</style>

<svelte:head>
	<title>Tez Feed</title>
</svelte:head>

<h5>Pay Feed</h5>

<Recent {recent_transactions}/>
