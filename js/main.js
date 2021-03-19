$(document).ready(function(){
    
    $('#app').vide({
        mp4: "./videos/video.mp4",
        webm: "./videos/video.webm",
        ogv: "./videos/video.ogv",
        poster: "./img/cover-image.jpg"
    });
    $('#myBlock').vide('extended path as a string', 'options as a string');
});