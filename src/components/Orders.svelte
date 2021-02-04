<script lang="ts">
  import OrderHeader from './OrderHeader.svelte';
  import OrderBody from './OrderBody.svelte';
  export let recent_transactions: any;
</script>

<div class="orders-list">
    {#each recent_transactions.transactions as order}
  <div class="order">
      <OrderHeader {order} />
      <OrderBody {order} />
  </div>
    {/each}
</div>

<style>
  .orders-list {
    border: 5px solid lightblue;
    border-radius: 10px;
  }

  .order {
    border-bottom: 1px solid lightgray;
    padding: 15px;
  }
</style>
