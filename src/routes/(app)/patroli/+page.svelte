<script>
	import Title from '$lib/components/Title.svelte';
	import { locations } from '$lib/js/locations';
	import { getPiket } from '$lib/js/jadwal';
	import namaPiket from '$lib/js/store';
	let kondisi = false;

	let names = getPiket();
	$: pilih = $namaPiket === null ? false : true;

	const handleSelect = (event) => {
		if (event.target.value !== 'Pilih nama petugas') {
			if ($namaPiket === null) {
				namaPiket.set(event.target.value);
			}
		}
	};
	$: console.log($namaPiket);
</script>

<div class="px-3">
	<Title title={'FORM PATROLI'} />
	<div class="mb-3">
		<div class="border p-3 shadow-sm">
			<div class="row">
				<label for="inputEmail3" class="col-3 col-form-label">Petugas</label>
				<div class="col-9">
					<select class="form-select" aria-label="Default select example" on:change={handleSelect}>
						<option selected disabled>Pilih nama petugas</option>
						{#each names as name}
							<option value={name}>{name}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
	</div>
	<div class:d-none={!pilih}>
		{#each locations as loc, i}
			<div class="mb-3">
				<div class="border p-3 text-center mb-2 shadow-sm">
					<h5>Lokasi {i + 1}</h5>
					<p><i class="fi fi-rr-marker me-1" /> {loc}</p>
					<div>
						<!-- <button class="btn capture"><i class="fi fi-rr-camera me-1" /> Ambil Gambar</button> -->
						<div class="d-flex justify-content-center">
							<a href="/patroli/qrscanner" class="btn qr"><i class="fi fi-rr-qrcode" /></a>
							<!-- <a href="/patroli/{i}" class="btn camera"
							><i class="fi fi-rr-camera me-1" /></a
						> -->
						</div>
					</div>
				</div>
			</div>
		{/each}
		<div class="kondisi p-3 border mb-4 shadow-sm">
			<label for="exampleRadios1" class="form-label">Laporan Patroli</label>
			<div class="form-check">
				<input
					class="form-check-input"
					type="radio"
					name="kondisi"
					id="exampleRadios1"
					value="Aman"
					bind:group={kondisi}
				/>
				<label class="form-check-label" for="exampleRadios2"> Aman </label>
			</div>
			<div class="form-check">
				<input
					class="form-check-input"
					type="radio"
					name="kondisi"
					id="exampleRadios2"
					value="Tidak Aman"
					bind:group={kondisi}
				/>
				<label class="form-check-label" for="exampleRadios1"> Tidak Aman </label>
			</div>
			{#if kondisi === 'Tidak Aman'}
				<div>
					<textarea class="form-control" rows="2" />
				</div>
			{/if}
		</div>
		<div class="d-flex justify-content-center">
			<button type="submit" class="btn submit">Kirim</button>
		</div>
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
	/* .camera {
		background-color: #2ec4b6;
		color: #ffffff;
		border-radius: 0 10px 10px 0;
		width: 20vw;
		height: 35px;
	} */
	.qr {
		border-color: #2ec4b6;
		color: #2ec4b6;
		border-radius: 10px;
		width: 20vw;
		height: 35px;
	}
	h5 {
		font-size: 17px;
		font-weight: 700;
	}
	p {
		font-size: 15px;
		margin-top: -3px;
		margin-bottom: 10px;
	}
	.border {
		border-radius: 20px;
	}
</style>
