const h1=document.querySelector('h1');

const input=document.querySelector('#uno');
const input2=document.querySelector('#dos');
const btn=document.querySelector("#btn");
const resp=document.querySelector("#resp");

function btnclick(){
    const suma=parseInt (input.value) + parseInt(input2.value);
    resp.innerText="Resultado: " +suma;
}
