//themes
let checkbox_loaders = document.querySelector('input[name=loaders]');
let checkbox_default = document.querySelector('input[name=default]');
let checkbox_dark = document.querySelector('input[name=dark]');
let checkbox_cavs = document.querySelector('input[name=cavs]');

var def = 1, dark = 2, cavs = 3;


function onload(){
  $(".acc-mobile").css("display", "none");
  loader = localStorage.getItem('loader');
  theme = localStorage.getItem('theme');
  loader = JSON.parse(loader);
  theme = JSON.parse(theme);
  if (loader == null) {
    checkbox_loaders.checked = true;
  }
  if (loader == 1) {
    checkbox_loaders.checked = true;
  }
  if (loader == 0) {
    checkbox_loaders.checked = false;
  }
  if (theme == null) {
    checkbox_default.checked = true;
    checkbox_default.disabled = true;//initialize disabled
  }
  if (theme == 1 && theme != null) {
    document.documentElement.setAttribute('data-theme', 'default')
    checkbox_default.checked = true;
    checkbox_default.disabled = true;
    checkbox_dark.disabled = false;
    checkbox_cavs.disabled = false;
    checkbox_cavs.checked = false;
    checkbox_dark.checked = false;
  }
  if (theme == 2 && theme != null) {
    document.documentElement.setAttribute('data-theme', 'dark')
    checkbox_dark.checked = true;
    checkbox_dark.disabled = true;
    checkbox_default.disabled = false;
    checkbox_cavs.disabled = false;
    checkbox_cavs.checked = false;
    checkbox_default.checked = false;
  }
  if (theme == 3 && theme != null) {
    document.documentElement.setAttribute('data-theme', 'cavs')
    checkbox_cavs.checked = true;
    checkbox_cavs.disabled = true;
    checkbox_default.disabled = false;
    checkbox_dark.disabled = false;
    checkbox_default.checked = false;
    checkbox_dark.checked = false;
  }
}

checkbox_default.addEventListener('change', function() {
  if(this.checked){
    transition();
    document.documentElement.setAttribute('data-theme', 'default')
    checkbox_default.disabled = true;
    checkbox_dark.disabled = false;
    checkbox_cavs.disabled = false;
    checkbox_cavs.checked = false;
    checkbox_dark.checked = false;
    localStorage.setItem('theme', def);
  }
});

checkbox_dark.addEventListener('change', function() {
  if(this.checked){
    transition();
    document.documentElement.setAttribute('data-theme', 'dark')
    checkbox_dark.disabled = true;
    checkbox_default.disabled = false;
    checkbox_cavs.disabled = false;
    checkbox_cavs.checked = false;
    checkbox_default.checked = false;
    localStorage.setItem('theme', dark)
  }
});

checkbox_cavs.addEventListener('change', function() {
  if(this.checked){
    transition();
    document.documentElement.setAttribute('data-theme', 'cavs')
    checkbox_cavs.disabled = true;
    checkbox_default.disabled = false;
    checkbox_dark.disabled = false;
    checkbox_default.checked = false;
    checkbox_dark.checked = false;
    localStorage.setItem('theme', cavs)
  }
});
let transition = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
  } ,500)
}

//variables for menu overlay
var b, c, d, e, f, g, h, set;
b = c = d = e = f = g = h = set = "none";
var a = "block";


