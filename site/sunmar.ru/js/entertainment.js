import { hostReactAppReady, mediaMatcher } from '../../common/js/utils'

hostReactAppReady().then(() => {
	let mobileGallery = null
	const card_container = document.querySelector(
		'section.entertainments-section .swiper-wrapper'
	)

	mediaMatcher('768', isMobile => {
		if (isMobile && !mobileGallery) {
			mobileGallery = new Swiper('.entertainments-slider', {
				spaceBetween: 0,
				slidesPerView: 1.25,
				centeredSlides: !0,
				roundLengths: !0,
				loop: true,
				loopAdditionalSlides: 30,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			})
			card_container.classList.remove('.card-container')
		} else if (!isMobile) {
			mobileGallery.destroy(true, true)
			mobileGallery = null
			card_container.classList.add('.card-container')
		}
	})
})
