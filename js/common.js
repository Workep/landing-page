// images comparison
document.addEventListener('DOMContentLoaded', domReady);
  function domReady() {
      new Dics({
          container: document.querySelectorAll('.b-dics')[0],
          textPosition: 'top',

      });
}


$(document).ready(function(){

$(".collaboration_list_index ul").mouseover(function(){
  $(".collaboration_allim_single").addClass("result_hover");
});

$(".collaboration_list_index ul li .collaboration_person").hover(function(){
  var datasrc = $(this).attr("data-src");
  $(".opbox").css({"opacity": "0.15", "z-index": "-1"});
  $(".team_guest_box2").css({"opacity":"0"});
  $(datasrc).css({"opacity": "1", "z-index": "1"});
});


// fix menu bar
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll > 20) {
        $(".main_head").addClass("fixed");
    }
    else
       $(".main_head").removeClass("fixed");
});

// $(".main_head .navbar-toggler").click(function() {     
//     if ($(this).hasClass("active")){
//        $(".main_head").removeClass("bgcolor-white");
//        $(this).removeClass("active");
//     }
//     else
//     {
       
//        $(".main_head").addClass("bgcolor-white");
//         $(this).addClass("active");
//     }
// });



if($(window).width() < 1025)
{
    $( "<span class='clickD'></span>" ).insertAfter(".main_head.navbar-nav > li.menu-item-has-children > a");
}
 $('.main_head .navbar-nav li .clickD').click(function(e) {
    e.preventDefault();
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.removeClass('toggled');
        $this.next().hide();
    } else {
        $this.parent().parent().find('.sub-menu').removeClass('show');
        $this.parent().parent().find('.toggled').removeClass('toggled');
        $this.parent().parent().find('.sub-menu').hide();
        $this.next().toggleClass('show');
        $this.toggleClass('toggled');
        $this.next().show();
    }
});

$('html').click(function(){
    $('.main_head .navbar-nav li .clickD').removeClass('toggled');
});
  $(document).click(function(){
     $('.main_head .navbar-nav li .clickD').removeClass('toggled');
});
  $('.main_head .navbar-nav').click(function(e){
  e.stopPropagation();
});








// slick slider


$('.indstr_love_us_slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



$('.google_quick_slider_content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
    autoplay: true,
  autoplaySpeed: 4000,
  asNavFor: '.google_quick_slider_nav'
});

$('.google_quick_slider_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.google_quick_slider_content',
  dots: false,
  arrows: true,
  centerMode: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  focusOnSelect: true,
  responsive: [
      {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 399,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
});




$('.anykind_team_slider_for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
    autoplay: true,
  autoplaySpeed: 4000,
  asNavFor: '.anykind_team_slider_nav'
});

$('.anykind_team_slider_nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.anykind_team_slider_for',
  dots: false,
  arrows: false,
  centerMode: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});

// 22.7.2019

$('.foundation_sec_slider_new .foundation_sec_slider_for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 481,
      settings: {
        arrows: false
      }
    }
  ],
  asNavFor: '.foundation_sec_slider_new .foundation_sec_slider_nav'
});

$('.foundation_sec_slider_new .foundation_sec_slider_nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.foundation_sec_slider_new .foundation_sec_slider_for',
  dots: false,
  arrows: false,
  centerMode: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }

  ]
});




$('.competitors-testimonial-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});



$('.syncs_auto_content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
   autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: '.syncs_auto_list > ul'
});

$('.syncs_auto_list > ul').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.syncs_auto_content',
  dots: false,
  arrows: false,
  centerMode: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  responsive: [
       {
         breakpoint: 576,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           arrows: true,
           infinite: true,
         }
       }
     ]
});


// append arrow in comparison slider
$( "<div class='arrow'></div>" ).appendTo('.diff-approach-secB .b-dics__slider');


