<script>
	import alarm from '../../../lib/img/alarm.gif';
	import mute from '../../../lib/img/mute.png';
	import { onMount, onDestroy } from 'svelte';
	import io from 'socket.io-client';

	let socket;
	let status = '';
	$: console.log(status);

	const connectSocket = () => {
		// Connect to server using Socket.IO client
		socket = io('http://localhost:3344');
		socket.on('connect', () => {
			console.log('Connected to server');
		});

		// Receive status data from server
		socket.on('mqtt-status', (data) => {
			status = data;
		});
	};

	const disconnectSocket = () => {
		// Disconnect from server
		if (socket) {
			socket.disconnect();
			console.log('Disconnected from server');
		}
	};

	// ...
	const turnOnLed = () => {
		// Send command to turn on LED to server
		if (socket) {
			// Mengirim pesan dari klien ke server
			socket.emit('client-action', 'LED ON');
		}
	};

	const turnOffLed = () => {
		// Send command to turn off LED to server
		if (socket) {
			// Mengirim pesan dari klien ke server
			socket.emit('client-action', 'LED OFF');
		}
	};
	// ...

	onMount(() => {
		connectSocket();
	});

	onDestroy(() => {
		disconnectSocket();
	});
</script>

<div class="px-3">
	{#if status === 'ON'}
		<img src={alarm} class="img-fluid px-5 py-5" alt="" />
		<div class="d-flex justify-content-center px-5">
			<button class="btn on w-100" on:click={turnOffLed}><i class="fi fi-sr-rec" /></button>
		</div>
	{:else}
		<img src={mute} class="img-fluid px-5 py-5" alt="" />
        <div class="d-flex justify-content-center px-5">
            <button class="btn off w-100" on:click={turnOnLed}><i class="fi fi-sr-rec" /></button>
        </div>
	{/if}
</div>

<style>
	.off {
		font-size: 50px;
		color: #ef233c;
		border: none;
	}
    .on {
		font-size: 50px;
		color: #6d6875;
		border: none;
	}
	/* .on {
		background-color: #06d6a0;
		color: #ffffff;
	}
	.off {
		background-color: #ef233c;
		color: #ffffff;
	} */
</style>
