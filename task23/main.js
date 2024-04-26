const menfi = document.querySelector('.menfi')
const musbet = document.querySelector('.musbet')
const sifir = document.querySelector('.sifir')
const mainImg = document.querySelector('.main-img')


function slider(src) {
    mainImg.innerHTML = `        <img src="${src}" class="main">
    `
}

function decrease() {
    if(sifir.innerHTML > 0) {
        sifir.innerHTML--
    }
}
function increase() {
        sifir.innerHTML++
    
}