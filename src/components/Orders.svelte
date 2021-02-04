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
    /* border: 5px solid lightblue; */
    /* border-radius: 4px; */
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  }

  .order {
    border-bottom: 1px solid lightgray;
    padding: 15px;
  }
</style>
