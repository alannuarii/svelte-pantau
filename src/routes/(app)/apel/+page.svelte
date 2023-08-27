<script>
	import Camera from '../../../lib/components/Camera.svelte';
</script>

<div class="px-3">
	<div class="mb-3">
		<Camera position={true} />
	</div>
	<div class="kondisi p-3 border mb-4 shadow-sm">
		<label for="exampleRadios1" class="form-label">Catatan</label>
		<textarea class="form-control" rows="2" />
	</div>
	<div class="d-flex justify-content-center">
		<button type="submit" class="btn submit">Kirim</button>
	</div>
</div>

<style>
	.kondisi {
		border-radius: 20px;
	}
	.submit {
		background-color: #2ec4b6;
		color: #ffffff;
		border-radius: 10px;
		width: 50vw;
		height: 45px;
	}
</style>
