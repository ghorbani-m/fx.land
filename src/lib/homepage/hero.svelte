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
			desktop: assets + 'images/home/hero-image-desktop.webp',
			mobile: assets + 'images/home/hero-image-desktop-small.webp'
		},
		alt: "Functionland's Blockchain-Attached Storage creates a sustainable ecosystem for app developers to create high-quality, free-forever applications which keep users' data private",
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
									alt={image.alt}
									loading="eager"
									in:fade={image.scrollDirection !== 'down' ? fadeIn.reveal[7] : fadeIn.none}
								/>
							{:else}
								<img src={image.src.mobile} alt={image.alt} loading="lazy" class="hidden" />
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
								alt={image.alt}
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
<!-- START Mailerlite -->
<!-- <style type="text/css">
  @import url(https://static.mailerlite.com/assets/plugins/groot/modules/includes/groot_fonts/import.css?version=1647438&display=swap);
</style> -->
<style type="text/css">
  .ml-form-embedSubmitLoad{display:inline-block;width:20px;height:20px}.g-recaptcha{transform:scale(1);-webkit-transform:scale(1);transform-origin:0 0;-webkit-transform-origin:0 0}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ml-form-embedSubmitLoad:after{content:" ";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:4px solid #fff;border-color:#fff #fff #fff transparent;animation:ml-form-embedSubmitLoad 1.2s linear infinite}@keyframes ml-form-embedSubmitLoad{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}#mlb2-5614488.ml-form-embedContainer{box-sizing:border-box;display:table;margin:0 auto;position:static;width:100%!important}#mlb2-5614488.ml-form-embedContainer button,#mlb2-5614488.ml-form-embedContainer h4,#mlb2-5614488.ml-form-embedContainer p,#mlb2-5614488.ml-form-embedContainer span{text-transform:none!important;letter-spacing:normal!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper{background-color:#eee;border-width:0;border-color:transparent;border-radius:4px;border-style:solid;box-sizing:border-box;display:inline-block!important;margin:0;padding:0;position:relative}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper.embedDefault,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper.embedPopup{width:100%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper.embedForm{max-width:100%;width:100%}#mlb2-5614488.ml-form-embedContainer .ml-form-align-left{text-align:left}#mlb2-5614488.ml-form-embedContainer .ml-form-align-center{text-align:center}#mlb2-5614488.ml-form-embedContainer .ml-form-align-default{display:table-cell!important;vertical-align:middle!important;text-align:center!important}#mlb2-5614488.ml-form-embedContainer .ml-form-align-right{text-align:right}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedHeader img{border-top-left-radius:4px;border-top-right-radius:4px;height:auto;margin:0 auto!important;max-width:100%;width:undefinedpx}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody{padding:20px 20px 0 20px}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody.ml-form-embedBodyHorizontal{padding-bottom:0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent{text-align:left;margin:0 0 20px 0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:30px;font-weight:400;margin:0 0 10px 0;text-align:left;word-break:break-word}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px;font-weight:400;line-height:20px;margin:0 0 10px 0;text-align:left}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ul,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ul{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol{list-style-type:lower-alpha}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol ol,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol ol{list-style-type:lower-roman}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p a,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p a{color:#000;text-decoration:underline}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group{text-align:left!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label{margin-bottom:5px;color:#333;font-size:14px;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-weight:700;font-style:normal;text-decoration:none;display:inline-block;line-height:20px}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child{margin:0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form{margin:0;width:100%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent{margin:0 0 20px 0;width:100%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow{float:left}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm{margin:0;padding:0 0 20px 0;width:100%;height:auto;float:left}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow{margin:0 0 10px 0;width:100%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item{margin:0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-formfieldHorizintal{margin:0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;height:auto;line-height:21px!important;margin-bottom:0;margin-top:0;margin-left:0;margin-right:0;padding:10px 10px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-webkit-input-placeholder{color:#333}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-moz-placeholder{color:#333}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-ms-input-placeholder{color:#333}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-moz-placeholder{color:#333}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow textarea,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow textarea{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;height:auto;line-height:21px!important;margin-bottom:0;margin-top:0;padding:10px 10px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{border-color:#ccc!important;background-color:#fff!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input.custom-control-input[type=checkbox]{box-sizing:border-box;padding:0;position:absolute;z-index:-1;opacity:0;margin-top:5px;margin-left:-1.5rem;overflow:visible}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{border-radius:4px!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::after{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e")}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input:checked~.custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::before{border-color:#00d0d0!important;background-color:#00d0d0!important;color:#fff!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before{top:2px;box-sizing:border-box}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before{top:0!important;box-sizing:border-box!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before{top:0!important;box-sizing:border-box!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after{top:0!important;box-sizing:border-box!important;position:absolute;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{top:0!important;box-sizing:border-box!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::before{position:absolute;top:4px;left:-1.5rem;display:block;width:16px;height:16px;pointer-events:none;content:"";background-color:#fff;border:#adb5bd solid 1px;border-radius:50%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::after{position:absolute;top:2px!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{position:absolute;top:4px;left:-1.5rem;display:block;width:16px;height:16px;pointer-events:none;content:"";background-color:#fff;border:#adb5bd solid 1px;border-radius:50%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after{position:absolute;top:0!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after{position:absolute;top:0!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-radio .custom-control-label::after{background:no-repeat 50%/50% 50%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-checkbox .custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after{background:no-repeat 50%/50% 50%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-control,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input{position:absolute;z-index:-1;opacity:0;box-sizing:border-box;padding:0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label{color:#000;font-size:12px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;line-height:22px;margin-bottom:0;position:relative;vertical-align:top;font-style:normal;font-weight:700}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-select,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-select{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;line-height:20px!important;margin-bottom:0;margin-top:0;padding:10px 28px 10px 12px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important;height:auto;display:inline-block;vertical-align:middle;background:url(https://cdn.mailerlite.com/images/default/dropdown.svg) no-repeat right .75rem center/8px 10px;-webkit-appearance:none;-moz-appearance:none;appearance:none}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow{height:auto;width:100%;float:left}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal{width:70%;float:left}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal{width:30%;float:left}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal.labelsOn{padding-top:25px}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields{box-sizing:border-box;float:left;padding-right:10px}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input{background-color:#fff;color:#333;border-color:#ccc;border-radius:4px;border-style:solid;border-width:1px;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;margin-bottom:0;margin-top:0;padding:10px 10px;width:100%;box-sizing:border-box;overflow-y:initial}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button{background-color:#00d0d0!important;border-color:#00d0d0;border-style:solid;border-width:1px;border-radius:6px;box-shadow:none;color:#fff!important;cursor:pointer;font-family:Roboto,Arial,Helvetica,sans-serif;font-size:12px!important;font-weight:700;line-height:20px;margin:0!important;padding:10px!important;width:100%;height:auto}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button:hover{background-color:#02b0b0!important;border-color:#02b0b0!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]{box-sizing:border-box;padding:0;position:absolute;z-index:-1;opacity:0;margin-top:5px;margin-left:-1.5rem;overflow:visible}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description{color:#000;display:block;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:12px;text-align:left;margin-bottom:0;position:relative;vertical-align:top}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label{font-weight:400;margin:0;padding:0;position:relative;display:block;min-height:24px;padding-left:24px}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label a{color:#000;text-decoration:underline}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p{color:#000!important;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:12px!important;font-weight:400!important;line-height:18px!important;padding:0!important;margin:0 5px 0 0!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p:last-child{margin:0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit{margin:0 0 20px 0;float:left;width:100%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button{background-color:#00d0d0!important;border:none!important;border-radius:6px!important;box-shadow:none!important;color:#fff!important;cursor:pointer;font-family:Roboto,Arial,Helvetica,sans-serif!important;font-size:12px!important;font-weight:700!important;line-height:21px!important;height:auto;padding:10px!important;width:100%!important;box-sizing:border-box!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading{display:none}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover{background-color:#02b0b0!important}.ml-subscribe-close{width:30px;height:30px;background:url(https://cdn.mailerlite.com/images/default/modal_close.png) no-repeat;background-size:30px;cursor:pointer;margin-top:-10px;margin-right:-10px;position:absolute;top:0;right:0}.ml-error input,.ml-error select,.ml-error textarea{border-color:red!important}.ml-error .custom-checkbox-radio-list{border:1px solid red!important;border-radius:4px;padding:10px}.ml-error .label-description,.ml-error .label-description p,.ml-error .label-description p a,.ml-error label:first-child{color:red!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p:first-letter{color:red!important}@media only screen and (max-width:600px){.ml-form-embedWrapper.embedDefault,.ml-form-embedWrapper.embedPopup{width:100%!important}.ml-form-formContent.horozintalForm{float:left!important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow{height:auto!important;width:100%!important;float:left!important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal{width:100%!important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal>div{padding-right:0!important;padding-bottom:10px}.ml-form-formContent.horozintalForm .ml-button-horizontal{width:100%!important}.ml-form-formContent.horozintalForm .ml-button-horizontal.labelsOn{padding-top:0!important}}
</style>
<style type="text/css">
  .ml-mobileButton-horizontal{display:none}#mlb2-5614488 .ml-mobileButton-horizontal button{background-color:#00d0d0!important;border-color:#00d0d0!important;border-style:solid!important;border-width:1px!important;border-radius:6px!important;box-shadow:none!important;color:#fff!important;cursor:pointer;font-family:Roboto,Arial,Helvetica,sans-serif!important;font-size:14px!important;font-weight:700!important;line-height:20px!important;padding:10px!important;width:100%!important}@media only screen and (max-width:600px){#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm{padding:0 0 10px 0!important}.ml-hide-horizontal{display:none!important}.ml-form-formContent.horozintalForm .ml-button-horizontal{display:none!important}.ml-mobileButton-horizontal{display:inline-block!important;margin-bottom:20px;width:100%}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal>div{padding-bottom:0!important}}
</style>
<style type="text/css">
  @media only screen and (max-width:600px){.ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields{margin-bottom:10px!important;width:100%!important}}
</style>
<div id="mlb2-5614488" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5614488">
  <div class="ml-form-align-center">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
        <div class="ml-form-embedContent" style="margin-bottom:0"></div>
        <form class="ml-block-form" action="https://static.mailerlite.com/webforms/submit/q9h9a4" data-code="q9h9a4" method="post" target="_blank">
          <div class="ml-form-formContent horozintalForm">
            <div class="ml-form-horizontalRow">
              <div class="ml-input-horizontal">
                <div style="width:100%" class="horizontal-fields">
                  <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <input type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Enter You Email for up to 50% off" autocomplete="email">
                  </div>
                </div>
              </div>
              <div class="ml-button-horizontal primary">
                <button type="submit" class="primary">Pre-register for up to 50% off</button>
                <button disabled="disabled" style="display:none" type="button" class="loading"> <div class="ml-form-embedSubmitLoad"></div> <span class="sr-only">Loading...</span> </button>
              </div>
            </div>
          </div>
          <input type="hidden" name="ml-submit" value="1">
          <div class="ml-mobileButton-horizontal">
            <button type="submit" class="primary">Pre-register for up to 50% off</button>
            <button disabled="disabled" style="display:none" type="button" class="loading"> <div class="ml-form-embedSubmitLoad"></div> <span class="sr-only">Loading...</span> </button>
          </div>
          <input type="hidden" name="anticsrf" value="true">
        </form>
      </div>
      <div class="ml-form-successBody row-success" style="display:none">
        <div class="ml-form-successContent">
          <h4></h4>
          <p><span style="color:#f6f6f6;font-size:20px"><span style="color:#000"><strong>Thank you for becoming a Functionlander!</strong></span><br></span></p>
          <p><strong><span style="color:#ccc"><span style="color:#000">You will receive a confirmation email shortly, please <em>confirm</em> your subscription.</span></span></strong></p>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
  function ml_webform_success_5614488(){var r=ml_jQuery||jQuery;r(".ml-subscribe-form-5614488 .row-success").show(),r(".ml-subscribe-form-5614488 .row-form").hide()}
</script>
<img src="https://track.mailerlite.com/webforms/o/5614488/q9h9a4?v1647787747" width="1" height="1" style="max-width:1px;max-height:1px;visibility:hidden;padding:0;margin:0;display:block" alt="." border="0">
<script src="https://static.mailerlite.com/js/w/webforms.min.js?v9b62042f798751c8de86a784eab23614" type="text/javascript"></script>
<!-- END Mailerlite -->
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
		font-family: var(--montserrat), Arial, Helvetica, sans-serif;
		font-size: var(--hero-font-size);
		font-weight: var(--hero-font-weight);
		line-height: var(--hero-line-height);
		letter-spacing: var(--letter-spacing);
		margin: 0 auto;
		padding-bottom: var(--hero-padding-bottom);
		aspect-ratio: 266/319;
		width: 100%;
		font-display: swap;
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
