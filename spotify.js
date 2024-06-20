//declare variables
 let songIndex = 0;
 let audioElement = new Audio('songs1.mp3');
 let masterPlay = document.getElementById('masterPlay');
 let myProgressBar =document.getElementById('myProgressBar');
 let gif = document.getElementById('gif');
 let songItems = Array.from(document.getElementsByClassName('songItem'));

 let songs = [
         {songName:"pardadaari" , filePath:"songs1.mp3" , coverPath:"covers1.jpg"},
         {songName:"Ilzaam" , filePath:"songs2.mp3" , coverPath:"covers2.jfif"},
         {songName:"Aaja we mahiya" , filePath:"songs3.mp3" , coverPath:"covers3.jpg"},
         {songName:"Baarishein" , filePath:"songs4.mp3" , coverPath:"covers4.jfif"},
         {songName:"Rangi saari" , filePath:"songs5.mp3" , coverPath:"covers5.jfif"},
         {songName:"Mi Amor" , filePath:"songs6.mp3" , coverPath:"covers6.jpg"},
         {songName:"phero na nazariya" , filePath:"songs7.mp3" , coverPath:"covers7.jpg"},
         {songName:"Kanha" , filePath:"songs8.mp3" , coverPath:"covers8.jpg"},
         {songName:"Banarasiya" , filePath:"songs9.mp3" , coverPath:"covers9.jpg"},
         {songName:"Ala Barfi" , filePath:"songs10.mp3" , coverPath:"covers10.jpg"},
         {songName:"Do Dhari Talwar" , filePath:"songs11.mp3" , coverPath:"covers11.jpg"},
         {songName:"O Rangrez" , filePath:"songs12.mp3" , coverPath:"covers12.jpg"},
         {songName:"Katiya Karun" , filePath:"songs13.mp3" , coverPath:"covers13.jpg"}
        
     ]

      songItems.forEach((element , i)=>{
            console.log(element , i);
            element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
            element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
            
         })     

 //Handle play/pause click

 masterPlay.addEventListener('click', () =>{
     if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterPlay.classList.remove("fa-circle-play");
         masterPlay.classList.add("fa-circle-pause");
         gif.style.opacity= 1;
     }
    else{
         audioElement.pause()
         masterPlay.classList.remove("fa-circle-pause");
         masterPlay.classList.add("fa-circle-play");
         gif.style.opacity= 0;
     }
 })

 audioElement.addEventListener('timeupdate' , () =>{
     console.log('timeupdate')
     //update seekbar
     let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
     myProgressBar.value = progress;
    
 })     

 myProgressBar.addEventListener('change',() =>{
         audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
     })
 
     const makeAllPlays = ()=>{
             Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
                 element.classList.remove('fa-circle-pause');
                 element.classList.add('fa-circle-play');
             })
         }
        
        
         Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
             element.addEventListener('click' , (e) =>{
                 makeAllPlays();
                 songIndex = parseInt(e.target.id);
                 e.target.classList.remove('fa-circle-play');
                 e.target.classList.add('fa-circle-pause');
                 audioElement.src = `songs${songIndex+1}.mp3`;
                 masterSongName.innerText = songs[songIndex].songName;
                 audioElement.currentTime = 0;
                 audioElement.play();
                 gif.style.opacity = 1;
                 masterPlay.classList.remove('fa-circle-play');
                 masterPlay.classList.add('fa-circle-pause');
                
             })
         })  
         
    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=13){
            songIndex = 0
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `songs${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

 })
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex = 0
        }
        else{
            songIndex -= 1;
        }
        audioElement.src = `songs${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
 })