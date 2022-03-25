var menu = $('#menu')
var counter = 0
menu.bind('click', (e) => {
  if(e.target.nodeName.toLowerCase() == 'a') return;
  console.log(menu[0])
  if(!counter) { 
    toggleMenu(menu)
    menu.toggleClass('clicked')
    $('.main-container').toggleClass('clicked')
    counter++
  }
  else {
    toggleMenu(menu)
    menu.toggleClass('clicked')
    menu.toggleClass('unclicked')

    $('.main-container').toggleClass('clicked')
    $('.main-container').toggleClass('unclicked')
  }
})

const menuBtnTemplate = (name) => {
  if(name == 'Home') return `<a href="index.html" class="menu-btn">${name}</a>`
  return `<a href="${name.toLowerCase()}.html" class="menu-btn">${name}</a>`
}

const toggleMenu = (menu) => {
  if(!menu.hasClass('clicked'))
    setTimeout(() => {
      showMenu()
    }, 1400)
  else
    hideMenu()
}

const showMenu = () => {
  menu.empty()
  menu.append(menuBtnTemplate('Home'))
  menu.append(menuBtnTemplate('Gallery'))
}

const hideMenu = () => {
  menu.html('☰')
}