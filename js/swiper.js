$(function () {
  $('.tab').on('click', function () {
    $($(this).siblings()).removeClass('tab--active');
    $(this).addClass('tab--active');
  });

  $('.swiper-slide').on('mouseover', function () {
    domRect = this.getBoundingClientRect();
    console.log(domRect.right);

    if ((domRect.right < 910) && (window.innerWidth > 1150)) {
      $(this).find('.countries-slider__hover-text').addClass('countries-slider__hover-text--active');
    } else if ((domRect.right < 680) && (window.innerWidth < 1150) && (window.innerWidth > 940)) {
      $(this).find('.countries-slider__hover-text').addClass('countries-slider__hover-text--active');
    } else if ((domRect.right < 560) && (window.innerWidth < 940) && (window.innerWidth > 780)) {
      $(this).find('.countries-slider__hover-text').addClass('countries-slider__hover-text--active');
    } else if ((domRect.right < 390) && (window.innerWidth < 780) && (window.innerWidth > 445)) {
      $(this).find('.countries-slider__hover-text').addClass('countries-slider__hover-text--active');
    }
    else {
      $(this).find('.countries-slider__hover-text__left').addClass('countries-slider__hover-text--active');
    }
  })


  $('.swiper-slide').on('mouseout', function () {
    if ($('.countries-slider__hover-text--active')) {
      $('.countries-slider__hover-text').removeClass('countries-slider__hover-text--active');
      $('.countries-slider__hover-text__left').removeClass('countries-slider__hover-text--active');
    }
  })

  $('.jq-selectbox__select').on('click', function () {
    $('.jq-selectbox__trigger').toggleClass('jq-selectbox__trigger--active');
  })

  if ($('.jq-selectbox__trigger--active')) {
    $('.jq-selectbox__dropdown').on('click', function () {
      $('.jq-selectbox__trigger').removeClass('jq-selectbox__trigger--active');
    })
    // $('div').on('click', function () {
    //   $('.jq-selectbox__trigger').removeClass('jq-selectbox__trigger--active');
    // })
  }
})

if (window.innerWidth < 650) {
  $('.swiper-slide').on('click', function () {
    $(this).addClass('swiper-slide_mobile');
    if ($('swiper-slide_mobile')) {
      swiper.destroy();
      $('.swiper-pagination').addClass('swiper-pagination_none')
      $(".swiper-slide").not('.swiper-slide_mobile').addClass("non-swiper-slide").removeClass("swiper-slide").hide();
      $('.countries-slider__hover-text').removeClass('countries-slider__hover-text--active');
      $('.countries-slider__hover-text__left').removeClass('countries-slider__hover-text--active');
      $('.countries-slider__hover-text__bottom').addClass('countries-slider__hover-text--active');
    }
    $('.mobiledropdown').on('click', function () {
      if ($('swiper-slide_mobile')) {
        $('.swiper-slide').removeClass('swiper-slide_mobile');
        $('.swiper-pagination').removeClass('swiper-pagination_none')
        $('.countries-slider__hover-text__bottom').removeClass('countries-slider__hover-text--active');
      }
    })
  })
  $('.mobiledropdown').on('click', function () {
    if ($('swiper-slide_mobile')) {
      $('.swiper-slide').removeClass('swiper-slide_mobile');
      $('.swiper-pagination').removeClass('swiper-pagination_none')
      swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        spaceBetween: 30,
        breakpoints: {
          375: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 20,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }
          },
          // 405: {
          //   slidesPerView: 3,
          //   slidesPerColumn: 2,
          //   spaceBetween: 10,
          //   pagination: {
          //     el: '.swiper-pagination',
          //     type: 'bullets',
          //     clickable: true,
          //   }
          // },
          450: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }
          },
          490: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }
          },
          575: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }
          },
          650: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }
          },
          745: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }
          },
          800: {
            slidesPerView: 5,
            slidesPerColumn: 2,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }
          },
          965: {
            slidesPerView: 6,
            slidesPerColumn: 2,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }
          },
          1170: {
            slidesPerView: 6,
            slidesPerColumn: 2,
            spaceBetween: 20,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }
          },
          1220: {
            slidesPerView: 6,
            slidesPerColumn: 2,
            spaceBetween: 20,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }
          },
          1350: {
            slidesPerView: 6,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            spaceBetween: 30,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          },
          1440: {
            slidesPerView: 6,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            spaceBetween: 30,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }
        }
      });
    }
    // $('.countries-slider__hover-text').removeClass('countries-slider__hover-text--active');
    // $('.countries-slider__hover-text__left').removeClass('countries-slider__hover-text--active');
    // if ($('.countries-slider__hover-text--active')) {
    //   $('.countries-slider__hover-text__bottom').removeClass('countries-slider__hover-text--active');
    // }
  })
}

$('.filter-style').styler();


var swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 6,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    },
    // 405: {
    //   slidesPerView: 3,
    //   slidesPerColumn: 2,
    //   spaceBetween: 10,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true,
    //   }
    // },
    450: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    },
    490: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    },
    575: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    },
    650: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    },
    745: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    },
    800: {
      slidesPerView: 5,
      slidesPerColumn: 2,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    },
    965: {
      slidesPerView: 6,
      slidesPerColumn: 2,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    },
    1170: {
      slidesPerView: 6,
      slidesPerColumn: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    },
    1220: {
      slidesPerView: 6,
      slidesPerColumn: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    },
    1350: {
      slidesPerView: 6,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    1440: {
      slidesPerView: 6,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }

});


$(".tab").on("click", function () {
  let filter = $(this).data('search');
  let slidesxcol;

  if (filter == "all") {
    $("[data-value]").removeClass("non-swiper-slide").addClass("swiper-slide").show();
    if ($(".swiper-slide").length > 12) {
      slidesxcol = 2;
      if ($('.countries-slider_btn--newswiper')) {
        $('.countries-slider_btn').removeClass('countries-slider_btn--newswiper');
      }
    }
    else slidesxcol = 1;
    swiper.destroy();
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      slidesPerColumn: slidesxcol,
      slidesPerColumnFill: 'row',
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        375: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        // 405: {
        //   slidesPerView: 3,
        //   slidesPerColumn: 2,
        //   spaceBetween: 10,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        //   }
        // },
        450: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        490: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        575: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        650: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        745: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        800: {
          slidesPerView: 5,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        965: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1170: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1220: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1350: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        1440: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    });
  }
  else {
    $(".swiper-slide").not("[data-value='" + filter + "']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
    $("[data-value='" + filter + "']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
    if ($(".swiper-slide").length > 12) {
      slidesxcol = 2;
      if ($('.countries-slider_btn--newswiper')) {
        $('.countries-slider_btn').removeClass('countries-slider_btn--newswiper');
      }
    }
    else {
      slidesxcol = 1;
      $('.countries-slider_btn').addClass('countries-slider_btn--newswiper');
    }
    swiper.destroy();
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      slidesPerColumn: slidesxcol,
      slidesPerColumnFill: 'row',
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        375: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        // 405: {
        //   slidesPerView: 3,
        //   slidesPerColumn: 2,
        //   spaceBetween: 10,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        //   }
        // },
        450: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        490: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        575: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        575: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        650: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        745: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        800: {
          slidesPerView: 5,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        965: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1170: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1220: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1350: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
      }
    });
  }
})

//  код ниже нужно проверить, тут разгадка

$('.jq-selectbox').on('click', function () {
  $('.empty_block').toggleClass('empty_block--active');
})

if ($('.empty_block--active')) {
  $('div').on('click', function () {
    $('.empty_block').removeClass('empty_block--active');
  })
}



if (!$('.mobiledropdown').data('value')) {
  $('.mobiledropdown').attr("data-value", "all");
}

// $(".mobiledropdown_item").on("click", function () {
//  let alpha = $(this).data('value');
//  let betta = $('.mobiledropdown').data('value');
//  console.log(alpha);
//  console.log(betta);
// })

// $(".mobiledropdown_item").on("click", function () {
//   console.log($(".jq-selectbox__select-text").text());
// })



