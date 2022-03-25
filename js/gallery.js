let root = document.documentElement;
var width = 0
var height = 0
var left = 0
var top = 0
$('.img').bind('click', (e) => {
  if(!e.target.classList.contains('clicked')) {
    var img = $('.img'+e.target.classList[1].substring(3))
    console.log(e.target.classList[1].substring(3), img)
    width = img.width()
    height = img.height()
    left = img.position().left
    top = img.position().top
    console.log(img.position())
    root.style.setProperty('--img-top', img.position().top + "px");
    root.style.setProperty('--img-left', img.position().left + "px");
    root.style.setProperty('--img-width', width + "px");
    root.style.setProperty('--img-height', height + "px");
    e.target.classList.toggle('clicked')
  } else {
    e.target.classList.toggle('clicked')
    e.target.classList.toggle('unclicked')
    setTimeout(()=>{
      e.target.classList.toggle('unclicked')
    }, 500)
  }
})