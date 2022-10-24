var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");





var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json  "

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with server, Please try again after sometime.")
}

function clickHandler(){
    var inputText = txtInput.value;

    //calling server processing

    fetch(getTranslationURL(inputText))
        .then(response=>response.json())
        .then(json=>{
            var translatedtext=json.contents.translated;
            outputDiv.innerText=translatedtext; //output
       
        })
        .catch(errorHandler)
}




btnTranslate.addEventListener("click", clickHandler)