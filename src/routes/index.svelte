<script context="module">
	export const prerender = true;
</script>

<script>
	import { data as valuesData } from '$lib/components/data-mocks/values.svelte';
	import { data as featuresData } from '$lib/components/data-mocks/features.svelte';
	import Parallax from '$lib/homepage/intro-parallax.svelte';
	// import Frames from '$lib/homepage/intro-frames.svelte';
	import Hero from '$lib/homepage/hero.svelte';
	import Headlines from '$lib/homepage/headlines.svelte';
	import Preorder from '$lib/homepage/preorder.svelte';
	import News from '$lib/homepage/news.svelte';
	import Partners from '$lib/homepage/partners.svelte';
	import MouseMove from '$lib/homepage/mouseMove.svelte';
	import LazyLoadVideos from '$lib/homepage/lazyloadVideos.svelte';
	import { data as meetBoxData } from '$lib/components/data-mocks/meetBox.svelte';
	import LazyLoad from '@dimfeld/svelte-lazyload';
	import MediaQuery from "./MediaQuery.svelte";
</script>

<svelte:head>
	<title>Functionland: Blockchain-Attached Storage</title>
</svelte:head>
<main>
	<!-- <Frames /> -->
	<MediaQuery query="(min-width: 1281px)" let:matches>
	{#if matches}
		<Parallax />
		<Hero />
		<Headlines data={valuesData} presection={meetBoxData}/>
		<Headlines data={featuresData} title="Pros in a nutshell" />
		<Preorder />
		<News />
		<Partners />
		<MouseMove />
		{/if}
	</MediaQuery>

	<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
	{#if matches}
		<Parallax />
		<Hero />
		<Headlines data={valuesData} presection={meetBoxData}/>
		<Headlines data={featuresData} title="Pros in a nutshell" />
		<Preorder />
		<News />
		<Partners />
		<MouseMove />
	{/if}
	</MediaQuery>	

	<MediaQuery query="(max-width: 480px)" let:matches>
	{#if matches}
		<Parallax />
		<Hero />
		<LazyLoad>
			<Headlines data={valuesData} presection={meetBoxData}/>
			<Headlines data={featuresData} title="Pros in a nutshell" />
			<Preorder />
			<News />
			<Partners />
			<MouseMove />
			<LazyLoadVideos />
		</LazyLoad>
	{/if}
	</MediaQuery>
</main>

<style>
</style>
