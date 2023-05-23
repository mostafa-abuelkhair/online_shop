
let menue = true;

function menuef (){

    let menueElement = document.getElementsByClassName("menue")[0];

    if(menue){
        menueElement.classList.add('show');
    }
    else{
        menueElement.classList.remove('show');
    }
    menue = !(menue);

}