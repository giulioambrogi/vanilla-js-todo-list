document.addEventListener("DOMContentLoaded", function () {

  var goatTriggerBtn = document.querySelector('#cats-cta');
  var imageContainer = document.querySelector('.img-container')

  var URL = '/random-image'

  goatTriggerBtn.addEventListener('click', function(){
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.send();

    xhr.onload = function(){
      var imageUrl = JSON.parse(xhr.response).file;
      imageContainer.innerHTML = null;
      var imageElement = document.createElement('img')
      imageElement.src = imageUrl;
      imageElement.style = "width:100%;"
      imageContainer.appendChild(imageElement)
    }

    xhr.onerror = function() {
      alert("Request for goat image has failed");
    };

  })
});
