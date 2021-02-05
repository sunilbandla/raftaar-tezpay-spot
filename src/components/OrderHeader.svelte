
<script lang="ts">
  import {formatAmount} from '../services/formatters';
		import { fade, fly } from 'svelte/transition';
export let order: any;
  const privacyTypeToIcon = {
    PUBLIC: 'group',
    FRIENDS: 'lock',
  }
  function getPrivacyIcon(order: any) {
    return privacyTypeToIcon[order.privacyType] || 'public';
  }
</script>

<style>
  .order-header {
    text-align: left;
    padding: 10px 10px 5px 0;
    color: #333;
  }
  .amount {
    text-align: right;
    float: right;
    color: #1E8E3E;
  }
  .event-time {
    padding: 5px 10px 10px 0;
    text-align: left;
    color: #333;
  }
  .material-icons {
    vertical-align: bottom;
    font-size: 16px;
  }

</style>

<div class="order-header">
  {order.description}
  <span class="amount" in:fly="{{ y: 200, duration: 2000 }}">
    {#if order.orderType === 'REWARD'}
      + &#8377;{formatAmount(order.amount)}
    {/if}
  </span>
</div>
<div class="event-time">
  {order.completionTimeFormatted}
  -
  <span class="material-icons">{getPrivacyIcon(order)}</span>
</div>
