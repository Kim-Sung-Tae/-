
window.onload = function(){

    setInterval(function(){
        $('.slidewrap').animate({'marginTop':'-300px'}, function(){
             $('.slide:first').appendTo('.slidewrap')
             $('.slidewrap').css({'marginTop':'0px'})
        })
    },1000)
}

