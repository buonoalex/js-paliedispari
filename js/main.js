// Questo è il file che contiene tutto il codice JS della pagina web

Palindroma();

function Palindroma(){
    let parola = prompt("Inserisci la parola per vedere se è PALINDROMA :");
    let risultato = searchPalindroma(parola);
     
    if(risultato){
        alert("La parola " +parola+ " è Palindroma");
    }else{
        alert("La parola " +parola+ " non è Palindroma");
    }


}

function searchPalindroma(searchWord){

    //Stringa utente
    let arraySearchWord = searchWord.split('');
    console.log(arraySearchWord);

    //Stringa reverse utente
    
    let arraySearchWord2 = [];

    for(let i = arraySearchWord.length-1; i>=0; i--){
        arraySearchWord2.push(arraySearchWord[i]);
    }

    console.log(arraySearchWord2);

    let countEqual = 0;

    for(i=0; i<arraySearchWord.length; i++){
        if(arraySearchWord[i] == arraySearchWord2[i]){
            countEqual = countEqual + 1;
        }
    }

    if(countEqual == arraySearchWord.length){
        return true;
    }else{
        return false;
    }
    

}