$('.project_progress_level_slider_mobile').slick({
  dots: false,
  infinite: false,
  speed: 300,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

if($(window).width() < 768)
{
$('.user-suite-feel-table1').slick({
  dots: false,
  infinite: false,
  speed: 300,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


$('.time_tracking_step .row').slick({
  dots: false,
  infinite: false,
  speed: 300,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


}

// end 22.7.2019



$('.foundation_sec_slider_for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  centerMode: true,
  asNavFor: '.foundation_sec_slider_nav'
});

$('.foundation_sec_slider_nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.foundation_sec_slider_for',
  dots: false,
  arrows: false,
  centerMode: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});
    


$('.addi_resouce_bot_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  asNavFor: '.addi_resouce_bot_L_slider'
});
$('.addi_resouce_bot_L_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.addi_resouce_bot_slider',
  dots: false,
  arrows: false,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 4000,
  focusOnSelect: true
});





$('.mangmnt_prdctivty_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow:3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('#carouselExampleIndicators2').carousel({
    interval: 1000,
    pause: "false",
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:false
  });




  $('.how_it_works_slides').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.user_edu_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });


 

$('.flexiblity_box_slider').slick({
  dots: true,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 4000,
  customPaging: function(slick, index) {
    var image_title = slick.$slides.eq(index).find('.flexiblity_box_con_top img').attr('src');
    return  '<img src="' + image_title + '">';
  }
});




// faq section popup
$(".faq_secbox_readmore").on('click', function() {
    var datasrc = $(this).attr("data-src");
    if($(datasrc).hasClass("show"))
    {
        $(datasrc).removeClass("show");
    }
    else{
        $(".faq_secbox_back").removeClass("show");
        $(datasrc).addClass("show");
        
    }
});

$(".closebtn").on('click', function() {
    var datasrc = $(this).attr("data-src");
    if($(datasrc).hasClass("show"))
    {
        $(datasrc).removeClass("show");
       
    }
   
});


// range slider
$('#rangetab').inputSliderRange({
            "min": 0,
            "max": 100,
            "start": 25,
            "grid": true,
             "gridCompression": true,
            "step": 25
});


// wow animation

wow = new WOW(
{
animateClass: 'animated'

}
);
 wow.init();


// slider tab
if($(window).width() > 767)
{
 $('.jwg_slider_module').jwgSlider('both', 400); 

   $('.where_we_work_tab_slider .where_we_work_tab_bot').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: '.where_we_work_tab_slider .where_we_work_list'
  });

  $('.where_we_work_tab_slider .where_we_work_list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.where_we_work_tab_slider .where_we_work_tab_bot',
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true
  });



$('.where_we_work_countryslider .where_we_work_tab_bot').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: '.where_we_work_countryslider .where_we_work_list'
  });

  $('.where_we_work_countryslider .where_we_work_list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.where_we_work_countryslider .where_we_work_tab_bot',
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true
  });


$('.google_drive_tab_con').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: '.google_drive_tab_nav'
  });

  $('.google_drive_tab_nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.google_drive_tab_con',
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: true,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 4000,
    focusOnSelect: true
  });





}


// mobile responsive tab
if($(window).width() < 768)
{
$('#horizontalTab').easyResponsiveTabs({
  type: 'default', //Types: default, vertical, accordion 
  width: 'auto', //auto or any width like 600px
  fit: true, // 100% fit in a container
  closed: false, // Start closed if in accordion view
  activate: function(event) { // Callback function if tab is switched
  var $tab = $(this);
  var $info = $('#tabInfo');
  var $name = $('span', $info);
  $name.text($tab.text());
  $info.show();
  }
  });

$('#horizontalTab1').easyResponsiveTabs({
  type: 'default', //Types: default, vertical, accordion 
  width: 'auto', //auto or any width like 600px
  fit: true, // 100% fit in a container
  closed: false, // Start closed if in accordion view
  activate: function(event) { // Callback function if tab is switched
  var $tab = $(this);
  var $info = $('#tabInfo');
  var $name = $('span', $info);
  $name.text($tab.text());
  $info.show();
  }
  });

$('#horizontalTab2').easyResponsiveTabs({
  type: 'default', //Types: default, vertical, accordion 
  width: 'auto', //auto or any width like 600px
  fit: true, // 100% fit in a container
  closed: false, // Start closed if in accordion view
  activate: function(event) { // Callback function if tab is switched
  var $tab = $(this);
  var $info = $('#tabInfo');
  var $name = $('span', $info);
  $name.text($tab.text());
  $info.show();
  }
  });

}




