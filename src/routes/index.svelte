<script context="module" lang="ts">
  export async function preload() {
    return this.fetch(`recent_transactions.json`)
      .then((r: { json: () => any }) => {
        return r.json();
      })
      .then((recent_transactions: any) => {
        return { recent_transactions };
      });
  }
</script>

<script lang="ts">
  import Recent from '../components/Recent.svelte';
  export let recent_transactions: any;
</script>

<svelte:head>
  <title>Recent Activity</title>
</svelte:head>

<div class="title">
  <div>Recent Activity</div>
  <span class="material-icons menus">menu</span>
</div>
<Recent {recent_transactions} />
<div class="footer">
  <button class="make-payment">
    <span class="material-icons pay-add">add</span>
    New payment
  </button>
</div>

<style>
  .pay-add {
    vertical-align: sub;
    font-size: 18px;
  }
  .footer {
    text-align: center;
    padding: 10px;
  }
  .title {
    text-align: center;
  }
  .title div {
    margin: 10px auto;
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
  }
  .menus {
    font-size: 18px;
    vertical-align: sub;
    float: right;
    margin-top: 10px;
    margin-right: 5px;
  }
  .make-payment {
    font-size: 14px;
    font-weight: 500;
    box-sizing: border-box;
    position: relative;
    user-select: none;
    cursor: pointer;
    outline: 0;
    border: none;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    margin: 0;
    min-width: 64px;
    line-height: 36px;
    padding: 0 16px;
    border-radius: 4px;
    overflow: visible;
    transform: translate3d(0, 0, 0);
    transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
      box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    color: #fff;
    background-color: #1a73e8;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
</style>
