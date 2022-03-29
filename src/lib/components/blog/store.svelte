<script context="module">
	import { readable } from 'svelte/store';
	const targetUrl = 'https://functionland.ghost.io/ghost/api/v4/content/posts/?limit=9&key=8fb27f029cb68e715fb6be3f53';

	export function initialValue() {
		return {
			blog: new Map()
		};
	}
	export function makeBlogStore(args) {
		let initial = initialValue();
		let store = readable(initial, makeSubscribe(initial, args));
		return store;
	}

	function unsubscribe() {}

	function makeSubscribe(data, _args) {
		return (set) => {
			fetchBlogData(data, set);
			return unsubscribe;
		};
	}

	async function fetchBlogData(data, set) {
		
		try {
			const response = await fetch(targetUrl);
			const result = await response.json();
					//data.title = result.title;
					//data.description = result.description;
					//data.image = result.image;
					//data.link = result.link;
					//data.rssLink = result.rssLink;
					//data.category = result.category;
					data.items = result.posts;
					data.ready = true;
					set(data);
		} catch (error) {
			data.error = error;
			set(data);
		}
	}
</script>
