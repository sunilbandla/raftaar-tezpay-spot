
<script lang="ts">
	export let order: any;
</script>

<style>
  .order-header {
    font-weight: 600;
    text-align: center;
  }
</style>

<div class="order-header">
  {order.orderType} + {order.payeeMerchantType}
</div>
