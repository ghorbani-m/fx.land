<script context="module">
	import { assets } from '$app/paths';
	const lipsum =
		'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.';
	export const data = [
		{
			show: true,
			type: 'feature',
			ref: 'plug-n-play',
			intro_title: 'Plug-n-Play',
			intro_desc:
				'Setting up your Box takes just a few seconds as easy as a few clicks on your phone, like how you setup your smart TV!',
			main_title: 'Plug-n-Play',
			main_desc:
				'Box is designed for simplicity. It’s easy to set up, creates instant backups, syncs with your devices, and gives you access to a new open-source platform with free cloud services and endless possibilities.',
			show_cta: true,
			cta_text: 'Learn more',
			videos: [],
			photos: [
				{
					srcset: {
						small: {
							src: assets + 'images/home/plug-n-play-small.webp',
							width: 387,
							height: 229
						},
						large: {
							src: assets + 'images/home/plug-n-play.webp',
							width: 1920,
							height: 1073
						}
					},
					type: 'image/webp',
					alt: 'Box is a modular, plug and play decentralized application server that auto-mines tokens for the users.'
				}
			]
		},
		{
			show: true,
			type: 'feature',
			ref: 'customizable',
			intro_title: 'Customizable',
			intro_desc:
				'Customizable Box includes up to 9 towers, which users can use to extend the storage or CPU power of their Box if they want to. AS we build more partnerships, diverse towers like GPU or router will become available. Limit will be your imagination.',
			main_title: 'Built To Be Built On',
			main_desc:
				'Our hardware is also an open-source platform. With a modular plug-and-play design and standardized dimensions, Box lets hardware builders create additional plug-in towers to extend its functionality.',
			show_cta: true,
			cta_text: 'Learn more',
			videos: [
				{
					src: assets + 'videos/customize.mp4',
					type: 'video/mp4',
					scheme: 'light',
					poster: assets + 'images/home-page/customizable.png'
				},
				{
					src: assets + 'videos/customize_dark.mp4',
					type: 'video/mp4',
					scheme: 'dark',
					poster: assets + 'images/home-page/customizable.jpg'
				}
				// {
				// 	src: assets + 'videos/customizable-b.webm',
				// 	type: 'video/mp4',
				// 	scheme: 'light',
				// 	poster: assets + 'images/home-page/own-your-data-w.jpg',
				// },
			],
			photos: []
		},
		{
			show: true,
			type: 'feature',
			ref: 'design',
			intro_title: 'Solving subscription from the roots',
			intro_desc:
				'Solving subscription from the roots With Box, ordinary people own the hardware running the network. This solves the paying problem. Developers no longer have to pay rent. And, for the first time, developers are paid to create free applications and services for you to enjoy. ',
			main_title: 'Timeless design',
			main_desc:
				'Box is built with the help of designers from a wide range of expertise including Product design, Electronics and Computer engineering to ensure the best customer experience and we are totally open to more suggestions from the community',
			show_cta: true,
			cta_text: 'Learn more',
			videos: [],
			photos: [
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos/2-small.webp',
							width: 247,
							height: 192
						},
						large: {
							src: assets + 'images/photos-app/photos/2.webp',
							width: 427,
							height: 288
						}
					},
					type: 'image/webp'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos/19-small.webp',
							width: 360,
							height: 279
						},
						large: {
							src: assets + 'images/photos-app/photos/19.webp',
							width: 427,
							height: 288
						}
					},
					type: 'image/webp'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos/4-small.webp',
							width: 139,
							height: 293
						},
						large: {
							src: assets + 'images/photos-app/photos/4.webp',
							width: 584,
							height: 326
						}
					},
					type: 'image/webp'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos/6-small.webp',
							width: 180,
							height: 245
						},
						large: {
							src: assets + 'images/photos-app/photos/6.webp',
							width: 167,
							height: 282
						}
					},
					type: 'image/webp'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos/5-small.webp',
							width: 265,
							height: 229
						},
						large: {
							src: assets + 'images/photos-app/photos/5.webp',
							width: 433,
							height: 279
						}
					},
					type: 'image/webp'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos/8-small.webp',
							width: 265,
							height: 229
						},
						large: {
							src: assets + 'images/photos-app/photos/8.webp',
							width: 209,
							height: 276
						}
					},
					type: 'image/webp'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos/24-small.webp',
							width: 265,
							height: 229
						},
						large: {
							src: assets + 'images/photos-app/photos/24.webp',
							width: 626,
							height: 457
						}
					},
					type: 'image/webp'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos/27-small.webp',
							width: 265,
							height: 229
						},
						large: {
							src: assets + 'images/photos-app/photos/27.webp',
							width: 550,
							height: 457
						}
					},
					type: 'image/webp'
				}
			]
		}
	];
</script>
