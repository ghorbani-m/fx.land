<script context="module">
	import { assets } from '$app/paths';
	import { data as partnersList } from '$lib/components/data-mocks/partners.svelte';
	export const data = {
		page: {
			heading: {
				title: 'About Us',
				description: 'Want to know who is behind the project? '
			},
			intro: {
				title: 'We believe in a fairer future.',
				description:
					'Where every participant is both user and co-owner. To make this future accessible to all, it must be affordable. We’re building an open ecosystem that empowers software & hardware developers to create, build and share.'
			}
		},
		team: {
			title: 'Meet Our Team',
			description: 'A diverse skillset with proven track record',
			list: [
				{
					name: 'Keyvan Sadeghi',
					position: 'CEO',
					image: assets + 'images/team/Keyvan-Sadeghi.jpg',
					artwork: assets + 'images/team/Keyvan-Sadeghi-artwork.png',
					linkedin: 'https://www.linkedin.com/in/keyvanmsadeghi/'
				},
				{
					name: 'Ehsan Shariati',
					position: 'CTO',
					image: assets + 'images/team/Ehsan-shariati.jpg',
					artwork: assets + 'images/team/Ehsan-shariati-artwork.png',
					linkedin: 'https://www.linkedin.com/in/ehsan6sha'
				},
				{
					name: 'Kate Writhers',
					position: 'Partnerships',
					image: assets + 'images/team/Kate-Withers.jpg',
					artwork: assets + 'images/team/Kate-Withers-artwork.png',
					linkedin: 'https://www.linkedin.com/in/kate-withers-hess-phd-33530023/'
				},
				{
					name: 'Arman Shirani',
					position: 'Marketing',
					image: assets + 'images/team/Arman-shirani.jpg',
					artwork: assets + 'images/team/Arman-shirani-artwork.png',
					linkedin: 'https://www.linkedin.com/in/armanshirani/'
				},
				{
					name: 'Erfan Shekarchi',
					position: 'Tokenomics',
					image: assets + 'images/team/Erfan-Shekarchi.jpg',
					artwork: assets + 'images/team/Erfan-Shekarchi-artwork.png',
					linkedin: 'https://www.linkedin.com/in/erfan-shekarchi/'
				},
				{
					name: 'Sheida Shahbaz',
					position: 'Art & NFT',
					image: assets + 'images/team/Sheida-Shahbaz.jpg',
					artwork: assets + 'images/team/Sheida-Shahbaz-artwork.png',
					linkedin: 'https://www.linkedin.com/in/shidow/'
				},
				{
					name: 'Andrew Monaghan',
					position: 'Copywriter',
					image: assets + 'images/team/Andrew-monaghan.jpg',
					artwork: assets + 'images/team/Andrew-monaghan-artwork.png',
					linkedin: '#'
				},
				{
					name: 'Jonathan Groeneveld',
					position: 'Hardware',
					image: assets + 'images/team/Jonathan-Groeneveld.jpg',
					artwork: assets + 'images/team/Jonathan-Groeneveld-artwork.png',
					linkedin: 'https://www.linkedin.com/in/jonathan-groeneveld-4a8774b7/'
				},
				{
					name: 'Ehsan Emami',
					position: 'Hardware',
					image: assets + 'images/team/Ehsan-emami.png',
					artwork: assets + 'images/team/Ehsan-emami-artwork.png',
					linkedin: 'https://www.linkedin.com/in/ehsan-emami-0005bb6/'
				},
				{
					name: 'Aaron-Surty',
					position: 'Software',
					image: assets + 'images/team/Aaron-Surty.jpg',
					artwork: assets + 'images/team/Aaron-Surty-artwork.png',
					linkedin: 'https://www.linkedin.com/in/aaron-surty/'
				},
				{
					name: 'Jamshid Saidov',
					position: 'Software',
					image: assets + 'images/team/Jamshid-Saidov.jpg',
					artwork: assets + 'images/team/Jamshid-Saidov-artwork.png',
					linkedin: 'https://www.linkedin.com/in/jamshid-saidov-728822a9/'
				},
				{
					name: 'Aaron Maines',
					position: 'Copywriter',
					image: assets + 'images/team/Aaron.jpg',
					artwork: assets + 'images/team/Aaron-artwork.png',
					linkedin: 'https://www.linkedin.com/in/aaron-maines-a487985/'
				},
				{
					name: 'Alain Fundi',
					position: 'Sales',
					image: assets + 'images/team/Alain-Fundi.jpg',
					artwork: assets + 'images/team/Alain-Fundi-artwork.png',
					linkedin: 'https://www.linkedin.com/in/alainfundi/'
				},
				{
					name: 'Moein Bakhshi',
					position: 'Marketing',
					image: assets + 'images/team/Moein-Bakhshi.jpg',
					artwork: assets + 'images/team/Moein-Bakhshi-artwork.png',
					linkedin: '#'
				}
			]
		},
		advisors: {
			title: 'Meet Our Advisors',
			description: 'Experienced advisors',
			list: [
				{
					name: 'Crhis Gale',
					position: 'Founder | MetaEdge Ventures',
					image: assets + 'images/advisors/Advisor-Crhis-Gale.jpg',
					artwork: assets + 'images/advisors/crhis-gale-artwork.png'
				},
				{
					name: 'Zac Cohen',
					position: 'Founder | FileBase',
					image: assets + 'images/advisors/Advisor-Zac-Cohen.jpg',
					artwork: assets + 'images/advisors/zac-cohen-artwork.png'
				},
				{
					name: 'Shaun Neff',
					position: 'Founder | Neff brands',
					image: assets + 'images/advisors/Advisor-Shaun-Neff.jpg',
					artwork: assets + 'images/advisors/shaun-neff-artwork.png'
				},
				{
					name: 'Andy Lark',
					position: 'CEO | Group Lark',
					image: assets + 'images/advisors/Advisor-Andy-Lark.jpg',
					artwork: assets + 'images/advisors/andy-lark-artwork.png'
				},
				{
					name: 'Stefaan Vervaet',
					position: 'Ecosystem Lead | Protocol Labs',
					image: assets + 'images/advisors/Advisor-Stefaan-Vervaet.jpg',
					artwork: assets + 'images/advisors/andy-lark-artwork.png'
				}
			]
		},
		partners: {
			title: 'Our Partners',
			description:
				'Biggest names in the industry',
			list: partnersList
		},
		memories: {
			title: 'Our Memories',
			description: 'Functionland family from all over the world but close in heart!',
			photos: [
				
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/1-small.jpg',
							width: 186,
							height: 282
						},
						large: {
							src: assets + 'images/photos-app/1.jpg',
							width: 186,
							height: 282
						},
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/2-small.jpg',
							width: 584,
							height: 363
						},
						large: {
							src: assets + 'images/photos-app/2.jpg',
							width: 584,
							height: 363
						},
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/4-small.jpg',
							width: 449,
							height: 288
						},
						large: {
							src: assets + 'images/photos-app/4.jpg',
							width: 449,
							height: 288
						},
					},
					type: 'image/jpg'
				},
				
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/5-small.jpg',
							width: 476,
							height: 288
						},
						large: {
							src: assets + 'images/photos-app/5.jpg',
							width: 476,
							height: 288
						},
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/3-small.jpg',
							width: 233,
							height: 276
						},
						large: {
							src: assets + 'images/photos-app/3.jpg',
							width: 233,
							height: 276
						},
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/9-small.jpg',
							width: 494,
							height: 279
						},
						large: {
							src: assets + 'images/photos-app/9.jpg',
							width: 494,
							height: 279
						},
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/7-small.jpg',
							width: 698,
							height: 457
						},
						large: {
							src: assets + 'images/photos-app/7.jpg',
							width: 698,
							height: 457
						},
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/8-small.jpg',
							width: 476,
							height: 288
						},
						large: {
							src: assets + 'images/photos-app/8.jpg',
							width: 476,
							height: 288
						},
					},
					type: 'image/jpg'
				},
			]
		},
		jobs: {
			main_title: 'Help Us Build a Better Future, Join Functionland',
			title: 'Available Positions',
			description: 'Email us at hi@fx.land to learn more!',
			cta_items: [
				{
					title: 'Marketing Intern',
					description:
						'Are you passionate and eager to learn new things in a fast-pace environment',
					cta: {
						text: 'Apply',
						url: 'https://www.linkedin.com/company/functionland/jobs/'
					}
				},
				{
					title: 'Community Growth Lead',
					description:
						'Are you passionate and eager to learn new things in a fast-pace environment',
					cta: {
						text: 'Apply',
						url: 'https://www.linkedin.com/company/functionland/jobs/'
					}
				},
				{
					title: 'Social Media Manager',
					description:
						'Are you passionate and eager to learn new things in a fast-pace environment',
					cta: {
						text: 'Apply',
						url: 'https://www.linkedin.com/company/functionland/jobs/'
					}
				}
			]
		}
	};
</script>
