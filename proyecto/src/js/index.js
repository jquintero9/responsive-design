// $(document).ready(function() {
//   $('body').addClass('js');
//   var $menu = $('#menu'),
//     $menulink = $('.menu-link');
//
// $menulink.click(function() {
//   $menulink.toggleClass('active');
//   $menu.toggleClass('active');
//   return false;
// });});

window.addEventListener("load", function() {
  var menu = document.querySelector("#menu");
  var menuLink = document.querySelector(".menu-link");
  var itemsMenu = document.querySelectorAll("#menu a");
  document.querySelector("body").classList.add("js");

  function toggleClass(element, cls) {
    if (!element.classList.contains(cls)) {
      element.classList.add(cls);
    }
    else {
      element.classList.remove(cls);
    }
  }

  menuLink.addEventListener("click", function () {
    toggleClass(this, "active");
    toggleClass(menu, "active");
    return false;
  });

  for (var i = 0; i < itemsMenu.length; i++) {
    itemsMenu[i].addEventListener("click", function () {
      toggleClass(menuLink, "active");
      toggleClass(menu, "active");
    });
  }
});

var mq48 = window.matchMedia("(min-width: 48em)");
var mediaContainer = document.querySelector("#logos-video");

function mediaQueries(mediaQuery) {
  if (mediaQuery.matches) {
    //Mostrar un iframe con un video de youtube.
    mediaContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/-LqZt5Z-Tcg" frameborder="0" allowfullscreen></iframe>';
  }
  else {
    //Mostrar un link a un video de youtube.
    mediaContainer.innerHTML = '<a class="btn-video ph8 sm5 block p_5 f1_25" href="https://www.youtube.com/watch?v=-LqZt5Z-Tcg" target="_blank">Ver video</a>';
  }
}

mediaQueries(mq48);
mq48.addListener(mediaQueries);

// $(document).ready(function() {
//   $('body').addClass('js');
//   var $menu = $('#menu'),
//       $menulink = $('.menu-link');
//
//   $menulink.click(function() {
//     $menulink.toggleClass('active');
//     $menu.toggleClass('active');
//     return false;
//   });});