<script>
	export let title;
	export let description;
</script>

<section>
	<div class="container">
		<div class="grid">
			<div class="title">{title}</div>
			<div class="description">{description}</div>
		</div>
	</div>
</section>

<style>
	section {
		font-family: var(--inter), Arial, Helvetica, sans-serif;
		font-display: swap;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		grid-auto-flow: row;
		padding: 2rem;
		height: 100%;
		width: 100%;
		background: var(--bkg-ac);
		min-height: var(--section-min-height);
		align-items: center;
	}
	.title {
		height: 100%;
		font-size: 40px;
		font-weight: 600;
		border-bottom: 4px solid rgb(207, 207, 207);
		display: flex;
		align-items: center;
	}
	.description {
		color: var(--on-bkg-ac-txt);
		font-size: 18px;
		font-weight: 400;
	}
	@media (min-width: 960px) {
		.grid {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
			grid-auto-flow: row;
			min-height: unset;
			/* padding: 4rem; */
		}
		.title {
			border-bottom: unset;
			border-right: 4px solid rgb(207, 207, 207);
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			align-items: center;
			align-content: center;
			justify-content: start;
			padding: 4rem;
		}
		.description {
			padding: 4rem 3.5rem;
		}
	}
</style>
