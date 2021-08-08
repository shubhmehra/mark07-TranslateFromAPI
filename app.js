var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var errorDiv = document.querySelector("#errorMessage");

var serverUrl = "https://api.funtranslations.com/translate/fudd.json";

function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log(" error occured", error);
  errorDiv.innerText =
    "We are sorry. You can only use this for 5 times per hour. Try again later.";
}

btnTranslate.addEventListener("click", clickEventHandler());

function clickEventHandler() {
  return function clickEventHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
      .then((response) => response.json())
      .then((json) => (outputDiv.innerText = json.contents.translated))
      .catch(errorHandler);
  };
}
