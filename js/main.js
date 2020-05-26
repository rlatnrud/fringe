$(function(){
    $(' #main_gnb .depth2').hide();

    $('#main_gnb .depth1 > li').hover(
        function(){
            $(this)
                .children('.depth2')
                .stop().fadeIn();
        },
        function(){
            $('#main_gnb .depth2').stop().fadeOut();
        }
    )
    
});

$(function(){
    $('.info').css('display', 'none')
    $('#content .left a').css('display', 'none')

    $('.info').eq(0).css('display', 'block')
    $('#content .left a').eq(0).css('display', 'block')

    $('.title a').on('click', function(){
        var cat_name = $(this).attr('class');
        var i = $(this).index()
        console.log(cat_name , $(this).index())
        $('.info').css('display', 'none')
        $('#content .left a').css('display', 'none')

        $('.info').eq(i).css('display', 'block')
        $('#content .left a').eq(i).css('display', 'block')

        $('.title > a').removeClass('selected');
        $(this).addClass('selected');

        return false;
    });
});