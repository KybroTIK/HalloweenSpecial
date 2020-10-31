function start() {
    let horrorTone = document.getElementById('horror')
    let startSound = document.getElementById('startSound')  
    var page1 = document.getElementById('page1')
    var page2 = document.getElementById('page2')
 var isConfirm =  confirm('ARE YOU SURE YOU WANT TO CONTINUE..?')

   if(isConfirm == true) {
    horrorTone.play()
    horrorTone.volume = 0.2;
  
    startSound.play()
  
    page1.style.display = 'none'
    page2.style.display = 'block'
   }
}


function trickHandler() {
var page1 = document.getElementById('page1')    
let trickSong = document.getElementById("trick");
let treatSong = document.getElementById("treat");
let startSound = document.getElementById('startSound')  
var page2 = document.getElementById('page2')
let trickPage = document.getElementById('trickPage')
let treatPage = document.getElementById('treatPage')
    startSound.pause()
    treatSong.pause();
    trickSong.play();
    page1.style.display = 'none'
    page2.style.display = 'none'
    treatPage.style.display = 'none'
    trickPage.style.display = 'block'

  }

 function treatHandler() {
var page1 = document.getElementById('page1')      
let trickSong = document.getElementById("trick");
let treatSong = document.getElementById("treat");
var page2 = document.getElementById('page2')
let startSound = document.getElementById('startSound')  
let trickPage = document.getElementById('trickPage')
let treatPage = document.getElementById('treatPage')

    startSound.pause()
    startSound.pause()
    trickSong.pause();
    treatSong.play();
    page1.style.display = 'none'
    page2.style.display = 'none'
    treatPage.style.display = 'block'
    trickPage.style.display = 'none'
  }

  function enterHandler(params) {
    let startSound = document.getElementById('startSound')  

    startSound.play()
  }

  function deathKin() {
     let voice1 = document.getElementById('deathKin')
     let voice2 = document.getElementById('kinKeeper') 
     let voice3 = document.getElementById('evilVamp')
     let voice4 = document.getElementById('cursedFace')
     let voice5 = document.getElementById('hellPump')
     let voice6 = document.getElementById('deathTimeKeeper')
     let voice7 = document.getElementById('fallenDemon')
     let voice8 = document.getElementById('devilRing')
     let voice9 = document.getElementById('devilElf')
     let voice10 = document.getElementById('killerWitch')
     let voice11 = document.getElementById('death')

     voice1.play()
     voice2.pause()
     voice3.pause()
     voice4.pause()
     voice5.pause()
     voice6.pause()
     voice7.pause()
     voice8.pause()
     voice9.pause()
     voice10.pause()
     voice11.pause()
    
    
    }

  function kinKeeper(params) {
    let voice1 = document.getElementById('deathKin')
    let voice2 = document.getElementById('kinKeeper') 
    let voice3 = document.getElementById('evilVamp')
    let voice4 = document.getElementById('cursedFace')
    let voice5 = document.getElementById('hellPump')
    let voice6 = document.getElementById('deathTimeKeeper')
    let voice7 = document.getElementById('fallenDemon')
    let voice8 = document.getElementById('devilRing')
    let voice9 = document.getElementById('devilElf')
    let voice10 = document.getElementById('killerWitch')
    let voice11 = document.getElementById('death')

    voice1.pause()
    voice2.play()
    voice3.pause()
    voice4.pause()
    voice5.pause()
    voice6.pause()
    voice7.pause()
    voice8.pause()
    voice9.pause()
    voice10.pause()
    voice11.pause()
  }

  function evilVamp(params) {
    let voice1 = document.getElementById('deathKin')
    let voice2 = document.getElementById('kinKeeper') 
    let voice3 = document.getElementById('evilVamp')
    let voice4 = document.getElementById('cursedFace')
    let voice5 = document.getElementById('hellPump')
    let voice6 = document.getElementById('deathTimeKeeper')
    let voice7 = document.getElementById('fallenDemon')
    let voice8 = document.getElementById('devilRing')
    let voice9 = document.getElementById('devilElf')
    let voice10 = document.getElementById('killerWitch')
    let voice11 = document.getElementById('death')

    voice1.pause()
    voice2.pause()
    voice3.play()
    voice4.pause()
    voice5.pause()
    voice6.pause()
    voice7.pause()
    voice8.pause()
    voice9.pause()
    voice10.pause()
    voice11.pause()
  }

  function cursedFace(params) {
    let voice1 = document.getElementById('deathKin')
    let voice2 = document.getElementById('kinKeeper') 
    let voice3 = document.getElementById('evilVamp')
    let voice4 = document.getElementById('cursedFace')
    let voice5 = document.getElementById('hellPump')
    let voice6 = document.getElementById('deathTimeKeeper')
    let voice7 = document.getElementById('fallenDemon')
    let voice8 = document.getElementById('devilRing')
    let voice9 = document.getElementById('devilElf')
    let voice10 = document.getElementById('killerWitch')
    let voice11 = document.getElementById('death')

    voice1.pause()
    voice2.pause()
    voice3.pause()
    voice4.play()
    voice5.pause()
    voice6.pause()
    voice7.pause()
    voice8.pause()
    voice9.pause()
    voice10.pause()
    voice11.pause()
  }

  function hellKin(params) {
    let voice1 = document.getElementById('deathKin')
    let voice2 = document.getElementById('kinKeeper') 
    let voice3 = document.getElementById('evilVamp')
    let voice4 = document.getElementById('cursedFace')
    let voice5 = document.getElementById('hellPump')
    let voice6 = document.getElementById('deathTimeKeeper')
    let voice7 = document.getElementById('fallenDemon')
    let voice8 = document.getElementById('devilRing')
    let voice9 = document.getElementById('devilElf')
    let voice10 = document.getElementById('killerWitch')
    let voice11 = document.getElementById('death')
    
    
    voice1.pause()
    voice2.pause()
    voice3.pause()
    voice4.pause()
    voice5.play()
    voice6.pause()
    voice7.pause()
    voice8.pause()
    voice9.pause()
    voice10.pause()
    voice11.pause()
  }

  function fallenDemon(params) {
    let voice1 = document.getElementById('deathKin')
    let voice2 = document.getElementById('kinKeeper') 
    let voice3 = document.getElementById('evilVamp')
    let voice4 = document.getElementById('cursedFace')
    let voice5 = document.getElementById('hellPump')
    let voice6 = document.getElementById('deathTimeKeeper')
    let voice7 = document.getElementById('fallenDemon')
    let voice8 = document.getElementById('devilRing')
    let voice9 = document.getElementById('devilElf')
    let voice10 = document.getElementById('killerWitch')
    let voice11 = document.getElementById('death') 

    
    voice1.pause()
    voice2.pause()
    voice3.pause()
    voice4.pause()
    voice5.pause()
    voice6.pause()
    voice7.play()
    voice8.pause()
    voice9.pause()
    voice10.pause()
    voice11.pause()
  }

  function timeKeeper(params) {
    let voice1 = document.getElementById('deathKin')
    let voice2 = document.getElementById('kinKeeper') 
    let voice3 = document.getElementById('evilVamp')
    let voice4 = document.getElementById('cursedFace')
    let voice5 = document.getElementById('hellPump')
    let voice6 = document.getElementById('deathTimeKeeper')
    let voice7 = document.getElementById('fallenDemon')
    let voice8 = document.getElementById('devilRing')
    let voice9 = document.getElementById('devilElf')
    let voice10 = document.getElementById('killerWitch')
    let voice11 = document.getElementById('death')

    voice1.pause()
    voice2.pause()
    voice3.pause()
    voice4.pause()
    voice5.pause()
    voice6.play()
    voice7.pause()
    voice8.pause()
    voice9.pause()
    voice10.pause()
    voice11.pause()
  }

  function elfDemon(params) {
    let voice1 = document.getElementById('deathKin')
    let voice2 = document.getElementById('kinKeeper') 
    let voice3 = document.getElementById('evilVamp')
    let voice4 = document.getElementById('cursedFace')
    let voice5 = document.getElementById('hellPump')
    let voice6 = document.getElementById('deathTimeKeeper')
    let voice7 = document.getElementById('fallenDemon')
    let voice8 = document.getElementById('devilRing')
    let voice9 = document.getElementById('devilElf')
    let voice10 = document.getElementById('killerWitch')
    let voice11 = document.getElementById('death') 

    voice1.pause()
    voice2.pause()
    voice3.pause()
    voice4.pause()
    voice5.pause()
    voice6.pause()
    voice7.pause()
    voice8.pause()
    voice9.play()
    voice10.pause()
    voice11.pause()
  }

  function deathRing(params) {
    let voice1 = document.getElementById('deathKin')
    let voice2 = document.getElementById('kinKeeper') 
    let voice3 = document.getElementById('evilVamp')
    let voice4 = document.getElementById('cursedFace')
    let voice5 = document.getElementById('hellPump')
    let voice6 = document.getElementById('deathTimeKeeper')
    let voice7 = document.getElementById('fallenDemon')
    let voice8 = document.getElementById('devilRing')
    let voice9 = document.getElementById('devilElf')
    let voice10 = document.getElementById('killerWitch')
    let voice11 = document.getElementById('death')

    voice1.pause()
    voice2.pause()
    voice3.pause()
    voice4.pause()
    voice5.pause()
    voice6.pause()
    voice7.pause()
    voice8.play()
    voice9.pause()
    voice10.pause()
    voice11.pause()
  }

  function killerWitch(params) {
    let voice1 = document.getElementById('deathKin')
    let voice2 = document.getElementById('kinKeeper') 
    let voice3 = document.getElementById('evilVamp')
    let voice4 = document.getElementById('cursedFace')
    let voice5 = document.getElementById('hellPump')
    let voice6 = document.getElementById('deathTimeKeeper')
    let voice7 = document.getElementById('fallenDemon')
    let voice8 = document.getElementById('devilRing')
    let voice9 = document.getElementById('devilElf')
    let voice10 = document.getElementById('killerWitch')
    let voice11 = document.getElementById('death') 

    voice1.pause()
    voice2.pause()
    voice3.pause()
    voice4.pause()
    voice5.pause()
    voice6.pause()
    voice7.pause()
    voice8.pause()
    voice9.pause()
    voice10.play()
    voice11.pause()
  }

  function death(params) {
    let voice1 = document.getElementById('deathKin')
    let voice2 = document.getElementById('kinKeeper') 
    let voice3 = document.getElementById('evilVamp')
    let voice4 = document.getElementById('cursedFace')
    let voice5 = document.getElementById('hellPump')
    let voice6 = document.getElementById('deathTimeKeeper')
    let voice7 = document.getElementById('fallenDemon')
    let voice8 = document.getElementById('devilRing')
    let voice9 = document.getElementById('devilElf')
    let voice10 = document.getElementById('killerWitch')
    let voice11 = document.getElementById('death')

    voice1.pause()
    voice2.pause()
    voice3.pause()
    voice4.pause()
    voice5.pause()
    voice6.pause()
    voice7.pause()
    voice8.pause()
    voice9.pause()
    voice10.pause()
    voice11.play()
  }