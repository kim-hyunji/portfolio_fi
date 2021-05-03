$(document).ready(function (e){
		
    $(document).on("click","img",function(){
        var path = $(this).attr('src')
        showImage(path);
    });//end click event
    
    function showImage(fileCallPath){
        
        $(".bigPictureWrapper").css("display","flex").show();
        $(".bigPictureWrapper").css("margin-top","1800px");
        
        $(".bigPicture")
        .html("<img src='"+fileCallPath+"' >")
        // .animate({width:'100%', height: '100%'}, 500);
        
      }//end fileCallPath
      
    $(".bigPictureWrapper").on("click", function(e){
          $('.bigPictureWrapper').hide();
      });
    });

    // $(function() { $('.lazy').Lazy(); });


