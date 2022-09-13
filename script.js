let input = document.querySelector("input");

function Calculate() {
    let question = input.value;
    let answer = eval(question);
    input.value = answer;

}

function ClearScreen() {
    input.value = '';
}

function AddingNumberToScreen(number) {
    input.value += number;
}




