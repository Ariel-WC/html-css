let res = document.querySelector('div#res')
function calcular(){
    let numtxt = [document.querySelector('input#num1txt'), document.querySelector('input#num2txt')]
    let num = [Number(numtxt[0].value), Number(numtxt[1].value)]
    res.innerHTML = `a soma entre ${num[0]} e ${num[1]} é igual à ${num[0] + num[1]}`
}