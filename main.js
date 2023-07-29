const buttonsEl = document.querySelectorAll("button")
const inputFiledEl = document.getElementById("result")


for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click",()=>{
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue=== "C"){
            clearResult()
        } else if(buttonValue === "="){
            calculateResult()
        }else {
            appendValue(buttonValue)
        }

    })
}

function clearResult(){
    inputFiledEl.value = ""
}

function calculateResult(){
    inputFiledEl.value = eval(inputFiledEl.value)

}
function appendValue(buttonValue){
    inputFiledEl.value += buttonValue
    

}
