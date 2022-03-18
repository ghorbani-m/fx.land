import { readable } from 'svelte/store';
import parse from 'rss-to-json';
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
		parse(targetUrl)
			.then((result) => {
				//data.title = result.title;
				//data.description = result.description;
				//data.image = result.image;
				//data.link = result.link;
				//data.rssLink = result.rssLink;
				//data.category = result.category;
				data.items = result.posts;
				data.ready = true;
				set(data);
			})
			.catch((e) => {
				if (e.status === 400) {
					console.error('Bad request');
				} else if (e.status === 401) {
					console.error('Unauthorized');
				} else if (e.status === 403) {
					console.error('Forbidden');
				} else if (e.status === 404) {
					console.error('Not found');
				} else if (e.status === 500) {
					console.error('Internal server error');
				} else {
					console.error('Unknown error');
				}
				return e;
			});
	} catch (error) {
		data.error = error;
		set(data);
	}
}
