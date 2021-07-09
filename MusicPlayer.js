let title=document.querySelector('#title');
let x=document.querySelector('.audio');
let cover=document.querySelector('img');
let prev=document.querySelector('#prev');
let play=document.querySelector('#playBtn');
let next=document.querySelector('#next');



let songs=["despa","beliver","silsils"];

let currentSong=1;

function loadSong(song){
    cover.src= `image/${song}.jpg`;
    x.src= `music/${song}.mp3`;
}

loadSong(songs[currentSong]);

function playSong(){
    if(play.classList.contains("playing")){
        play.classList.remove("playing");
        cover.style.animationPlayState="paused";
        x.pause();
    }else{
        
        play.classList.add("playing");
        
        x.play();
        cover.style.animationPlayState="running";
    }
}

function pauseSong(){
    x.pause();
}

play.addEventListener('click',playSong);