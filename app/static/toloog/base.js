$(function(){
    $('.menu-icon-list').each(function(index){
        if($(this).find("ul:eq(0)").find('li').find('a').hasClass("active-page")){
            $(this).find('a').addClass('active')
        }
    })
    $('#toggle_mobile_search').on('click',function(){
        $('form#search_form').css({'display':'block'})
    })
    $('form#search_form button').on('click',function(){
        $('form#search_form').css({'display':'none'})
    })
})