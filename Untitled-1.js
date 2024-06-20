// console.log("welcome to spotify")
// //declare variables
// let songIndex = 0;
// let audioElement = new Audio('songs1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar =document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let songItems = Array.from(document.getElementsByClassName('songItem'));
// let songs = [
//     {songName:"pardadaari" , filePath:"songs1.mp3" , coverPath:"covers1.jpg"},
//     {songName:"Ilzaam" , filePath:"songs2.mp3" , coverPath:"covers2.jfif"},
//     {songName:"Aaja we mahiya" , filePath:"songs3.mp3" , coverPath:"covers3.jpg"},
//     {songName:"Baarishein" , filePath:"songs4.mp3" , coverPath:"covers4.jfif"},
//     {songName:"Rangi saari" , filePath:"songs5.mp3" , coverPath:"covers5.jfif"},
//     {songName:"Mi Amor" , filePath:"songs6.mp3" , coverPath:"covers6.jpg"},
//     {songName:"phero na nazariya" , filePath:"songs7.mp3" , coverPath:"covers7.jpg"},
    
// ]


// listentoevent

// songItems.forEach((element , i)=>{
//     console.log(element , i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
    
// })

// Handle play/pause click

// masterPlay.addEventListener('click', () =>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove("fa-circle-play");
//         masterPlay.classList.add("fa-circle-pause");
//     }
//    else{
//         audioElement.pause()
//         masterPlay.classList.remove("fa-circle-pause");
//         masterPlay.classList.add("fa-circle-play");
//     }
// })

// audioElement.addEventListener('timeupdate' , () =>{
//     console.log('timeupdate')
//     //update seekbar
//     let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
//     myProgressBar.value = progress;
// })  

// myProgressBar.addEventListener('change',() =>{
//     audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
// })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//     })
// }


// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
//     element.addEventListener('click' , (e) =>{
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.src = `songs${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
        
//     })
// })


// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-circle-pause');

// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `songs${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-circle-pause');
// })


//html part
// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Spotify - Feel The Music</title>
//     <link rel="stylesheet" href="spotify.css">
// </head>
// <body>
//     <nav>
//         <ul>
//             <li id="0" class="brand"><img src="logo.png" alt="spotify">Spotify</li>
//             <li>Home</li>
//             <li>About Us</li>
//         </ul>
//     </nav>

//     <div class="container">
        
//         <div class="songList">
//             <h1>My Favourites - Peace</h1>
//            <div class="songListContainer">
//             <div class="songItem">
//                 <img src="covers1.jpg" alt="1">
//                 <span>Parda daari</span>
//                 <span class="songListPlay"><span class="timeStamp">05:34 <i id="0" class="fa-regular fa-circle-play"></i></span></span>
//             </div>
//             <div class="songItem">
//                 <img src="covers1.jpg" alt="1">
//                 <span>Parda daari</span>
//                 <span class="songListPlay"><span class="timeStamp">05:34 <i id="1" class="fa-regular fa-circle-play"></i></span></span>
//             </div>
//             <div class="songItem">
//                 <img src="covers1.jpg" alt="1">
//                 <span>Parda daari</span>
//                 <span class="songListPlay"><span class="timeStamp">05:34 <i id="2" class="fa-regular fa-circle-play"></i></span></span>
//             </div>
//             <div class="songItem">
//                 <img src="covers1.jpg" alt="1">
//                 <span>Parda daari</span>
//                 <span class="songListPlay"><span class="timeStamp">05:34 <i id="3" class="fa-regular fa-circle-play"></i></span></span>
//             </div>
//             <div class="songItem">
//                 <img src="covers1.jpg" alt="1">
//                 <span>Parda daari</span>
//                 <span class="songListPlay"><span class="timeStamp">05:34 <i id="4" class="fa-regular fa-circle-play"></i></span></span>
//             </div>
//             <div class="songItem">
//                 <img src="covers1.jpg" alt="1">
//                 <span>Parda daari</span>
//                 <span class="songListPlay"><span class="timeStamp">05:34 <i id="5" class="fa-regular fa-circle-play"></i></span></span>
//             </div>
//             <div class="songItem">
//                 <img src="covers1.jpg" alt="1">
//                 <span>Parda daari</span>
//                 <span class="songListPlay"><span class="timeStamp">05:34 <i id="6" class="fa-regular fa-circle-play"></i></span></span>
//             </div>
           
           
//            </div>
//         </div>
//         <div class="songBanner"></div>
//     </div>

//     <div class="bottom">
//         <input type="range" name="range" id="myProgressBar" >
//         <div class="icons">
//             <i id="0" class=" fa-2x fa-solid fa-backward" id="previous"></i>
//             <i id="0" class="fa-2x fa-solid fa-circle-play" id="masterPlay"></i>
//             <i id="0" class="fa-2x fa-solid fa-forward" id="next"></i>
//         </div>
//         <div class="songInfo">
//             <img src="5uwq.gif" width="32px" alt="2" id="gif"> Parda Daari - Dhvani bhanushali , javed ali
//         </div>
//     </div>
//     <script src="spotify.js"></script>
//     <script src="https://kit.fontawesome.com/78fcd30a32.js" crossorigin="anonymous"></script>
// </body>
// </html>


//  -->

