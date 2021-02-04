
<script lang="ts">
	export let order: any;
</script>

<style>
	.tip-container {
		text-align: right;
    padding: 10px;
	}
  .order-body {
    padding: 10px;
  }
</style>
<div class="order-body">
    {order.payerName} sent &#8377;{order.amount} to {order.payeeName}
</div>
<div class="tip-container">
  &#8377;{order.tipAmount} to {order.payeeMerchantName}
</div>
