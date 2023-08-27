<script>
	import Camera from '../../../lib/components/Camera.svelte';
	import Title from '../../../lib/components/Title.svelte';
</script>

<div class="px-3">
	<Title title={'FORM PENERIMAAN TAMU'} />
	<div class="kondisi p-3 border mb-3 shadow-sm">
		<div class="mb-3">
			<label for="exampleFormControlInput1" class="form-label">Nama Lengkap</label>
			<input type="text" class="form-control" placeholder="Masukkan nama lengkap Anda" />
		</div>
		<div class="mb-3">
			<label for="exampleFormControlInput1" class="form-label">Instansi</label>
			<input type="text" class="form-control" placeholder="Masukkan instansi Anda" />
		</div>
		<div class="mb-3">
			<label for="exampleFormControlInput1" class="form-label">Nomor Handphone</label>
			<input type="number" class="form-control" placeholder="Masukkan nomor handphone Anda" />
		</div>
		<div class="mb-3">
			<label for="exampleFormControlInput1" class="form-label">Tujuan Berkunjung</label>
			<input type="text" class="form-control" placeholder="Masukkan tujuan berkunjung Anda" />
		</div>
	</div>
	<div class="mb-4">
		<Camera position={'user'} />
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
