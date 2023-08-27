<script>
	import OffcanvasMenuBottom from './OffcanvasMenuBottom.svelte';
</script>

<nav class="navbar fixed-bottom shadow">
	<div class="container-fluid">
		<div
			class="btn"
			data-bs-toggle="offcanvas"
			data-bs-target="#menuBottom"
			aria-controls="offcanvasBottom"
		>
			<i class="fi fi-rr-grip-lines" />
		</div>
		<OffcanvasMenuBottom />
		<div class="warning">
			<i class="fi fi-rr-engine-warning btn" />
		</div>
		<div class="btn">
			<a href="/jadwal"><i class="fi fi-rr-calendar-clock" /></a>
		</div>
	</div>
</nav>

<style>
	nav {
		height: 70px;
		border-radius: 30px 30px 0 0;
		background-color: #2b2d42;
	}
	i {
		padding: 0px 15px;
		/* border-radius: 50%; */
		font-size: 25px;
		/* background-color: #ffd59d; */
		color: #2ec4b6;
	}
	.btn {
		border: none;
	}
	a {
		text-decoration: none;
	}
	.fi-rr-engine-warning{
		font-size: 40px;
		color: #ef233c;
	}
</style>
