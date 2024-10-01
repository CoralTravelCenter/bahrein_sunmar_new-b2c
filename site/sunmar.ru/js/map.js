import { hostReactAppReady } from '../../common/js/utils'
hostReactAppReady().then(() => {
	$('.js-map-svg-path').on('mouseenter', function (e) {
		var n = $(e.currentTarget)
		$(n).next('.js-tooltip').fadeIn(), $(n).addClass('js-anima')
	}),
		$('.js-map-svg-path').on('mouseleave', function (e) {
			$(e.currentTarget)
			$('.js-tooltip').fadeOut()
		}),
		$('.js-map-svg-path').on('animationend', function (e) {
			var n = $(e.currentTarget)
			$(n).removeClass('js-anima')
		})
	var e = document.querySelector('#map-svg'),
		n = document.querySelector('#map-svg-mob'),
		t = new IntersectionObserver(
			function (a) {
				a.forEach(function (a) {
					if (a.isIntersecting) {
						a.target
						$('.js-map-svg-path').addClass('js-anima'),
							t.unobserve(e),
							t.unobserve(n)
					}
				})
			},
			{ threshold: 0.75 }
		)
	t.observe(e), t.observe(n)
})
