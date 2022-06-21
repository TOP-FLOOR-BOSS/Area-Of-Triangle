/*let btn = document.getElementById("inputBtn");
btn.addEventListener("click" , () => {
    var base = document.getElementById("Base");
    var Height = document.getElementById("Height");
    
})
*/



const calculate2 = document.getElementById('calculate2');

calculate2.addEventListener('click',()=>{
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;
    let total = (0.5 *(base * height) );
    document.getElementById('display2').innerHTML =
    total + " meters" ;
}
);







/*let btn = document.getElementById("inputBtn");
btn.addEventListener("click", () => {
  let base = document.getElementById("numInput").value;
  let Height = document.getElementById("count");
  display.innerHTML = minutes * 60;
  minutes = "";
});
*/