/* For scrolling through YT thumbnails */
$(document).ready(function () {
  $('.vid-item').each(function(index){
    $(this).on('click', function(){
      var current_index = index+1;
      $('.vid-item .thumb').removeClass('active');
      $('.vid-item:nth-child('+current_index+') .thumb').addClass('active');
    });
  });
});

/* Animation to scroll from Introduction to Contact Me */
$('#contactme').click(function() {
  $('html,body').animate({
      scrollTop: $('#footer').offset().top},
      'slow');
});

/* Animation to count up for video statistics. */
var targetNode = document.getElementById('videos');
var observer = new MutationObserver(function(){
    if(targetNode.style.display != 'none'){
      $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 5000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
      
        });  
      });
    }
});
observer.observe(targetNode, { attributes: true, childList: true });

