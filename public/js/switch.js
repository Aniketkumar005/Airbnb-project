
let taxSwitch = document.getElementById("flexSwitchCheckDefault");
  
  taxSwitch.addEventListener("click",()=>{
  
    let taxInfo=document.querySelectorAll(".tax-info");
    for(info of taxInfo){
      if(info.style.display != "inline"){
          info.style.display="inline";
      }else{
          info.style.display="none";
      }
       
    }
  });
  