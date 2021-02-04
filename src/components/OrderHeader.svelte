
<script lang="ts">
  import {formatAmount} from '../services/formatters';
	export let order: any;
</script>

<style>
  .order-header {
    text-align: left;
    padding: 10px;
    font-size: 18px;;
  }
  .amount {
    text-align: right;
    float: right;
  }
</style>

<div class="order-header">
  {order.payerName} paid {order.payeeName}
  <span class="amount">
    &#8377;{formatAmount(order.amount)}
  </span>
</div>
