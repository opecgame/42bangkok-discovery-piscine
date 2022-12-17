function change(e){
    console.log(e.style.backgroundColor)
    if(e.style.backgroundColor == "red") e.style.backgroundColor = "green" ;
    else if (e.style.backgroundColor == "green") e.style.backgroundColor = "blue" ;
    else e.style.backgroundColor = "red" ; 
}
function change_rev(e){
    if(e.style.backgroundColor == "blue") e.style.backgroundColor = "green" ;
    else if (e.style.backgroundColor == "green") e.style.backgroundColor = "red" ;
    else e.style.backgroundColor = "blue" ; 
}
function Raptor(e){
    change(e);
    if (e.offsetWidth < "420"){
        e.style.width = (e.offsetWidth + 10) + "px";
        e.style.height = (e.offsetHeight + 10) + "px";
    }
    if (e.offsetWidth >= 420 || e.offsetHeight >= 420) {
        e.style.width = "200px";
        e.style.height = "200px";
    }
}
function FordRenger (e){
    if(e.offsetWidth > "200"){
        change_rev(e);
        e.style.width = (e.offsetWidth - 5) + "px";
        e.style.height = (e.offsetHeight - 5) + "px";
    }
}