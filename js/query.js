$(document).ready(function() {
    // If the browser type if Mozilla Firefox
    if ($.browser.mozilla && $.browser.version >= "1.8" ){ 
        
    }
    // If the browser type is Opera
    if( $.browser.opera)
    {
    // some code
    }
    // If the web browser type is Safari
    if( $.browser.safari )
    {
    // some code
    }
    // If the web browser type is Chrome
    if( $.browser.chrome)
    {
       
    }
    // If the web browser type is Internet Explorer
    if ($.browser.msie && $.browser.version <= 6 )
    {
    // some code
    }
    //If the web browser type is Internet Explorer 6 and above
    if ($.browser.msie && $.browser.version > 6)
    {
    // some code
    }

    $("hide").click(function(){
        $(".menu").hide();
    });
});