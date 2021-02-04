
<script lang="ts">
  import {formatAmount} from '../services/formatters';
	export let order: any;
  function formatTimestamp() {
    const date = new Date(order.completionTimeMs);
    return `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`;
  }
</script>

<style>
	.tip-container {
		text-align: center;
    padding: 10px;
	}
  .event-time {
    padding: 10px;
    text-align: left;
  }
</style>

<div class="tip-container">
  &#8377;{formatAmount(order.tipAmount)} {order.payeeMerchantType} to {order.payeeMerchantName}
</div>
<div class="event-time">
  {formatTimestamp()}
</div>
