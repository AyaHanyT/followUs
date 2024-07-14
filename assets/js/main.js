$("#toggler").click(function () {
  if ($(window).width() <= 500) {
    mobileSize()
  } else {
    openNav()
  }
})

function openNav() {
  document.getElementById("mySidenav").style.cssText =
    "margin-left : 0 ;"
}

function closeNav() {
  document.getElementById("mySidenav").style.cssText =
    "margin-left : -300px ; border-right: none"
}

function mobileSize() {
  document.getElementById("mySidenav").style.cssText =
    "margin-left : 0 ; width : 100vw"
}
