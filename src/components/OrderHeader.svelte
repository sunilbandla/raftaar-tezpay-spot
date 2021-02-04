
<script lang="ts">
	export let order: any;
</script>

<style>
  .order-header {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }
</style>

<div class="order-header">
  {order.orderType} + {order.payeeMerchantType}
</div>
