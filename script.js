 let taskbar=document.getElementsByClassName("taskbar")[0]
 let menu=document.getElementsByClassName("menu")[0]
//  console.log("aa")
 taskbar.addEventListener("click",()=>{
    if(menu.style.bottom =="50px"){
        menu.style.bottom ="-655px"
    }
    else{
        menu.style.bottom ="50px"
    }
 })