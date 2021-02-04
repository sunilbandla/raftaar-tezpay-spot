<script lang="ts">
  import OrderHeader from './OrderHeader.svelte';
  import OrderBody from './OrderBody.svelte';
  export let recent_transactions: any;
</script>

<div class="orders-list">
  {#each recent_transactions.transactions as order}
    <div class="order">
      <div class="order-image">
        <div class="order-image-content">
          {order.payerName.charAt(0)}
        </div>
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
    padding: 5px 15px;
    width: 100%;
  }
  .order-image-content {
    margin: auto 22px;
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
    height: 50px;
    width: 50px;
    margin: 10px;
    display: flex;
  }
  .order {
    border-bottom: 1px solid #D93025;
    display: flex;
    flex-direction: row;
  }
</style>
