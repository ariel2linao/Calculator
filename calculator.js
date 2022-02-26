let displayText = document.getElementById("display");

var firstValue = "";
var secondValue = "";
var method = "";

function myFunction(calcFunction){
    if(calcFunction != ""){
    //console.log(calcFunction);
    if (calcFunction == "clear") {
        displayText.value = "";
        firstValue = "";
        secondValue = "";
    } 
    else if (calcFunction == "&larr") {
        displayText.value = displayText.value.slice(0, -1);
        firstValue = firstValue.slice(0, -1);
        secondValue = secondValue.slice(0, -1);
  
    }else if(calcFunction == "="){
        displayText.value = eval(displayText.value);
        firstValue = "";
        secondValue = "";

    }else{
        firstValue = calcFunction;
        if(method != ""){
            firstValue += firstValue;
            displayText.value = firstValue;
        } else{
            secondValue += firstValue;
            displayText.value = secondValue;
        }
    } 
    }
}        
     //else if(calcFunction == ""){
    //     let firstValue = "";
    //     if(method != ""){
    //         firstValue += firstValue ;
    //         displayText.value = firstValue;
    //     } else{
    //         secondValue += firstValue;
    //         displayText.value = secondValue;
    //     }
   //}
        
    // }else if(calcFunction == "x"){
    //     displayText.value = "*";
    //     method = "multiply";

    
        