var count1 = 0;
$(window).scroll(function() {
  var zTop = $('.real_impact_adoption').offset().top - window.innerHeight;
  if(count1 == 0 && $(window).scrollTop() > zTop) {
    
     jQuery(function($) {
      $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now)+"%");
                }
            });
        });

        $('.count_blue').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).css("width", (Math.ceil(now))+"%");
                }
            });
        });

      });
      count1 = 1;
  }
});

var count2 = 0;
$(window).scroll(function() {
  var zTop = $('.real_impact_bot').offset().top - window.innerHeight;
  if(count2 == 0 && $(window).scrollTop() > zTop) {
    
     jQuery(function($) {
      $('.countnew').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now)+"%");
                }
            });
        });
      });
      count2 = 1;
  }
});








$(window).scroll(function() {
    var zTop = $('.missing_half_btn').offset().top - window.innerHeight;
    var zbot = $('.real_impact .section_title').offset().top - window.innerHeight;
    // var zBot = $('.missing_half_btn').offset().top + window.innerHeight;
    if($(window).scrollTop() > zTop && $(window).scrollTop() <= zbot) {
     $(".quickstartbox").addClass("active");
    }
    else {
       $(".quickstartbox").removeClass("active");
    }

  });






  var typed = new Typed('#typed', {
     strings: ["1<i class='extab start'></i> <i class='fa fa-angle-right' aria-hidden='true'></i> Start <br>2<i class='extab'></i> &lt;Everything is saved on Google Cloud&gt; <br>3<i class='extab'></i> &lt;Files are not directly saved on the Workep <span class='gap1'></span>servers, it keeps on your <br>4<i class='extab'></i> Google Drive account&gt; <br>5<i class='extab'></i> Workep as Google are aligned to the GDPR <span class='gap1'></span>Commissions. <br> 6<i class='extab'></i> Made with love <i class='fa fa-heart' aria-hidden='true'></i> <br> 7<i class='extab'></i>"],
    typeSpeed: 10,
    loop: true,
    backSpeed: 5,
    backDelay: 200,
    startDelay: 100,
  });



  $('.addon_task_progressbar_im .carousel').carousel({
    interval: 6000,
    pause: "false"
  });








});





// robo animation
/*SHADOW*/
var shadow = $('#shadow');
var shadowTween = TweenMax.fromTo(shadow, .5,{scale : 1.1},
  {
    scale : .9, 
    transformOrigin : "center",
    ease: Power1.easeOut,
    yoyo : true,
    repeat : -1
  });
/*OSCILLATION*/
var oscillation = $(".oscillation"); 
var oscillationTl = new TimelineMax({repeat:-1});
oscillationTl.to(oscillation, .5, {rotation:-7, top : -15, transformOrigin: "center",ease: Power1.easeOut})
             .to(oscillation, .5, {rotation:0, top : 0, transformOrigin: "center",ease: Power1.easeIn})
             .to(oscillation, .5, {rotation:7, top : -15, transformOrigin: "center",ease: Power1.easeOut})
             .to(oscillation, .5, {rotation:0, top : 0, transformOrigin: "center",ease: Power1.easeIn});
/*STARS*/
var stars = $(".stars"); 
var starsTl = new TimelineMax({repeat:-1, repeatDelay:1/2});
starsTl.staggerFromTo(stars, 1/2, {rotation:0, scale:0, transformOrigin: "center",ease: Power1.easeOut},{rotation:480, scale:1, transformOrigin: "center",ease: Power1.easeOut,onComplete:starsBackTL,onCompleteParams:["{self}"]},1);
function starsBackTL(el) {
  TweenMax.to(el.target, 1/2, {rotation:780, scale:0,ease: Power1.easeOut})
}

/*YELLOW CIRCLES*/
var circlesYellow = $(".circles--yellow"); 
var circlesYellowTl = new TimelineMax({repeat:-1, repeatDelay : .5})
 .set(circlesYellow, {scale : 0, transformOrigin: "center",ease: Power1.easeInOut})
 .to(circlesYellow, .25,{scale : 1, transformOrigin: "center",ease: Power1.easeInOut})
 .to(circlesYellow, .25, {scale : 0, transformOrigin: "center",ease: Power1.easeInOut})
 .to(circlesYellow, .25,{scale : 1, transformOrigin: "center",ease: Power1.easeInOut})
 .to(circlesYellow, .25, {scale : 0, transformOrigin: "center",ease: Power1.easeInOut})
 .to(circlesYellow, .25,{scale : 1, transformOrigin: "center",ease: Power1.easeInOut})
 .to(circlesYellow, .25, {scale : 0, transformOrigin: "center",ease: Power1.easeInOut});

