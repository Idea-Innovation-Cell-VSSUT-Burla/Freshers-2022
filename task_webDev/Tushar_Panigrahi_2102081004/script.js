var x = document.getElementById("menulist");
const bars=document.getElementById("bars");
bars.addEventListener("click",function(){
  if (x.style.display == "block") {
  x.style.display = "none";
  bars.style.backgroundColor="crimson";
} else {
  x.style.display = "block";
  
  bars.style.backgroundColor="white";
}
})