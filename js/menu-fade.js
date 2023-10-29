window.addEventListener('scroll', function() {
    const instatooltip = document.getElementById('comp-tooltip');
    const contacttooltip = document.getElementById('upvote-tooltip');
    const abouttooltip = document.getElementById('journal-tooltip');
    const jewelrytooltip = document.getElementById('learn-tooltip');

    if (window.scrollY > 5) {
      instatooltip.classList.add('fade-out');
      contacttooltip.classList.add('fade-out');
      abouttooltip.classList.add('fade-out');
      jewelrytooltip.classList.add('fade-out');
    } else {
      instatooltip.classList.remove('fade-out');
      contacttooltip.classList.remove('fade-out');
      abouttooltip.classList.remove('fade-out');
      jewelrytooltip.classList.remove('fade-out');
    }
  });


  