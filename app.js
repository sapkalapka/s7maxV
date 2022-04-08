let playVideo = document.getElementById('play-video')
let video = document.getElementById('video')

window.onload = () => {
  document.querySelectorAll('.content').forEach((content) => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px',
      }
    )
    observer.observe(content)
  })
}

new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 2,
  spaceBetween: 60,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
new Swiper('.swiper2', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

playVideo.addEventListener('click', () => {
  video.classList.remove('hidden')
  console.log('hallo')
})
window.addEventListener('click', (e) => {
  if (!video.classList.contains('hidden') && e.target != playVideo) {
    video.classList.add('hidden')
  }
})
