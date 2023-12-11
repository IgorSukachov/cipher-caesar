// document.querySelector('#input').addEventListener('input', function (e) {
//     const offset = 3
//     let str = this.value
//     let out = ''
//     for (let i = 0; i < str.length; i++) {
//         let code = str.charCodeAt(i)
//         code = code + offset
//         out += String.fromCharCode(code)
//     }
//     document.querySelector('#cipher').innerHTML = out
// })

// document.querySelector('#output').addEventListener('input', function (e) {
//     const offset = 3
//     let str = this.value
//     let out = ''
//     for (let i = 0; i < str.length; i++) {
//         let code = str.charCodeAt(i)
//         code = code - offset
//         out += String.fromCharCode(code)
//     }
//     document.querySelector('#transcript').innerHTML = out
// })

function cipherOptions(context, countValue, idTag) {
    let str = context.value
    let out = ''
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i) // charCodeAt(index) возвращает числовое значение Юникода для символа по указанному индексу a = 97, A = 65
        if (code == 88 || code == 89 || code == 90) {
            codeOffset = code -23;
        } else if (code == 120 || code == 121 || code == 122) {
            codeOffset = code -23;
        } else {
            codeOffset = code - countValue
        }
        out += String.fromCharCode(codeOffset)
    }
    document.querySelector(idTag).innerHTML = out
}
document.querySelector('#input').addEventListener('input', function () {cipherOptions(this, 3 ,'#cipher')})
document.querySelector('#output').addEventListener('input', function () {cipherOptions(this, -3 ,'#transcript')})
