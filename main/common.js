$(document).ready(function(){
    var i = 0;
    var x = '웹퍼블리셔,\n 김현지 입니다.';
    var y = "";
    

    function typeWriter() {
        if (i < x.length) {
            $(".typing").text(y+=x[i]) ;
            i++;

            setTimeout(typeWriter, 150);
        }
    }

$(".typing").css({'font-size': '60px', 'color': 'white', 'margin':'250px 0 0 550px'})

    typeWriter();


});


$('.hom_ham').click(function(){
    $('.home_header').css('opacity','1');
});

// $(document).ready(function(){
//     $('video').fadeIn(5000); 
   
// });

setTimeout(function() { 
    $('video').stop().fadeIn(1000); 
}, 3000);



$(window).scroll(function () {

		

    var height = $(document).scrollTop();

    console.log(height);

    
    if (height > 550){
        $('.home_header').css({'background':'linear-gradient(to bottom,  rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)'});
        // $('.home a').css('color','white');
        // $('.home a:hover').css('color','orange');
    } 
    else if (height < 550){
        $('.home_header').css({'background':'linear-gradient(to bottom,  rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0)'});
        // $('.home a:hover').css('color','orange');
    }  
    


    if (height <= 1100){
        $("#skill ul li").css({'opacity':'0','transform':'translateY(-50px)','transition':'1s'});
    } 
    else {
        $('#skill ul li').css({'opacity':'1','transform':'translateY(0px)'});
    }   

    if (height >= 2000){
        // $(".haitai_black").stop().hide();
        // $(".haitai_black").stop().animate({opacity : '0'}, 400);
        $(".haitai_black").stop().css('opacity','0');
    }
    else if (height < 2000) {
        // $(".haitai_black").stop().show();
        // $(".haitai_black").stop().animate({opacity : '1'}, 100);
        $(".haitai_black").stop().css('opacity','1');
    }


    if (height >= 3000){
        // $(".haitai_black").stop().hide(); /사용불가
        // $(".samsung_black").stop().animate({opacity : '0'}, 400); /사용시 버벅거림
        $(".samsung_black").stop().css('opacity','0');
    }
    else if (height < 3000) {
        // $(".haitai_black").stop().show();
        $(".samsung_black").stop().css('opacity','1');
    }
});
    
 
    var lastScrollTop = 0, delta = 15;


    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop() /* 스크롤바 수직 위치를 가져옵니다, 괄호 안에 값(value)이 있을 경우 스크롤바의 수직 위치를 정합니다. */
        // Math.abs: 주어진 숫자의 절대값을 반환(return)합니다.
        if(Math.abs(lastScrollTop - scrollTop) <= delta) // 스크롤 값을 받아서 ~
        return; // ~ 리턴
    
        if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
            /* 화면에 나오지 않을 때, top값은 요소가 보이지 않을 정도로 사용해야함 */
            $(".home_header").css("top","-100px");
        } else {
            $(".home_header").css("top","0px");
        }
        lastScrollTop = scrollTop;
    });

    // if(window.matchMedia("(max-width: 768px)").matches == true) {
    //     $(".typing").css({'font-size': '20px', 'color': 'white', 'margin':'250px 0 0 550px'})

    // }


    $(function(){
       $(".profile_button1").click(function(){
        $(".profile_text1").css({'margin-left':'-300px','transition':'.5s'})
        $(".profile_text2").css({'padding-left':'100px','margin-left':'0','display':'block','transition':'.5s'})
        $(".profile_button1").css('color','#bbb');
        $(".profile_button2").css('color','orange');
    });

        $(".profile_button2").click(function(){
            $(".profile_text1").css({'margin-left':'50%', 'transform':'translateX(-50%)', 'transition':'.5s'})
            $(".profile_text2").css({'margin':'-200px 0 0 800px', 'transition':'.5s'})
            $(".profile_button1").css('color','orange');
            $(".profile_button2").css('color','#bbb');
        });
    });

    $(function(){
        $(".input_area input[type='text']").keypress(function(event){//input에 키가 눌리는 순간 발생한는 이벤트
            if(event.keyCode == 13){//keyCode13인 enter키가 눌리면 실행 시키는 조건문
                var _val = $(this).val(); //입력된 input의 내용을 담는 변수
                var _class = $(this).attr("class"); //입력된 input의 클래스명을 담는 변수(나 or 상대방의 메세지인지 확인)
                var _time; //입력되는 순간의 시간을 담는 변수
    
                //현재 시간을 구하기
                var _date = new Date(); //Date 객체 - pc의 전체 시간 정보
                var _hh = _date.getHours(); //시간정보중 시간(hour)만 저장
                var _mm = _date.getMinutes(); //시간정보중 분(minutes)만 저장
                var _apm = "오전";
                if(_hh > 12){
                    _apm = "오후";
                    _hh -= 12;
                }
                _time = _apm+" "+_hh+":"+_mm;
    
                //말풍선 태그에 변수를 담아서 append로 html에 동적으로 추가
                $(".chat_area").append('<div class="item '+_class+'"><div class="box"><p class="msg">'+_val+'</p><span class="time">'+_time+'</span></div></div>');
    
                //0.01초 딜레이 후 chat_area 맨 끝 item(말풍선)에게 on클래스를 추가
                setTimeout(function(){
                    $(".chat_area .item").last().addClass("on");
                },10)
    
                //입력된 input의 값을 지워줌(초기화)
                $(this).val("");
    
                //채팅창이 맨 밑으로 갈수 있게하는 스크롤 이벤트
                var _itemL = $(".chat_area .item").length;
                var _itemH = 0;
                for(var i=0; i<_itemL; i++){
                    _itemH = _itemH + $(".chat_area .item").eq(i).height() + 15;
                };
                //console.log(_itemH);
    
                $(".chat_area").stop().animate({
                    scrollTop:_itemH
                });
    
            };
        });
    });


   
