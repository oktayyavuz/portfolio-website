$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
   alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
letter_count = 0;
el = $("#hacker");
word = el.html().trim();
finished = false;

el.html("");
for (var i = 0; i < word.length; i++) {
  el.append("<hacker>"+word.charAt(i)+"</span>");
}

setTimeout(write, 50);
incrementer = setTimeout(inc, 800);

function write() {
  for (var i = letter_count; i < word.length; i++) {
    var c = Math.floor(Math.random() * 36);
    $("hacker")[i].innerHTML = alphabet[c];
  }
  if (!finished) {
    setTimeout(write, 50);
  }
}

function inc() {
  $("hacker")[letter_count].innerHTML = word[letter_count];
  $("hacker:eq("+letter_count+")").addClass("glow");
  letter_count++;
  if (letter_count >= word.length) {
    finished = true;
    setTimeout(reset, 5000);
  } else {
    setTimeout(inc, 400);
  }
}

function reset() {
  letter_count = 0;
  finished = false;
  setTimeout(inc, 800);
  setTimeout(write, 50);
  $("hacker").removeClass("glow");
}

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
  sosmed.addEventListener("mouseenter", () => {
    sosmed.classList.remove("ph");
    sosmed.classList.add("ph-fill");
  });

  sosmed.addEventListener("mouseleave", () => {
    sosmed.classList.remove("ph-fill");
    sosmed.classList.add("ph");
  });
});