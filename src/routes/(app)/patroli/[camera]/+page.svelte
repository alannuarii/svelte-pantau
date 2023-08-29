<script>
	import Camera from '../../../../lib/components/Camera.svelte';
	import { locations } from '../../../../lib/js/locations';
	import { getDatetime } from '../../../../lib/js/date';
	import {rentangWaktu} from '../../../../lib/js/jadwal'
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
	let nama;
	let index

	$: {
		const getParam = path.split('/').pop();
		const getString = getParam.match(/[A-Za-z]+/)[0]
		nama = getString.replace(/([a-z])([A-Z])/g, '$1 $2')
		index = getParam.match(/\d+/)[0]
	}
	// $:{
	// 	console.log(param.match(/\d+/))
	// 	console.log(param.match(/[A-Za-z]+/))
	// }
</script>

<div class="px-3">
	<div class="text-center mb-3">
		<h3>LOKASI PATROLI</h3>
		<h6><i class="fi fi-rr-marker me-1" /> {locations[index]}</h6>
	</div>
	<form method="POST">
		<div class="mb-3">
			<Camera position={'environment'} />
		</div>
		<div class="kondisi p-3 border mb-4 shadow-sm">
			<label for="exampleRadios1" class="form-label">Catatan</label>
			<textarea class="form-control" rows="2" name="catatan" />
		</div>
		<div class="d-flex justify-content-center">
			<input type="hidden" name="nama" value={nama} />
			<input type="hidden" name="shift" value={rentangWaktu()} />
			<input type="hidden" name="waktu" value={getDatetime()} />
			<input type="hidden" name="lokasi" value={locations[index]} />
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
	h3 {
		color: #2ec4b6;
		font-weight: 700;
	}
</style>
