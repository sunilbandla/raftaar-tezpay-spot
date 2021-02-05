<script lang="ts">
  import { formatAmount } from '../services/formatters';
  import { fade, fly } from 'svelte/transition';
  import { beforeUpdate } from 'svelte';
  import { afterUpdate } from 'svelte';
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  export let order: any;
  let originalOrder = null;
  onMount(() => {
    originalOrder = order;
    order = {
      ...originalOrder,
      orderType: undefined,
    };
    if (originalOrder.orderType === 'REWARD') {
      setTimeout(() => {
        order = originalOrder;
      }, 400);
    }
  });
  const privacyTypeToIcon = {
    PUBLIC: 'group',
    FRIENDS: 'lock',
  };
  function getPrivacyIcon(order: any) {
    return privacyTypeToIcon[order.privacyType] || 'public';
  }
</script>

<div class="order-header">
  {order.description}
  {#if order.orderType === 'REWARD'}
    <span
      class="amount"
      transition:scale={{
        duration: 200,
        delay: 100,
        opacity: 0.5,
        start: 0.5,
        easing: quintOut,
      }}
    >
      + &#8377;{formatAmount(order.amount)}
    </span>
  {/if}
</div>
<div class="event-time">
  {order.completionTimeFormatted}
  -
  <span class="material-icons">{getPrivacyIcon(order)}</span>
</div>

<style>
  .order-header {
    text-align: left;
    padding: 10px 10px 5px 0;
    color: #333;
  }
  .amount {
    text-align: right;
    float: right;
    color: #1e8e3e;
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
