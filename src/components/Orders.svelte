<script lang="ts">
  import OrderHeader from './OrderHeader.svelte';
  import OrderBody from './OrderBody.svelte';
  export let recent_transactions: any;
</script>

<div class="orders-list">
  {#each recent_transactions.transactions as order}
    <div class="order">
      <div class="order-image">
        {#if !!order.iconUrl}
          <img src={order.iconUrl} alt="{order.payerName}">
        {:else}
          <div class="order-image-content">
          {order.payerName.charAt(0)}
          </div>
        {/if}
      </div>
      <div class="order-content">
        <OrderHeader {order} />
        <OrderBody {order} />
      </div>
    </div>
  {/each}
</div>

<style>
  .orders-list {
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
  }
  .order-content {
    padding: 5px 15px 5px 0;
    width: 100%;
    border-bottom: 1px solid #eee;
  }
  .order-image-content {
    margin: auto 17px;
    text-align: center;
  }
  .order-image {
    background-color: #1A73E8;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 20%);
    color: white;
    border-radius: 50%;
    flex-shrink: 0;
    object-fit: cover;
    background-size: cover;
    height: 40px;
    width: 40px;
    margin: 10px;
    display: flex;
  }
  .order {
    display: flex;
    flex-direction: row;
  }
</style>
