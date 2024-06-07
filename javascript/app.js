        // Lazy Loading Images
        var lazyLoad = new LazyLoad({
          elements_selector: ".lazy"
      });

      // Mobile Menu Toggle
      const hamburger = document.querySelector('#hamburger');
      const mobileMenu = document.querySelector('#mobile-menu');
      const closeMenu = document.querySelector('#close-menu');

      hamburger.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
      });

      closeMenu.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
      });

      // Smooth Scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              mobileMenu.classList.add('hidden'); // Hide mobile menu if open
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });

      // Navbar Scroll Effect
      window.addEventListener('scroll', function() {
          var navbar = document.querySelector('nav');
          if (window.scrollY > 50) {
              navbar.classList.add('bg-white', 'text-gray-800', 'shadow-xl', 'transition-all', 'duration-300');
              navbar.classList.remove('bg-transparent', 'text-white');
          } else {
              navbar.classList.add('bg-transparent', 'text-white');
              navbar.classList.remove('bg-white', 'text-gray-800', 'shadow-xl', 'transition-all', 'duration-300');
          }
      });

      // Course Card Animation
      const courseCards = document.querySelectorAll('#courses .hover\\:scale-105');
      courseCards.forEach(card => {
          card.addEventListener('mouseover', () => {
              card.style.transform = 'scale(1.05)';
              card.style.transition = 'transform 0.3s ease-in-out';
          });
          card.addEventListener('mouseout', () => {
              card.style.transform = 'scale(1)';
          });
      });

      // Testimonial Carousel (you would typically use a library like Swiper.js for this)
      const testimonials = document.querySelectorAll('#testimonials .bg-white');
      let currentTestimonial = 0;

      function showTestimonial(index) {
          testimonials[currentTestimonial].classList.add('hidden');
          testimonials[index].classList.remove('hidden');
          currentTestimonial = index;
      }

      setInterval(() => {
          let nextTestimonial = (currentTestimonial + 1) % testimonials.length;
          showTestimonial(nextTestimonial);
      }, 5000); // Change testimonial every 5 seconds

      // Form Submission
      document.querySelector('footer form').addEventListener('submit', function(e) {
          e.preventDefault();
          let email = this.querySelector('input[type="email"]').value;
          alert(`Thank you for subscribing with email: ${email}. We'll keep you updated!`);
          this.reset();
      });

      // Easter Egg: Konami Code
      let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
      let konamiIndex = 0;

      document.addEventListener('keydown', function(e) {
          if (e.key === konamiCode[konamiIndex]) {
              konamiIndex++;
              if (konamiIndex === konamiCode.length) {
                  document.body.style.fontFamily = 'Comic Sans MS, cursive';
                  alert('🎉 Congrats! You found the Easter egg. Enjoy your Comic Sans experience! 😄');
                  konamiIndex = 0;
              }
          } else {
              konamiIndex = 0;
          }
      });