$(".mobiledropdown_item").on("click", function () {

  let mobile_filter = $(".jq-selectbox__select-text").text();
  let mobileSlidesCol;

  if (mobile_filter === "Все направления") {
    $('.swiper-wrapper').children("[data-value]").removeClass("non-swiper-slide").addClass("swiper-slide").show();
    if ($(".swiper-slide").length > 12) {
      mobileSlidesCol = 2;
    }
    else mobileSlidesCol = 1;
    swiper.destroy();
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      slidesPerColumn: mobileSlidesCol,
      slidesPerColumnFill: 'row',
      spaceBetween: 30,
      breakpoints: {
        375: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        // 405: {
        //   slidesPerView: 3,
        //   slidesPerColumn: 2,
        //   spaceBetween: 10,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        //   }
        // },
        450: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        490: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        575: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        650: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        745: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        800: {
          slidesPerView: 5,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        965: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1170: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1220: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1350: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        1440: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    });
  } else if (mobile_filter === "Италия") {
    let italyCheck = $('.swiper-wrapper').children("[data-value='italy']").data('value');
    $(".swiper-slide").not("[data-value='" + italyCheck + "']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
    $("[data-value='" + italyCheck + "']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
    if ($(".swiper-slide").length > 12) {
      mobileSlidesCol = 2;
    }
    else mobileSlidesCol = 1;
    swiper.destroy();
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      slidesPerColumn: mobileSlidesCol,
      slidesPerColumnFill: 'row',
      spaceBetween: 30,
      breakpoints: {
        375: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        // 405: {
        //   slidesPerView: 3,
        //   slidesPerColumn: 2,
        //   spaceBetween: 10,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        //   }
        // },
        450: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        490: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        575: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        650: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        745: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        800: {
          slidesPerView: 5,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        965: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1170: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1220: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1350: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        1440: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    });
  } else if (mobile_filter === "Германия") {
    let germanyCheck = $('.swiper-wrapper').children("[data-value='germany']").data('value');
    $(".swiper-slide").not("[data-value='" + germanyCheck + "']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
    $("[data-value='" + germanyCheck + "']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
    if ($(".swiper-slide").length > 12) {
      mobileSlidesCol = 2;
    }
    else mobileSlidesCol = 1;
    swiper.destroy();
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      slidesPerColumn: mobileSlidesCol,
      slidesPerColumnFill: 'row',
      spaceBetween: 30,
      breakpoints: {
        375: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        // 405: {
        //   slidesPerView: 3,
        //   slidesPerColumn: 2,
        //   spaceBetween: 10,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        //   }
        // },
        450: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        490: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        575: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        650: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        745: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        800: {
          slidesPerView: 5,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        965: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1170: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1220: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1350: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        1440: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    });
  } else if (mobile_filter === "Греция") {
    let greeceCheck = $('.swiper-wrapper').children("[data-value='greece']").data('value');
    $(".swiper-slide").not("[data-value='" + greeceCheck + "']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
    $("[data-value='" + greeceCheck + "']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
    if ($(".swiper-slide").length > 12) {
      mobileSlidesCol = 2;
    }
    else mobileSlidesCol = 1;
    swiper.destroy();
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      slidesPerColumn: mobileSlidesCol,
      slidesPerColumnFill: 'row',
      spaceBetween: 30,
      breakpoints: {
        375: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        // 405: {
        //   slidesPerView: 3,
        //   slidesPerColumn: 2,
        //   spaceBetween: 10,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        //   }
        // },
        450: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        490: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        575: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        650: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        745: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        800: {
          slidesPerView: 5,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        965: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1170: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1220: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1350: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        1440: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    });
  } else if (mobile_filter === "Турция") {
    let turkeyCheck = $('.swiper-wrapper').children("[data-value='turkey']").data('value');
    $(".swiper-slide").not("[data-value='" + turkeyCheck + "']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
    $("[data-value='" + turkeyCheck + "']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
    if ($(".swiper-slide").length > 12) {
      mobileSlidesCol = 2;
    }
    else mobileSlidesCol = 1;
    swiper.destroy();
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      slidesPerColumn: mobileSlidesCol,
      slidesPerColumnFill: 'row',
      spaceBetween: 30,
      breakpoints: {
        375: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        // 405: {
        //   slidesPerView: 3,
        //   slidesPerColumn: 2,
        //   spaceBetween: 10,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        //   }
        // },
        450: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        490: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        575: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        650: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        745: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        800: {
          slidesPerView: 5,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        965: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1170: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1220: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1350: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        1440: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    });
  } else if (mobile_filter === "Испания") {
    let spainCheck = $('.swiper-wrapper').children("[data-value='spain']").data('value');
    $(".swiper-slide").not("[data-value='" + spainCheck + "']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
    $("[data-value='" + spainCheck + "']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
    if ($(".swiper-slide").length > 12) {
      mobileSlidesCol = 2;
    }
    else mobileSlidesCol = 1;
    swiper.destroy();
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      slidesPerColumn: mobileSlidesCol,
      slidesPerColumnFill: 'row',
      spaceBetween: 30,
      breakpoints: {
        375: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        // 405: {
        //   slidesPerView: 3,
        //   slidesPerColumn: 2,
        //   spaceBetween: 10,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        //   }
        // },
        450: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        490: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        575: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        650: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        745: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        800: {
          slidesPerView: 5,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        965: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1170: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1220: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1350: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        1440: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    });
  } else if (mobile_filter === "Португалия") {
    let portugalCheck = $('.swiper-wrapper').children("[data-value='portugal']").data('value');
    $(".swiper-slide").not("[data-value='" + portugalCheck + "']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
    $("[data-value='" + portugalCheck + "']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
    if ($(".swiper-slide").length > 12) {
      mobileSlidesCol = 2;
    }
    else mobileSlidesCol = 1;
    swiper.destroy();
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      slidesPerColumn: mobileSlidesCol,
      slidesPerColumnFill: 'row',
      spaceBetween: 30,
      breakpoints: {
        375: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        // 405: {
        //   slidesPerView: 3,
        //   slidesPerColumn: 2,
        //   spaceBetween: 10,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        //   }
        // },
        450: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        490: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        575: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        650: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        745: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        800: {
          slidesPerView: 5,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        965: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1170: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1220: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        1350: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        1440: {
          slidesPerView: 6,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    });
  }
})





