document.addEventListener("DOMContentLoaded", function () {
  
  function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .border = '3px dashed pink';
  }

  var draggables = document.querySelectorAll('.draggable')

  draggables.forEach(element => {
    element.addEventListener('dragstart', onDragStart)
  });
  
  
  
  var dropArea = document.querySelector('.drop-area');
  
  dropArea.addEventListener('dragover', function(e){
    e.preventDefault()
    //console.log('dragover', e)

  })

  dropArea.addEventListener('drop', function(e){
    console.log('drop', e.dataTransfer.getData())
    // alert('dropped')
  })
});
