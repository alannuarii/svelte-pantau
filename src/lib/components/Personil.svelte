<script>
	export let names;
</script>

<h6>Petugas Piket</h6>
{#if names.length === 0}
	<div class="d-flex align-items-center">
		<i class="fi fi-sr-user-slash" />
		<p>Belum check in</p>
	</div>
{:else}
	{#each names as nama}
		<div class="d-flex align-items-center">
			<i class="fi fi-sr-user" />
			<p>{nama.nama}</p>
		</div>
	{/each}
{/if}

<style>
	i {
		font-size: 25px;
		color: #2b2d42;
	}
	p {
		margin: 0px;
		margin-left: 5px;
		color: #2ec4b6;
		font-weight: 500;
		font-size: 4vw;
	}
</style>
