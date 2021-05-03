$(function(){
    $(".langin").click(function(){
    $(this).stop().hide();
    $(".langout").stop().show();
    });            
    
    $(".langout").click(function(){
    $(this).stop().hide();
    $(".langin").stop().show();
    });

    $(".langout").mouseleave(function(){
        $(".langout").stop().hide();
        $(".langin").stop().show();
    });

    // 랭귀지

    $(document).ready( function() {
        $(".search_btn").click(function() {
            $(".gnb_top").toggle('fast');
            // (this.className == 'on') 
        });
      });

    // $(document).ready( function() {
    //     $(".search_btn").click(function() {
    //         $(".gnb_top").show();
    //         // $(".search_btn span").addClass('.on');});
    //         // $(".search").css({"background":"url(../img/close-white-48dp.svg) no-repeat center center"});
    //         // $(".search").css("display","none") });		
        
    //     $(".gnb_top").click(function() { 
    //         $(this).hide();        
    //         // $(".search_btn span").removeClass('.on');
    //     });
    //   });

    //   (this.className == 'on') 

    //   $(".search_btn").click(function() {
    //     $(".gnb_top").css("display","none");
    //     $(".search_btn span").removeClass('on'); 
    //     }, function() { 
    //      $(".gnb_top").show();
    //      $(".search_btn span").toggleClass('on');
    //     });

//     if ( $(".search_btn span").hasClass('on') ) { 
//         $(".search_btn span").removeClass('on'); 
//  } else { $(".search_btn span").addClass('on'); } });
      
      
    //검색창


    $(".ham_btn").click(function(){
        $(".gnb").stop().slideDown();
        $(".menu01_up").mouseover(function(){
            $("#menu01").stop().hide();
        });
    });

    $(".close").click(function(){
        $(".gnb").slideUp()
    });

    $(window).resize(function(){
        var width = window.outerWidth;
        if (width > 1120 ){
            $(".menu01_up").mouseover(function(){
                $("#menu01").stop().show();
                $(".gnb").stop().css('display','block'); 
            });   
        } else if (width < 1120 ){
            $(".gnb").stop().css('display','none'); 
            $("#menu01").stop().hide();
        }
        }); 

        
    // gnb메뉴 버튼들
   

    $(".menu01_up").mouseover(function(){
        $("#menu01").stop().show();
    });

    $("#menu01").mouseleave(function(){
        $(this).stop().hide();
        $(this).css("transition","all 1s");
    });

    $("#menu01 li").click(function(){
        $("#menu01").stop().hide();
    });





     // 메뉴


    $(function(){
        $(".section.visual > .slider").bxSlider({
            auto:true,
            pager:false,
        });
    });


    //슬라이더

    $("#insta_btn").click(function(){
        $(".youtube").css("display","none");
        $(".instagram").css("display","block");
        $(this).css({'background-color': 'orange', 'color': 'white'});
        $("#youtube_btn").css({'background-color':'#eee',
        'color':'black'});
    });


    $("#youtube_btn").click(function(){
        $(".instagram").css("display","none");
        $(".youtube").css("display","block");
        $(this).css({'background-color':'orange', 'color':'white'});
        $("#insta_btn").css({'background-color':'#eee',
        'color':'black'});   
        });

    //유튜브

    $(".car1_off").mouseover(function(){
        $(this).stop().hide()
        $(".car1_on, .car_span").stop().show()
    });

    $(".car1_on").mouseleave(function(){
        $(this).stop().hide()
        $(".car1_off").stop().show()
    });

    $(".car2_off").mouseover(function(){
        $(this).stop().hide()
        $(".car2_on").stop().show()
    });

    $(".car2_on").mouseleave(function(){
        $(this).stop().hide()
        $(".car2_off").stop().show()
    });

    $(".car3_off").mouseover(function(){
        $(this).stop().hide()
        $(".car3_on").stop().show()
    });

    $(".car3_on").mouseleave(function(){
        $(this).stop().hide()
        $(".car3_off").stop().show()
    });
    

});

    // 슬라이더

//     $(function(){
//         $(".car1_off").click(function(){
//             $(this).stop().hide();
//             $(".car1_on").stop().show();
//             });
//     });
// });

// 반응형웹에서 bxSlider 를 사용할때 화면 크기에 따라 슬라이더 자체를 감췄다가 보여주는 경우 슬라이더가 다시 표시되지 않는 경우가 있습니다. 이때는 bxSlider의 reloadSlider(); 메소드를 호출해 주면 다시 보여집니다.

 

// $(document).ready(function() {
//     var slider = $('.bxslider').bxSlider();
    
//     var mql = window.matchMedia("screen and (max-width: 768px)");
//     mql.addListener(function(e) {
//         if(!e.matches) {
//             slider.reloadSlider();
//         }
//     });











        // $('.menu01').slideDown(function(){
        //     $(".container .shadow").css("display","block");
        // });

        // $(".menu01").slideUp(function(){ 
        //     $(".container .shadow").css("display","none");
        // });



    // $( "#tesetdiv" ).css( {'background-color':
    // 'red', color:'blue' } ); 

    // $( “#testdiv” ).css( 'background-color', 'red' )
    // .css( 'color', 'blue' );