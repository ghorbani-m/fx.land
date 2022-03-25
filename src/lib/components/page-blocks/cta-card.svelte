<script>
	export let card;
</script>

<div class="card cta-card">
	<div class="title">{card.title}</div>
	<!-- <div class="description">{card.description}</div> -->
	<a href={card.cta.url} class="btn btn-cta">{card.cta.text}</a>
</div>

<style>
	.card {
		margin: 0 auto;
		font-family: var(--inter), Arial, Helvetica, sans-serif;
		line-height: 30px;
		font-size: 20px;
		aspect-ratio: 250/372;
		width: 100%;
		max-width: 250px;
		color: white;
		display: grid;
		padding: 2rem 3rem;
		grid-auto-flow: column;
		grid-template-rows: 1fr auto;
		justify-items: center;
		border-radius: 20px;
		justify-content: center;
		text-align: center;
		font-display: swap;
	}
	.btn-cta {
		font-size: 15px;
		font-family: var(--montserrat), Arial, Helvetica, sans-serif;
		line-height: 18px;
		font-display: swap;
	}
</style>