/*PURPLE CIRCLES TOP*/
var circlePurple = $(".circle--purple__top"); 
var circlePurpleTM = new TweenMax.to(circlePurple, 1/3,{scale : 0, transformOrigin: "center",ease: Power1.easeInOut, yoyo:true, repeat:-1});

/*PURPLE CIRCLES BOTTOM*/
var circlePurpleBot = $(".circle--purple__bottom"); 
var circlePurpleBotTL = new TimelineMax({repeat:-1,repeatDelay:2/3, delay:2/3})
.set(circlePurpleBot, {scale : 0, transformOrigin: "center",ease: Power1.easeInOut})
.to(circlePurpleBot, 1/3,{scale : 1, transformOrigin: "center",ease: Power1.easeInOut})
.to(circlePurpleBot, 1/3,{scale : 0, transformOrigin: "center",ease: Power1.easeInOut})
.to(circlePurpleBot, 1/3,{scale : 1, transformOrigin: "center",ease: Power1.easeInOut})
.to(circlePurpleBot, 1/3,{scale : 0, transformOrigin: "center",ease: Power1.easeInOut});

/*PUPIL*/
var pupil = $(".pupil"); 
var pupilTL = new TimelineMax({repeat:-1, yoyo: true})
.set(pupil, {y:-1, transformOrigin: "center",ease: Power1.easeOut})
.to(pupil, .5,{y: 4, transformOrigin: "center",ease: Power1.easeOut});

/*TENTACLES*/
var tentacles = $(".tentacles");
var tentaclesTL = new TimelineMax({repeat : -1, repeatDelay: 1/3})
.staggerFromTo(tentacles, 1/3, {y:-5, transformOrigin: "center",ease: Power1.easeOut},{y:-25, transformOrigin: "center",ease: Power1.easeIn,onComplete:tentaclesBackTL,onCompleteParams:["{self}"]},1/3);
function tentaclesBackTL(el) {
  TweenMax.to(el.target, 1/3, {y:-5,ease: Power1.easeOut})
}

/*PLATE*/
var plate = $("#plate"); 
var plateTM = new TweenMax.to(plate, 1/3,{y : -7, transformOrigin: "center",ease: Power1.easeOut, yoyo:true, repeat:-1});
/*PLATE*/
var cake = $("#cake"); 
var cakeTM = new TweenMax.to(cake, 1/3,{y : -15, transformOrigin: "center",ease: Power1.easeOut, yoyo:true, repeat:-1});
/*candle*/
var candle = $("#candle"); 
var candleTM = new TweenMax.to(candle, 1/3,{y : -25, transformOrigin: "center",ease: Power1.easeOut, yoyo:true, repeat:-1});
/*flame*/
var flame = $("#flame"); 
var flameTM = new TweenMax.to(flame, 1/3,{y : -25, rotation: -60, transformOrigin: "5 10",ease: Power1.easeOut, yoyo:true, repeat:-1});
/*flame*/
var balloon = $("#balloon--group"); 
var balloonTM = new TweenMax.to(balloon, 1/3,{y : -20, transformOrigin: "5 10",ease: Power1.easeOut, yoyo:true, repeat:-1});
/*tentacleCurvedLeft*/
var tentacleCurvedLeft = $(".curved"); 
var tentacleCurvedLeftTM = new TweenMax.staggerFromTo(tentacleCurvedLeft, 1/3,{strokeDasharray:390, strokeDashoffset:200,ease: Power1.easeIn},{strokeDasharray:390, strokeDashoffset:285,ease: Power1.easeOut, yoyo:true, repeat:-1}, 1/3);





// Timetracker

countdown();
function countdown() {
    var count = -1;
    var timerId = setInterval(function() {
        var formattedNumber = ("0" + count).slice(-2);
        $(".timer1").html(formattedNumber);
        
        if(count == 15) {
            count = -1;
        }
        count++;
    }, 1000);
}












