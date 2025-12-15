 $(window).on('scroll', function(){
          var scrollTop = $(window).scrollTop();
          var bgPosition = scrollTop / 2; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）
          if(bgPosition){
            $('.particle1').css('background-position', '115% -'+ (scrollTop / 2) + 'px');
               $('.particle2').css('background-position', '-20% -'+ (scrollTop / 3) + 'px');
               $('.particle3').css('background-position', '55% -'+ (scrollTop / 5) + 'px');
          }
        });
    $.scrollify({
    section : ".scroll",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: false,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
      

      
    //以下、ページネーション設定
        before:function(i,panels) {
           if(i == 0){
                        $('.sv').removeClass('on');
                    }
                    else{
                        $('.sv').addClass('on');
                }
        var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".scroll").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
        activeClass = "";
        if(i===$.scrollify.currentIndex()) {
        activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
        pagination += "</ul>";

        $(".sv").append(pagination);//はじめのエリアにページネーションを表示
        $(".date").on("click",$.scrollify.move);
        }

});


$('body').on('click', '.menu-btn', function () {
     $.scrollify.disable();
    

});
    
    
 $('body').on('click', '.menu-btn.close', function () {
     $.scrollify.enable();

});