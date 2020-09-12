//Animate Smooth Scroll To Photos
$('#view-work').on('click', function() {
    const images = $('#images').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 900);
});

//Animate Smooth Scroll to Get In Touch
$('#contact').on('click', function() {
    const images = $('#contact-us').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 500);
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}