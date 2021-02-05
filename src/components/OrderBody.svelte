
<script lang="ts">
	export let order: any;
  function getRandom(): number {
    return Math.round(Math.random() * 10) + 1;
  }
</script>

<style>
	.comment {
		text-align: left;
    padding: 10px 10px 10px 0;
    font-size: 14px;
	}
  .actions {
    padding: 0 0 5px 0;
    text-align: right;
	}
 .icon {
    margin: 0 10px 0 0;
    display: inline-block;
  }
  .material-icons {
    vertical-align: bottom;
    font-size: 16px;
  }
  .comments {
    color: #1A73E8;
  }
  .favorites {
    color: #EA4335;
  }
</style>
    {#if !!order.comment}
<div class="comment">
  {@html order.comment}
</div>
{/if}
<div class="actions">
  <div class="icon">
    <span class="material-icons favorites">favorite</span>
      {getRandom()}
  </div>
  <div class="icon">
    <span class="material-icons comments">comment</span>
      {getRandom()}
  </div>
</div>
