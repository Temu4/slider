var glide = new Glide('.glide', {
  type: 'carousel',
  focusAt: '0',
  breakpoints: {
    1200: {
      perView: 4
    },
    640: {
      perView: 2
    },
    480: {
      perView: 1
    }
  },
  gap: 10,
  autoplay: 2000
});

glide.mount();
