<script>
	import { convertDatetime } from '../../lib/js/date';
	export let nama;
	export let waktu;
</script>

<div class="info p-3 border position-relative">
	<p>
		Patroli telah dilaksanakan oleh <span>{nama}</span> pada pukul
		<span>{convertDatetime(waktu)} WITA</span>
	</p>
</div>

<style>
	.info {
		border-radius: 0 20px 20px 20px;
		border-color: #cbf3f0 !important;
		border-left: 10px solid #2ec4b6 !important;
	}
	p {
		margin: 0px;
		font-size: 15px;
	}
	span {
		font-weight: 700;
	}
</style>
