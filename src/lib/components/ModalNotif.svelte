<script>
	export let id;
	export let pernyataan
</script>

<div class="modal fade" {id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-body text-center py-4">{pernyataan}</div>
			<div class="modal-footer d-flex justify-content-center">
				<button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">Tutup</button>
			</div>
		</div>
	</div>
</div>

<style>
	.btn {
		background-color: #ef233c;
		color: #ffffff;
		border-radius: 10px;
		width: 20vw;
	}
</style>
