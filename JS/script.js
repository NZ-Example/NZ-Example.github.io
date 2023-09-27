var button = document.getElementById("button");



button.addEventListener("click", ()=>{

  let innerNum = button.innerHTML;
  button.innerHTML = Number(innerNum) + 1;
})
