window.addEventListener('DOMContentLoaded', function() {
  // Check the screen size on page load
  var screenWidth = window.innerWidth || document.documentElement.clientWidth;

  if (screenWidth = 325) {
    // Add the class for larger screens
    var element = document.getElementById('my-element');
    element.classList.add('fz-sm');
    var element = document.getElementById('my_paragraph');
    element.classList.add('fe-sm');
    var element = document.getElementById('my_link');
    element.classList.add('fe-sm');
    var spans = document.querySelectorAll('span.small-spans');
        spans.forEach(function(span) {
          span.classList.add('sm-span');
        });
    var spans = document.querySelectorAll('span.small-sizeee');
        spans.forEach(function(span) {
          span.classList.add('small-size');
        });
  }
});