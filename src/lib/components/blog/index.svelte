<script>
	import { onDestroy, onMount } from 'svelte';
	import { initialValue, makeBlogStore } from '$lib/components/blog/store.svelte';
	import DesktopNewsGrid from '$lib/components/blog/desktop.svelte';
	import MobileNewsSlider from '$lib/components/blog/mobile.svelte';
	let someProp = 'something',
		store = makeBlogStore(someProp),
		unsubscribe,
		blogData = initialValue();
	let innerWidth;
	if (!unsubscribe) {
		unsubscribe = store.subscribe(updateBlogData);
	}
	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
			unsubscribe = null;
		}
	});
	let ready;
	onMount(()=>{
		ready = true;

		setTimeout(function(){
			document.querySelectorAll('.news-item').forEach(function(item, i){
				var img = item.getElementsByTagName("img")[0];
				img.src = img.getAttribute("data-src");
			});
		}, 2000);
	})
	function updateBlogData(data) {
		blogData = data;
	}

	

</script>

<svelte:window bind:innerWidth />
{#if ready === true} 
	{#if innerWidth > 721}
		<DesktopNewsGrid {blogData}/>
	{:else}
		<MobileNewsSlider {blogData}/>
	{/if}
{/if}
