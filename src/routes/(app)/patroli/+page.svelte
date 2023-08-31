<script>
	import Title from '$lib/components/Title.svelte';
	import { getPiket } from '$lib/js/jadwal';
	import namaPiket from '$lib/js/store';
	let kondisi = false;
	let persen = 30;

	let names = getPiket();
	$: pilih = $namaPiket === null ? false : true;

	const handleSelect = (event) => {
		if (event.target.value !== 'Pilih nama petugas') {
			if ($namaPiket === null) {
				namaPiket.set(event.target.value);
			}
		}
	};
</script>

<div class="px-3">
	<Title title={'FORM PATROLI'} />
	<div class="mb-3">
		<div class="border p-3 shadow-sm">
			<div class="row">
				<label for="inputEmail3" class="col-3 col-form-label">Petugas</label>
				<div class="col-9">
					<select class="form-select" aria-label="Default select example" on:change={handleSelect}>
						{#if $namaPiket !== null}
							<option selected disabled>{$namaPiket}</option>
						{:else}
							<option selected disabled>Pilih nama petugas</option>
							{#each names as name}
								<option value={name}>{name}</option>
							{/each}
						{/if}
					</select>
				</div>
			</div>
		</div>
	</div>
	<div class:d-none={!pilih}>
		<div class="mb-3">
			<div class="border p-3 text-center mb-2 shadow-sm">
				<p>Scan QR Code di Lokasi</p>
				<div>
					<div class="d-flex justify-content-center">
						<a href="/patroli/qrscanner" class="qr mb-2"
							><i class="fi fi-rr-qrcode border px-3 pt-3 shadow-sm" /></a
						>
					</div>
					<div
						class="progress"
						role="progressbar"
						aria-label="Example with label"
						aria-valuenow="25"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<div class="progress-bar" style="width: {persen}%" />
					</div>
					<span class="mt-1">1 dari 7 lokasi</span>
				</div>
			</div>
		</div>

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
			<button type="submit" class="btn submit" disabled={persen === 100 ? false : true}
				>Kirim</button
			>
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
	.qr {
		text-decoration: none;
	}
	p {
		font-size: 15px;
		margin-top: -3px;
		margin-bottom: 10px;
	}
	.border {
		border-radius: 20px;
	}
	.fi-rr-qrcode {
		font-size: 50px;
		color: #2ec4b6;
		border-color: #2ec4b6 !important;
	}
	.progress-bar {
		background-color: #2ec4b6;
	}
	.progress {
		height: 25px;
	}
	span {
		margin: 0px;
		font-size: 13px;
	}
</style>
