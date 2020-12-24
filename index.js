document.addEventListener('DOMContentLoaded',function(){ // runs once DOM has loaded
 
window.addEventListener("keydown",function(e){ //lisens to window events
   const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)

   if(!audio) return //stops the fuction from runnning when a key not associated with an audio is clicked

   audio.currentTime=0; //rewinds audio
 audio.play()
   let clickKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 clickKey.classList.add("playing")
})

  function animationRemove(e) {
if(e.propertyName!=='transform') return

this.classList.remove('playing')
  }
const leys=document.querySelectorAll(".key");
leys.forEach(key=>key.addEventListener('transitionend',animationRemove))


})