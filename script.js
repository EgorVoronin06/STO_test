document.addEventListener("DOMContentLoaded", function() {
    console.log("Сайт загружен!");
  });
  
  document.addEventListener('DOMContentLoaded', function() { /////попытки добавить видео на страничку:(
    
    var video = document.getElementById('myVideo');

    
    video.addEventListener('play', function() {
        console.log('Видео началось');
    });

    video.addEventListener('pause', function() {
        console.log('Пауза');
    });

    video.play();
});
