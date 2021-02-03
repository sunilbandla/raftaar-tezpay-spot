
<script lang="ts">
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

<h1>Recent transactions</h1>

<ul>
	{#each recent_transactions.transactions as transaction}
		<li>
      INR {transaction.amount}
      from {transaction.payerName} to {transaction.payeeName}
      including INR {transaction.tipAmount}
      for {transaction.payeeMerchantType} at {transaction.payeeMerchantName}
    </li>
	{/each}
</ul>
