<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { innerWidth } from 'svelte-window-stores/viewport';
	let scrollY = false;
	onMount(() => {});
	
</script>
<svelte:window bind:scrollY={scrollY} />

	<div class="slogan-wrapper">
		<h1 class="slogan">
			<span>A Private, </span>
			<span>Payless, </span>
			<span>Cloud Storage </span>
			<span>Alternative</span>
		</h1>
	</div>

<style>
    
	.slogan-wrapper {
		pointer-events: none;
		position: fixed;
		width: fit-content;
		height: fit-content;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		z-index: 12;
		width: 100%;
		height: 100%;
		display: grid;
		align-items: center;
    	mix-blend-mode: screen;
		max-width: var(--container-max-width);
	}
	h1 {
		color: var(--actionColor);
		pointer-events: none;
		font-size: var(--slogan-font-size);
		font-weight: var(--slogan-font-weight);
		line-height: var(--slogan-line-height);
		letter-spacing: var(--slogan-letter-spacing);
		text-align: center;
		max-width: var(--slogan-max-width);
		font-family: var(--roboto), Arial, Helvetica, sans-serif;
		margin: 0 auto;
		word-break: break-word;
		position: relative;
		z-index: 4;
    	mix-blend-mode: screen;
		font-display: swap;
	}
</style>