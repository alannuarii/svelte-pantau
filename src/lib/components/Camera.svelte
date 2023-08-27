<script>
	import { onMount, onDestroy } from 'svelte';

	export let position;
	let mediaStream;
	let videoEl;
	let hiddenInput;
	let resetBtn = false;
	let takeSnapshotBtn = true;
	let isCanvasOn = false;

	async function getCamera() {
		try {
			mediaStream = await navigator.mediaDevices.getUserMedia({
				video: position
			});
			videoEl.srcObject = mediaStream;
			videoEl.play();
			takeSnapshotBtn = true;
			// Mendeteksi perubahan orientasi perangkat
			window.addEventListener('orientationchange', function () {
				const orientation = window.orientation;

				if (orientation === 0) {
					// Perangkat dalam mode potrait
					alert('Perangkat dalam mode potrait.');
				} else if (orientation === 90 || orientation === -90) {
					// Perangkat dalam mode lanskap
					alert('Perangkat dalam mode lanskap.');
				}
			});
		} catch (error) {
			console.error('Tidak dapat mengakses kamera belakang:', error);
			// Handle kesalahan jika diperlukan
		}
	}

	function takeSnapshot() {
		const canvas = document.querySelector('canvas');
		const ctx = canvas.getContext('2d');
		ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
		const imgUrl = canvas.toDataURL();
		hiddenInput.value = imgUrl;
		isCanvasOn = false;
		stopCamera();
	}

	function stopCamera() {
		if (videoEl && videoEl.srcObject) {
			const mediaStream = videoEl.srcObject;
			const tracks = mediaStream.getTracks();
			tracks.forEach((track) => track.stop());
		}
		if (videoEl) {
			videoEl.srcObject = null;
		}
		resetBtn = true;
		takeSnapshotBtn = false;
	}

	function resetSnapshot() {
		const canvas = document.querySelector('canvas');
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		hiddenInput.value = '';
		getCamera();
		takeSnapshotBtn = true;
		isCanvasOn = true;
		resetBtn = false;
	}

	onMount(() => {
		getCamera();
	});

	onDestroy(() => {
		stopCamera();
	});
</script>

<div class="camera d-flex flex-column align-items-center border p-3 shadow-sm">
	<div class="position-relative foto-border">
		<!-- svelte-ignore a11y-media-has-caption -->
		<video bind:this={videoEl} />
		<canvas
			class:d-none={isCanvasOn}
			width="300"
			height="400"
			class="position-absolute top-50 start-50 translate-middle"
		/>
		<input type="hidden" name="foto" bind:this={hiddenInput} />
		<!-- svelte-ignore a11y-missing-attribute -->
	</div>
	<div class="box position-relative">
		<button
			class="btn snapshot position-absolute top-50 start-50 translate-middle"
			disabled={!takeSnapshotBtn}
			on:click={takeSnapshot}><i class="fi fi-ss-circle text-danger" /></button
		>
		<button class="btn reset px-3 py-1 border" disabled={!resetBtn} on:click={resetSnapshot}
			>Reset</button
		>
	</div>
</div>

<style>
	.camera {
		border-radius: 20px;
	}
	video,
	canvas {
		width: 100%;
	}
	.foto-border {
		height: 400px;
		width: 300px;
	}
	.box {
		height: 70px;
		width: 70px;
	}
	.btn {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.fi-ss-circle {
		font-size: 50px;
		cursor: pointer;
	}
	.snapshot {
		z-index: 99;
	}
	.reset {
		position: absolute;
		left: 140%;
		top: 50%;
		transform: translate(-50%, -50%);
		border: 1px solid var(--color-text-1);
		border-radius: 20px 10px 10px 20px;
	}
</style>
