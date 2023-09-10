<script>
	import ModalNotif from './ModalNotif.svelte';
	export let path;
	export let icon;
	export let name;
	export let visibility;
	export let lock;
	export let id;
	export let pernyataan;
</script>

{#if lock}
	<!-- svelte-ignore a11y-missing-attribute -->
	<div class="text-reset {visibility}" data-bs-toggle="modal" data-bs-target="#{id}">
		<i class={icon} />
		<p>{name}</p>
	</div>
	<ModalNotif {id} {pernyataan} />
{:else}
	<a href={path} class="text-reset {visibility}">
		<i class={icon} />
		<p>{name}</p>
	</a>
{/if}

<style>
	i {
		/* padding: 15px 17px; */
		/* border-radius: 50%; */
		font-size: 45px;
		/* background-color: #cbf3f0; */
		color: #2ec4b6;
	}
	p {
		margin: 0;
		font-size: 3vw;
		margin-top: -7px;
		font-weight: 300;
	}
	a {
		text-decoration: none;
	}
	.btn{
		border: none;
	}
</style>