//menu-buttons
function show_home() {
  if (a == "block") {
    $('.menu-button').toggleClass("backdrop");
    $('.menu-button').toggleClass("click");
    $('.sidebar').toggleClass("show");
    document.getElementById("overlay-side").style.display = "none";
  }if (checkbox_loaders.checked == false && a == "none"){
    show_home_page();  
  }if (checkbox_loaders.checked == true && a == "none"){
    setTimeout(show_home_page, 1500);
    document.getElementById("overlay").style.display = "block";
  }
}
function show_home_page() {
  a = "block";
  b = c = d = e = f = g = h = set = "none";
  document.getElementById("overlay-side").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  $(".section-3").css("display", "none");
  $(".section-1").css("display", "block");
  $(".section-9").css("display", "none");
  $(".acc-mobile").css("display", "none");
  $('.menu-button').toggleClass("backdrop");
  $('.menu-button').toggleClass("click");
  $('.sidebar').toggleClass("show");
}
function show_grade() {
  if (b == "block") {
    $('.menu-button').toggleClass("backdrop");
    $('.menu-button').toggleClass("click");
    $('.sidebar').toggleClass("show");
    document.getElementById("overlay-side").style.display = "none";
  }if (checkbox_loaders.checked == false && b == "none"){
    show_grade_page();  
  }if (checkbox_loaders.checked == true && b == "none"){
    setTimeout(show_grade_page, 1500);
    document.getElementById("overlay").style.display = "block";
  }
}
function show_grade_page() {
  b = "block";
  a = c = d = e = f = g = h = set = "none";
  document.getElementById("overlay-side").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  $(".section-1").css("display", "none");
  $(".section-3").css("display", "block");
  $(".section-9").css("display", "none");
  $(".acc-mobile").css("display", "block");
  $('.menu-button').toggleClass("backdrop");
  $('.menu-button').toggleClass("click");
  $('.sidebar').toggleClass("show");
  var pos = window.matchMedia("(max-width: 800px)")
  checkPosition(pos)
  pos.addListener(checkPosition)
}
function goto_settings() {
  if (set == "block"){
    $('.menu-button').toggleClass("backdrop");
    $('.menu-button').toggleClass("click");
    $('.sidebar').toggleClass("show");
    document.getElementById("overlay-side").style.display = "none";
  }if (checkbox_loaders.checked == true && set == "none"){
    setTimeout(show_settings, 1500);
    document.getElementById("overlay").style.display = "block";
  }if (checkbox_loaders.checked == false && set == "none"){
    show_settings(); 
  }
}
function show_settings(){
  in_home = true;
  set = "block";
  a  = b = c = d = e = f = g = h = "none";
  document.getElementById("overlay-side").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  $(".section-1").css("display", "none");
  $(".section-3").css("display", "none");
  $(".section-9").css("display", "block");
  $(".acc-mobile").css("display", "none");
  $('.menu-button').toggleClass("backdrop");
  $('.menu-button').toggleClass("click");
  $('.sidebar').toggleClass("show");
}
function close_nav() {
  $('.menu-button').toggleClass("click");
  $('.sidebar').toggleClass("show");
  $('.menu-button').toggleClass("backdrop");
  document.getElementById("overlay-side").style.display = "none";
}
//check width
function checkPosition(pos) {
    if (pos.matches) {
        $(".acc-mobile").css("display", "block");
        $(".section-3-padding").css("display", "none");
    } else {
        $(".acc-mobile").css("display", "none");
        $(".section-3-padding").css("display", "block");
    }
}
var pos = window.matchMedia("(max-width: 800px)")
checkPosition(pos) // Call listener function at run time
pos.addListener(checkPosition) // Attach listener function on state changes
//accordion
onload();
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activee");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
var ov_side = document.getElementById("overlay-side");
//navigation-menu
$('.menu-button').click(function(){
  $(this).toggleClass("click");
  $('.sidebar').toggleClass("show");
  $('.menu-button').toggleClass("backdrop");
  if (ov_side.style.display == "block") {
    ov_side.style.display = "none";
  }else{
    ov_side.style.display = "block";
  }
  
});
  $('.sidebar ul li').click(function(){
  $(this).addClass("active").siblings().removeClass("active");
});
//popover
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});



/******************************************************

                   ADMIN PAGE PLAN

**POST & DELETE ANNOUNCEMENTS 
**INPUT GRADES
**VIEW ENROLLMENT LISTING
**VIEW FACULTY EVALUATION 
**VIEW APPLICATIONS FOR GRADUATION
**SETTING DARK THEME/DEFAULT THEME ---------OK
**SET SCHEDULE/CREATING SCHEDULE 

                  OTHER FEATURES

**POWERFUL SEARCH ENGINE
**SET SCHEDULE FOR SPECIFIC OR BY SECTION/COURSE
**MANAGE ACTIVITIES

*******************************************************/
