
<script lang="ts">
	import Orders from './Orders.svelte';
	export let recent_transactions: any;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
  h5, p {
		text-align: center;
		margin: 0 auto;
	}

	@media (min-width: 480px) {
		h5 {
			font-size: 2em;
		}
	}
</style>

<Orders {recent_transactions}/>
