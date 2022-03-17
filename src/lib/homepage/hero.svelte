<script>
	import { scrollY, innerWidth } from 'svelte-window-stores/viewport';
	import { fade } from 'svelte/transition';
	import { assets } from '$app/paths';
	import { inview } from 'svelte-inview';
	let isMobile = $innerWidth < 960;
	const title = {
		inview: false,
		options: {
			threshold: 0.1,
			unobserveOnEnter: false
		},
		scrollDirection: '',
		change: ({ detail }) => {
			title.inview = detail.inView;
			title.scrollDirection = detail.scrollDirection.vertical;
		}
	};
	const fadeIn = {
		reveal: [
			{ duration: 300, delay: 100 },
			{ duration: 200, delay: 300 },
			{ duration: 200, delay: 400 },
			{ duration: 200, delay: 600 },
			{ duration: 200, delay: 700 },
			{ duration: 200, delay: 800 },
			{ duration: 200, delay: 1000 },
			{ duration: 200, delay: 1000 },
			{ duration: 200, delay: 1000 }
		],
		none: { duration: 0, delay: 0 }
	};
	const image = {
		src: {
			desktop: assets + 'images/home/hero-image-desktop.jpg',
			mobile: assets + 'images/home/hero-image-desktop.jpg'
		},
		options: {
			threshold: 0.01,
			unobserveOnEnter: false
		},
		inview: false,
		scrollDirection: '',
		change: ({ detail }) => {
			image.inview = detail.inView;
			image.scrollDirection = detail.scrollDirection.vertical;
		},
		init: ({ detail }) => {
			image.posY = window.pageYOffset + detail.node.getBoundingClientRect().y;
		}
	};
</script>

<svelte:head>
	<link rel="preload" href={image.src.desktop} media="(min-width: 960px)" as="image" />
	<link rel="preload" href={image.src.mobile} media="(max-width: 959px)" as="image" />
