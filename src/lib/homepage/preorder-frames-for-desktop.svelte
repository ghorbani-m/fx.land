<script>
	import { assets } from '$app/paths';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';
	import { innerWidth, innerHeight, scrollY } from 'svelte-window-stores/viewport';
    import { onMount } from 'svelte';
    export let preorder;
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
	let frames = [],
		currentFrame = 0;
	let totalFrames = 179;
	for (let i = 0; i < totalFrames; i++) {
		frames.push(i);
	}
	let m = { x: 0, y: 0 };
	function handleMousemove(event) {
        if (preorder.inview)
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>
<style>
</style>
