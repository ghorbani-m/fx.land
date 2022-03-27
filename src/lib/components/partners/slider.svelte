<script>
	import { data } from '$lib/components/data-mocks/partners.svelte';
	import { Autoplay, Pagination } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	let innerWidth;
	$: perpage = innerWidth < 960 ? 8 : 8;
	$: pages =
		data.length % perpage === 0 ? data.length / perpage : Math.floor(data.length / perpage) + 1;
</script>

<svelte:window bind:innerWidth />
<Swiper modules={[Pagination, Autoplay]} autoHeight pagination={{ clickable: true }} autoplay={{
            delay: 2500,
            disableOnInteraction: true
        }}  loop={ {enabled: true}}>
	{#each Array(pages) as slide, i}
		<SwiperSlide>
			<div class="page">
				{#each data.slice(i * perpage, (i + 1) * perpage) as item}
					<div class="partner">
						<picture>
							<source srcset={item.dark} media="(prefers-color-scheme: dark)" />
							<!-- <img
								src={item.light}
								alt={item.title}
								loading="lazy"
								decoding="async"
								class="visible"
								width="120"
							/> -->
							<img src={item.main} alt={item.title} class="visible" loading="lazy" decoding="async" height="120" width="120"/>
						</picture>
						
					</div>
				{/each}
			</div>
		</SwiperSlide>
	{/each}
</Swiper>

<style>
	.page {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
		grid-row-gap: 2rem;
		max-width: calc(100% - 70px);
		margin: 0 auto;
		grid-template-rows: repeat(4, 100px);
	}
	picture {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	img {
		display: block;
		width: auto;
		max-height: 100%;
		max-width: 120px;
	}
	.partner {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		align-items: center;
		align-content: center;
		justify-content: center;
		justify-items: center;
	}
	.partner img {
		object-fit: contain;
		object-position: center;
		transition:all ease 0.4s;
		-webkit-transition:all ease 0.4s;
		filter: gray; /* IE6-9 */
  		-webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */
	}
	.partner:hover img {
		transform: scale(1.1);
		filter: none;
  		-webkit-filter: grayscale(0%);
	}
	@media (min-width: 960px) {
		.page {
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(2, 120px);
			transition: opacity 0.3s;
		}
		.partner:hover {
			background-color: var(--bkg);
		}
		:global(.swiper-slide:not(.swiper-slide-active) .page) {
			opacity: 0;
		}
		:global(.swiper-slide.swiper-slide-active .page) {
			opacity: 1;
		}
	}
</style>
