/* Author:
Krishna Chaitanya T (www.novogeek.com)
*/

$(document).ready(function () {
    var navLinks = $('nav a');
    navLinks.click(function () {
        navLinks.removeClass('selected');
        $(this).addClass('selected');
    });


    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();

        var target = this.hash,
	    $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 900, 'swing', function () {
            //window.location.hash = target;
        });
    });

    setTimeout(invokeSlideShare, 200);
    setTimeout(invokeFB, 300);

    function invokeSlideShare() {
        var params = { allowScriptAccess: "always" };
        var atts = { id: "player" };
        var flashvars = { doc: "thirst-upload-800x600-1215534320518707-8" };

        swfobject.embedSWF("http://static.slidesharecdn.com/swf/ssplayer2.swf"
             , "player", "600", "400", "8", null, flashvars, params, atts);

    }

    function invokeFB() {
        embedFbComments(document, 'script', 'facebook-jssdk');
    }
    function embedFbComments(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
    }

    /*
    (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
    } (document, 'script', 'facebook-jssdk'));
    */
});

