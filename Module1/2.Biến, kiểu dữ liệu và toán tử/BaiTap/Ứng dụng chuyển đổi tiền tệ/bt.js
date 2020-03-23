
function convert() {
    let result= 0;
    let amount= document.getElementById('amount');
    let fromCurrency= document.getElementById('fromCurrency');
    let toCurrency= document.getElementById('toCurrency');
    if (fromCurrency.value == "vnd" && toCurrency.value == "usd"){
         result= amount.value / 23000

    } else if(fromCurrency.value == "usd" && toCurrency.value == "vnd"){
        result= amount.value *23000
    } else {result= amount.value;}
    document.getElementById("result").value =result;
    amount.value="";
    console.log(result)
}