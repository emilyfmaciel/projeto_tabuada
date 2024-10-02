const multiplicationForm = document.querySelector('#multiplication-form');
const numberInput = document.querySelector('#number');
const multiplicationInput = document.querySelector('#multiplicator');
const multiplicationTitle = document.querySelector('#mult-title span');
const multiplicationTable = document.querySelector('#mult-operations');

const criarTabuada = (number, mult) => {
    multiplicationTable.innerHTML = "";

    for (let i = 1; i<=mult; i++){
        const result = number*i;

        const template = `<div class="row">
        <div class="operation result"> ${number} x ${i} = ${result} </div>
        </div>`;

        const parser= new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector('.row');

        multiplicationTable.appendChild(row);
    }
    multiplicationTitle.innerHTML = number;
}

multiplicationForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    console.log(multiplicationNumber, multiplicatorNumber);
    criarTabuada(multiplicationNumber, multiplicatorNumber);
})
