
let menue = true;

function menuef (){

    let menueElement = document.getElementsByClassName("menue");

    if(menue){
        menueElement[0].classList.add('show');
    }
    else{
        menueElement[0].classList.remove('show');
    }
    menue = !(menue);

}