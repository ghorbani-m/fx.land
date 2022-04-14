<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<svelte:head>
	<title>Calendar</title>
</svelte:head>
<div class="content">
	<h1>Functionland Calendar</h1>
	<!-- Calendly inline widget begin -->
	<div class="calendly-inline-widget" data-url="https://calendly.com/functionland" style="min-width:320px;height:630px;"></div>
	<!-- Calendly inline widget end -->
</div>
