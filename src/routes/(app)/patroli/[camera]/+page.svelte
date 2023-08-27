<script>
	import Camera from '../../../../lib/components/Camera.svelte';
	import { locations } from '../../../../lib/js/locations';
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
	let param;

	$: {
		const getParam = path.split('/').pop();
		param = getParam;
	}
</script>

<div class="px-3">
	<form method="POST">
		<div class="mb-3">
			<Camera position={'environment'} />
		</div>
		<div class="kondisi p-3 border mb-4 shadow-sm">
			<label for="exampleRadios1" class="form-label">Catatan</label>
			<textarea class="form-control" rows="2" name="catatan" />
		</div>
		<div class="d-flex justify-content-center">
			<input type="hidden" name="lokasi" value={locations[param]} />
			<button type="submit" class="btn submit">Kirim</button>
		</div>
	</form>
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
