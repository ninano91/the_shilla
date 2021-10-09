$(document).ready(function(){
    $(".h_left li").click(function(){
        $(this).find("i").toggleClass("fa-square-o").toggleClass("fa-check-square-o");
    })
    $('.main_slider').bxSlider({
        auto: true,
        nextSelector: '.next', //다음 버튼 지정
        prevSelector: '.prev', //이전 버튼 지정
        nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>', //다음 버튼 요소에 ‘next’ 텍스트 삽입 , 텍스트가 필요 없다면 text-indent로 텍스트 숨김
        prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>', //이전 버튼 요소에 ‘prev’ 텍스트 삽입
        pagerCustom: '.pager',
    });
    
    // $("section sup").hover(function(){
    //     $(this).find("i").addClass("fa-spin")
    // },function(){
    //     $(this).find("i").removeClass("fa-spin");
    // })

});