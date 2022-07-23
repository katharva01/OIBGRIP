const input = document.querySelector('#inputTemp');
const log1 = document.querySelector('#values1');


input.addEventListener('input', updateValue);


function updateValue(e) {
  if(input.value=="" || input.value==null){
    log1.textContent = ""  ;
    return;
  }
  
  // degree to farenhiet conversion
  if(document.querySelector("#DtF").checked){
    log1.textContent = "The Corresponding temperature is " + ((Number(input.value) * 9/5) + 32) +' '+"Degree Farenhiet"  ;
  }
  
  //degree to farenhiet conversion
  if(document.querySelector("#DtK").checked){
    log1.textContent = "The Corresponding temperature is " + (Number(input.value)+273.15 ) + " " + "Kelvin"  ;
  }
}