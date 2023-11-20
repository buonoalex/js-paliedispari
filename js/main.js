// Questo è il file che contiene tutto il codice JS della pagina web
//----------------------------SELEZIONE GIOCO-----------------------------
let sentinella = false;
while (sentinella == false){

    let choiseGame = parseInt(prompt("Inserisci 1(Palindroma) // 2(Somma pari o dispari)"));

    switch(choiseGame){

        case 1:
            Palindroma();
            console.log("1");
        break;

        case 2:
            SumEvenOdd();
            console.log("2");
        break;
    }

    let playAgain = parseInt(prompt("Inserisci 1(se vuoi continuare a giocare)  //  2(se non vuoi giocare più) :"));



    if (playAgain == 1){
        sentinella = false;
    }else if(playAgain == 2){
        sentinella = true;
        alert("Arrivederci alla Prossima XD :)");
    }else{
        sentinella2 = true; 
        alert("Non hai inserito il numero correttamente!!");
    }
   
}


//----------------------------GAME PALINDROMA-----------------------------

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

//----------------------------END GAME-----------------------------

//-----------------------GAME PARI O DISPARI-----------------------

function generateNumberRandomOneToFive(){
    let numberRandom = Math.floor(Math.random()*5)+1;
    console.log(numberRandom);
    return numberRandom;
    
}

function SumEvenOdd(){
    let choiseEvenOdd = parseInt(prompt("Inserisci se il numero della somma è 1(Pari) o 2(Dispari) :"));

    let userNumber = parseInt(prompt("Inserisci il numero da sommare al numero generato casualmente: "));

    let resultAdd = sumTwoNumber(userNumber,generateNumberRandomOneToFive());

    let resultDecisionEvenOrOdd = findNumberEvenOrOdd(resultAdd);

    if(resultDecisionEvenOrOdd == true && choiseEvenOdd == 1){
        alert("HAI VINTO !! "+resultAdd+" è pari");
    }else if(resultDecisionEvenOrOdd == false && choiseEvenOdd == 2){
        alert("HAI VINTO !! "+resultAdd+" è dispari");
    }else if(resultDecisionEvenOrOdd == true && choiseEvenOdd == 2){
        alert("HAI PERSO !! "+resultAdd+" è pari");
    }else{
        alert("HAI PERSO !! "+resultAdd+" è dispari");
    }


}

function sumTwoNumber(num1,num2){
    let risultato = 0;
    risultato = num1 + num2;
    console.log(risultato);
    return risultato;
}

function findNumberEvenOrOdd(numberToVerify){
    if(numberToVerify % 2 == 0){
        return true;
    }else{
        return false;
    }
}