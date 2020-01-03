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