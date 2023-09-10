<script>
	import namaPiket from '../../lib/js/store';
	export let id;

	const removeNamaPiket = () => {
		namaPiket.set(null);
	};
</script>

<div class="modal fade" {id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-body text-center py-4">Anda yakin menghapus semua progres patroli?</div>
			<div class="modal-footer d-flex justify-content-center">
				<a href="/patroli/reset" class="btn" data-bs-dismiss="modal" on:click={removeNamaPiket}
					>OK!</a
				>
			</div>
		</div>
	</div>
</div>

<style>
	.btn {
		background-color: #2ec4b6;
		color: #ffffff;
		border-radius: 10px;
		width: 20vw;
	}
</style>
