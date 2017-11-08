$(document).ready(function () {

      	$(window).scroll(function() {
		    if ($(document).scrollTop() > 200) {
		        $('.nav').addClass("hidden");
		    } else {
		        $('.nav').removeClass("hidden");
		    }
		});

        var carousel = $("#carousel").waterwheelCarousel({
          flankingItems: 3,
          movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
          },
          movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
          },
          movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
          },
          movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
          },
          clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
          }
        });

        $('#prev').bind('click', function () {
          carousel.prev();
          return false
        });

        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });

        $('#reload').bind('click', function () {
          newOptions = eval("(" + $('#newoptions').val() + ")");
          carousel.reload(newOptions);
          return false;
        });

      });


// ############ Page scrool #########//

$(".page_scroll").click(function(){

    $('html,body').animate({

      scrollTop: $($(this).attr('href')).offset().top

    },'slow');
  })


  // ########### Card switching ########//

        $("#showWho").click(function(){

        $("#WHO").addClass("show");
        $("#WHO").removeClass("hide");
        $("#LOKSABHA").addClass("hide");
        $("#LOKSABHA").removeClass("show");
        $("#UNHRC").addClass("hide");
        $("#UNHRC").removeClass("show");

    })
    $("#showLoksabha").click(function(){

      $("#WHO").addClass("hide");
        $("#WHO").removeClass("show");
        $("#LOKSABHA").addClass("show");
        $("#LOKSABHA").removeClass("hide");
        $("#UNHRC").addClass("hide");
        $("#UNHRC").removeClass("show");
      
    })
    $("#showUnhrc").click(function(){

      $("#WHO").addClass("hide");
        $("#WHO").removeClass("show");
        $("#LOKSABHA").addClass("hide");
        $("#LOKSABHA").removeClass("show");
        $("#UNHRC").addClass("show");
        $("#UNHRC").removeClass("hide");
      
    })
