(function($) {
    "use strict";
    setTimeout(function(){
    /* Cart search */
    $(document).on("click", ".account-satting-active, .search-active", function (e) {
        e.preventDefault();
        $(this).parent().find(".account-dropdown, .search-content").slideToggle("medium");
    });
   
   
    /* Cart dropdown */
    var iconCart = $('.icon-cart');
    iconCart.on('click', function() {
        $('.shopping-cart-content').toggleClass('cart-visible');
    })
   
    /* Slider active */
 /*   $('.slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
   
   
    // Slider active 2
    $('.slider-active-2').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        navText: ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
   
   
    // Slider active
    $('.slider-active-3').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
   
   
    // Instagram active
    $('.instagram-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 5,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })
   
   
    // Collection slider active
    $('.collection-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        item: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
   
   
    // Collection slider active 2
    $('.collection-active-2').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
   
   
    // product-slider active
    $('.product-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplayTimeout: 5000,
        item: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
   
    // product-slider active 2
    $('.product-slider-active-2').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
   
    // product-slider active 3
    $('.product-slider-active-3').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        autoplayTimeout: 5000,
        item: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
   
    // Testimonial active
    $('.testimonial-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        navText: ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
        autoplayTimeout: 5000,
        item: 1,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    // Testimonial 2 active
    $('.testimonial-active-2').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        navText: ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
        autoplayTimeout: 5000,
        item: 1,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
   
   
    // Brand logo active
    $('.brand-logo-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 5,
        margin: 30,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    })
   
    // Brand logo active
    $('.brand-logo-active-2').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 4,
        margin: 45,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })
   
   
    // Related product active
    $('.related-product-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
   
   
    //--- Quickview-slide-active ---
    $('.quickview-slide-active').owlCarousel({
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
   
   
    $('.quickview-slide-active a').on('click', function() {
        $('.quickview-slide-active a').removeClass('active');
    })
 
 homepage
const owl = $('.homepage-slider').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 8000, // ⏱️ Slower: 8 seconds per slide
    // autoplayHoverPause: true, // ❌ Removed to prevent pausing on full slider
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>'
    ],
    items: 1,
    animateOut: 'slideOutLeft',
    animateIn: 'slideInRight',
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1000: { items: 1 }
    }
  });
 
  // ✅ Pause autoplay only when hovering on slider buttons
  $('.homepage-slider').on('mouseenter', '.slider-btn a', function () {
    owl.trigger('stop.owl.autoplay');
  });
  $('.homepage-slider').on('mouseleave', '.slider-btn a', function () {
    owl.trigger('play.owl.autoplay', [8000]);
  });
 
  //news slider
  (function () {
    const slider = document.getElementById('news-scroll-slider');
    if (!slider) return;
 
    const items = slider.querySelectorAll('.news-item');
    let currentIndex = 0;
    let isHovering = false;
    let freezeScroll = false;
    let hoverTimer = null;
    let reFreezeTimer = null;
    let lastScrollTime = 0;
    let scrollAttemptsAtEdge = 0;
 
    const SCROLL_DELAY = 100;
    const HOVER_DELAY = 1000;
    const REFREEZE_DELAY = 2000; // if still hovering after unfreeze
    const SCROLL_THRESHOLD = 4;
    const MAX_SCROLL_ATTEMPTS = 10; // roughly 30s if user keeps scrolling
 
    function showItem(index) {
      items.forEach((item, i) => {
        item.style.transform = `translateY(${(i - index) * 100}%)`;
        item.style.transition = 'transform 0.6s ease-in-out';
      });
    }
 
    function unfreeze() {
      freezeScroll = false;
      scrollAttemptsAtEdge = 0;
    }
 
    // Passive scroll animation (your smoother logic)
    window.addEventListener('scroll', () => {
      if (freezeScroll) return;
 
      const rect = slider.getBoundingClientRect();
      const sliderHeight = slider.offsetHeight;
      const viewportHeight = window.innerHeight;
 
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const visiblePercent = 1 - (rect.bottom / (viewportHeight + sliderHeight));
        const index = Math.min(
          items.length - 1,
          Math.max(0, Math.floor(visiblePercent * items.length))
        );
 
        if (index !== currentIndex) {
          currentIndex = index;
          showItem(currentIndex);
        }
      }
    });
 
    // Hover-to-freeze behavior
    slider.addEventListener('mouseenter', () => {
      clearTimeout(reFreezeTimer);
      hoverTimer = setTimeout(() => {
        freezeScroll = true;
        isHovering = true;
      }, HOVER_DELAY);
    });
 
    slider.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimer);
      reFreezeTimer = setTimeout(() => {
        if (isHovering && !freezeScroll) {
          freezeScroll = true;
        }
      }, REFREEZE_DELAY);
 
      isHovering = false;
      unfreeze();
    });
 
    // Scroll through items manually when frozen
    window.addEventListener('wheel', (e) => {
      if (!freezeScroll || !isHovering) return;
 
      const now = Date.now();
      if (now - lastScrollTime < SCROLL_DELAY) {
        e.preventDefault();
        return;
      }
 
      let moved = false;
 
      if (e.deltaY > SCROLL_THRESHOLD && currentIndex < items.length - 1) {
        currentIndex++;
        moved = true;
      } else if (e.deltaY < -SCROLL_THRESHOLD && currentIndex > 0) {
        currentIndex--;
        moved = true;
      } else if (
        (e.deltaY > SCROLL_THRESHOLD && currentIndex === items.length - 1) ||
        (e.deltaY < -SCROLL_THRESHOLD && currentIndex === 0)
      ) {
        scrollAttemptsAtEdge++;
        if (scrollAttemptsAtEdge >= MAX_SCROLL_ATTEMPTS) {
          unfreeze();
        }
      }
 
      if (moved) {
        scrollAttemptsAtEdge = 0;
        showItem(currentIndex);
      }
 
      lastScrollTime = now;
      e.preventDefault();
    }, { passive: false });
 
    // Init
    showItem(currentIndex);
  })();*/
     
    /*-----------------------------------
        Scroll zoom
    -------------------------------------- */
    window.sr = ScrollReveal({
        duration: 800,
        reset: false
    });
    sr.reveal('.scroll-zoom');
   
   
    /*-----------------------
        Shop filter active
    ------------------------- */
    $('.filter-active a').on('click', function(e) {
        e.preventDefault();
        $('.product-filter-wrapper').slideToggle();
    })
   
   
    /*---------------------
        Price slider
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 16,
            max: 400,
            values: [0, 300],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });
   
   
    /* Language dropdown */
    $(".language-style a").on("click", function(e) {
        e.preventDefault();
        $(this).parent().find('.lang-car-dropdown').slideToggle('medium');
    })
   
   
    /* use style dropdown */
    $(".use-style a").on("click", function(e) {
        e.preventDefault();
        $(this).parent().find('.lang-car-dropdown').slideToggle('medium');
    })
   
   
    /*=========================
        Toggle Ativation
    ===========================*/
    function itemToggler() {
        $(".toggle-item-active").slice(0, 8).show();
        $(".item-wrapper").find(".loadMore").on('click', function(e) {
            e.preventDefault();
            $(this).parents(".item-wrapper").find(".toggle-item-active:hidden").slice(0, 4).slideDown();
            if ($(".toggle-item-active:hidden").length == 0) {
                $(this).parent('.toggle-btn').fadeOut('slow');
            }
        });
    }
    itemToggler();
   
   
    function itemToggler2() {
        $(".toggle-item-active2").slice(0, 8).show();
        $(".item-wrapper2").find(".loadMore2").on('click', function(e) {
            e.preventDefault();
            $(this).parents(".item-wrapper2").find(".toggle-item-active2:hidden").slice(0, 4).slideDown();
            if ($(".toggle-item-active2:hidden").length == 0) {
                $(this).parent('.toggle-btn2').fadeOut('slow');
            }
        });
    }
    itemToggler2();
   
    function itemToggler3() {
        $(".toggle-item-active3").slice(0, 8).show();
        $(".item-wrapper3").find(".loadMore3").on('click', function(e) {
            e.preventDefault();
            $(this).parents(".item-wrapper3").find(".toggle-item-active3:hidden").slice(0, 4).slideDown();
            if ($(".toggle-item-active3:hidden").length == 0) {
                $(this).parent('.toggle-btn3').fadeOut('slow');
            }
        });
    }
    itemToggler3();
   
   
    /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
   
   
    /*--------------------------
        Isotope
    ---------------------------- */
   
    $('.grid').imagesLoaded(function() {
        // init Isotope
        $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-sizer',
            }
        });
    });
   
   
    /*--- Clickable menu active ----*/
    const slinky = $('#menu').slinky()
   
    /*====== sidebarCart ======*/
    function sidebarMainmenu() {
        var menuTrigger = $('.clickable-mainmenu-active'),
            endTrigger = $('button.clickable-mainmenu-close'),
            container = $('.clickable-mainmenu');
        menuTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
        });
        endTrigger.on('click', function() {
            container.removeClass('inside');
        });
    };
    sidebarMainmenu();
   
   
    /*=========================
        Toggle Ativation
    ===========================*/
    function itemToggler4() {
        $(".toggle-item-active4").slice(0, 6).show();
        $(".item-wrapper4").find(".loadMore4").on('click', function(e) {
            e.preventDefault();
            $(this).parents(".item-wrapper4").find(".toggle-item-active4:hidden").slice(0, 3).slideDown();
            if ($(".toggle-item-active4:hidden").length == 0) {
                $(this).parent('.toggle-btn4').fadeOut('slow');
            }
        });
    }
    itemToggler4();
 
    function itemToggler5() {
        $(".toggle-item-active5").slice(0, 6).show();
        $(".item-wrapper5").find(".loadMore5").on('click', function(e) {
            e.preventDefault();
            $(this).parents(".item-wrapper5").find(".toggle-item-active5:hidden").slice(0, 3).slideDown();
            if ($(".toggle-item-active5:hidden").length == 0) {
                $(this).parent('.toggle-btn5').fadeOut('slow');
            }
        });
    }
    itemToggler5();
 
    function itemToggler6() {
        $(".toggle-item-active6").slice(0, 6).show();
        $(".item-wrapper6").find(".loadMore6").on('click', function(e) {
            e.preventDefault();
            $(this).parents(".item-wrapper6").find(".toggle-item-active6:hidden").slice(0, 3).slideDown();
            if ($(".toggle-item-active6:hidden").length == 0) {
                $(this).parent('.toggle-btn6').fadeOut('slow');
            }
        });
    }
    itemToggler6();
   
   
    /*---------------------
        Countdown
      --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hours</p></span> <span class="cdown minutes">%M <p>Minutes</p></span class="cdown second"> <span>%S <p>Second</p></span>'));
        });
    });
   
   
    /*--------------------------
        Product Zoom
    ---------------------------- */
    $(".zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 300,
        zoomWindowHeight: 100,
        scrollZoom: false,
        zoomType: "inner",
        cursor: "crosshair"
    });
   
   
    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider-2').slick({
        infinite: true,
        slidesToShow: 4,
        vertical: true,
        slidesToScroll: 1,
        centerPadding: '60px',
        prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="fa fa-angle-up"></i></span>',
        nextArrow: '<span class="product-dec-icon product-dec-next"><i class="fa fa-angle-down"></i></span>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
   
   
    /*---------------------
        Video popup
    --------------------- */
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
   
   
    /*---------------------
        Sidebar active
    --------------------- */
    $('.sidebar-active').stickySidebar({
        topSpacing: 80,
        bottomSpacing: 30,
        minWidth: 767,
    });
   
   
    /* Product details slider */
    $('.product-details-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        item: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
   
   
    /*--
    Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
   
   
    /*-------------------------
    Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function() {
        $('.open-toggle2').slideToggle(1000);
    });
   
    $('.checkout-toggle').on('click', function() {
        $('.open-toggle').slideToggle(1000);
    });
   
   
    /*---- CounterUp ----*/
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
   
   
    /* Blog img slide active */
    $('.blog-img-slide').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 1,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
   
   
    /*====== fullpage slider active ======*/
   
    $('#fullpage').fullpage({
        sectionSelector : '.flone-fp-section',
        slideSelector : '.flone-fp-slide',
        navigation : true,
        responsiveWidth: 575
    });
   
   
    /*------ Wow Active ----*/
    new WOW().init();
   
   
   
   
   
   
   
   
   
   
   
}, 2000);
 
 
})(jQuery);