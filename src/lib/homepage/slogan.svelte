<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { innerWidth } from 'svelte-window-stores/viewport';
	let scrollY, showSlogan = false;
	onMount(() => {
		showSlogan = true;
	});
	const fadeIn = {
		reveal: [
			{ duration: 300, delay: 100 },
			{ duration: 200, delay: 300 },
			{ duration: 200, delay: 400 },
			{ duration: 200, delay: 600 },
			{ duration: 200, delay: 700 },
			{ duration: 200, delay: 800 },
			{ duration: 200, delay: 900 },
			{ duration: 200, delay: 1000 }
		],
		none: { duration: 0, delay: 0 }
	};
</script>
<svelte:window bind:scrollY={scrollY} />

{#if $innerWidth > 960}
	<div class="slogan-wrapper" style="opacity: {isNaN(1 - Math.max(0, scrollY / 40)) ? 0 : (1 - Math.max(0, scrollY / 40))}">
		<h1 class="slogan">
			{#if showSlogan}
				<span in:fade={ fadeIn.reveal[3] }>A Private, </span>
				<span in:fade={ fadeIn.reveal[4] }>Payless, </span>
				<span class='l-one-liner'>
					<span class='m-one-liner' in:fade={ fadeIn.reveal[5] }>Cloud Storage </span>
					<span in:fade={ fadeIn.reveal[6] }>Alternative</span>
				</span>
			{:else}
				<span class='hidden'>A Private, </span>
				<span class='hidden'>Payless, </span>
				<span class='hidden'>Cloud Storage </span>
				<span class='hidden'>Alternative</span>
			{/if}
		</h1>
	</div>
{:else}
	<div class="slogan-wrapper mobile">
		<h1 class="slogan">
			<span>A Private, </span>
			<span>Payless, </span>
			<span>Cloud Storage </span>
			<span>Alternative</span>
		</h1>
	</div>
{/if}

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