</svelte:head>
<section>
	<div class="container">
		<div class="wrapper">
			<div class="hero-text">
				<h2 class="hero" use:inview={title.options} on:change={title.change}>
					{#if title.inview}
						<span class="one-liner">
							<span class="bold" in:fade={title.scrollDirection !== 'down' ? fadeIn.reveal[0] : fadeIn.none}>Box </span>
							<span in:fade={title.scrollDirection !== 'down' ? fadeIn.reveal[1] : fadeIn.none}>by </span>
							<span class="teal-text" in:fade={title.scrollDirection !== 'down' ? fadeIn.reveal[2] : fadeIn.none}>Functionland </span>
						</span>
						<span class="one-liner">
							<span in:fade={title.scrollDirection !== 'down' ? fadeIn.reveal[3] : fadeIn.none}
								>The first
							</span>
							<span in:fade={title.scrollDirection !== 'down' ? fadeIn.reveal[4] : fadeIn.none}
								>Blockchain-Attached Storage solution</span
							>
						</span>
					{:else}
						<span class="one-liner hidden">
							<span class="bold">Box </span>
							<span>by </span>
							<span class="teal-text">Functionland </span>
						</span>
						<span class="one-liner hidden">
							<span>The first </span>
							<span>Blockchain-Attached Storage solution</span>
						</span>
					{/if}
				</h2>
			</div>
			<div class="hero-image">
				{#if isMobile}
					<div class="hero-image-wrapper" use:inview={image.options} on:change={image.change}>
						<picture id="hero">
							<source srcset={image.src.desktop} media="(min-width: 960px)" />
							{#if image.inview}
								<img
									src={image.src.mobile}
									alt=""
									loading="eager"
									in:fade={image.scrollDirection !== 'down' ? fadeIn.reveal[7] : fadeIn.none}
								/>
							{:else}
								<img src={image.src.mobile} alt="" loading="lazy" class="hidden" />
							{/if}
						</picture>
					</div>
				{:else}
					<div class="hero-image-wrapper" use:inview={image.options} on:change={image.change}>
						<picture
							id="hero"
							class:animate={image.inview}
							class:animateFromBottom={image.scrollDirection === 'down'}
							class:animateFromTop={image.scrollDirection !== 'down'}
							class:animateToBottom={image.scrollDirection === 'top'}
							class:animateToTop={image.scrollDirection !== 'top'}
						>
							<source srcset={image.src.desktop} media="(min-width: 960px)" />
							<img
								src={image.src.mobile}
								alt=""
								loading="eager"
								class:animate={image.inview}
								class:animateFromBottom={image.scrollDirection === 'down'}
								class:animateFromTop={image.scrollDirection !== 'down'}
								class:animateToBottom={image.scrollDirection === 'top'}
								class:animateToTop={image.scrollDirection !== 'top'}
							/>
						</picture>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.hidden {
		opacity: 0;
		user-select: none;
	}
	section {
		padding-bottom: 0;
	}
	.wrapper {
		padding: var(--hero-section-padding);
	}
	.one-liner {
		display: block;
	}
	h2 {
		font-family: var(--montserrat);
		font-size: var(--hero-font-size);
		font-weight: var(--hero-font-weight);
		line-height: var(--hero-line-height);
		letter-spacing: var(--letter-spacing);
		margin: 0 auto;
		padding-bottom: var(--hero-padding-bottom);
		aspect-ratio: 266/319;
		width: 100%;
	}
	h2 > span {
		display: block;
	}
	h2 > span.one-liner {
		padding-top: 1.5rem;
	}
	img {
		width: 100%;
		display: block;
		border-radius: var(--hero-image-brdrds);
	}
	.hero-image-wrapper {
		aspect-ratio: 1678/947;
		position: relative;
		width: 100%;
	}
	@media (max-width: 959px) {
		h2 {
			padding-bottom: 0;
		}
		.wrapper {
			padding: var(--hero-section-padding);
			height: 100%;
			display: grid;
			gap: 1rem;
			padding-bottom: 0;
		}
	}

	@media (min-width: 960px) {
		.hero-text,
		.hero-image {
			min-height: 50vh;
			align-items: center;
			display: grid;
			/* max-width: 80%; */
			margin: 0 auto;
		}
		h2 {
			text-align: var(--hero-text-align);
			aspect-ratio: 827 / 300;
			max-width: var(--hero-max-width);
		}
		h2 > span {
			display: inline-block;
		}
		h2 > span:nth-child(1) {
			display: block;
		}
		.hero-image-wrapper {
			aspect-ratio: 1678/947;
			position: relative;
			width: 100%;
		}
		picture {
			aspect-ratio: 1678/947;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			overflow: hidden;
			border-radius: var(--hero-image-brdrds);
		}
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			transform-origin: center;
			aspect-ratio: 1678/947;
			width: auto;
			max-width: unset;
			margin: 0 auto;
			display: block;
			border-radius: var(--hero-image-brdrds);
		}

		picture.animate,
		picture.animateFromTop,
		picture.animateFromBottom,
		picture.animateToBottom,
		picture.animateToTop {
			height: 400px;
			width: 400px;
			animation-name: none;
		}
		picture.animate.animateFromTop {
			-webkit-animation: scale-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation: scale-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation-delay: 1s;
		}
		picture.animateToTop.animateFromTop:not(.animate),
		picture.animate.animateFromBottom:not(.animateFromTop) {
			height: 100%;
			width: 100%;
			animation-name: none;
		}

		picture img.animate,
		picture img.animateFromTop,
		picture img.animateFromBottom,
		picture img.animateToBottom,
		picture img.animateToTop {
			transform: translateX(-47%) translateY(-40%);
			height: calc((947 / 1678) * 100vw);
			animation-name: none;
		}
		picture img.animate.animateFromTop {
			-webkit-animation: size-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation: size-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation-delay: 1.3s;
		}
		picture img.animateToTop.animateFromTop:not(.animate),
		picture img.animate.animateFromBottom:not(.animateFromTop) {
			transform: translateX(-50%) translateY(-50%);
			height: 100%;
			animation-name: none;
		}
	}
</style>
