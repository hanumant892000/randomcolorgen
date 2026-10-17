

// function genColorandApply() {
//     let red = Math.floor(Math.random() * 256)
//     let green = Math.floor(Math.random() * 256)
//     let blue = Math.floor(Math.random() * 256)
//     let color = `rgb( ${red}, ${green}, ${blue} )`
//     console.log(color);
//     const colorBox = document.querySelector('.color-box')
//     colorBox.style.backgroundColor = color

//     const showcolor = document.querySelector('.show-color')
//     showcolor.innerHTML = `Color: ${color}`
// }

// const genBtn = document.querySelector('.gencolorbtn')
// genBtn.addEventListener('click', genColorandApply)

// window.addEventListener('load', genColorandApply)             



function genColorAndApply() {
    let str = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        let char = str[index]
        color = color + char
    }
   
    let colorBox = document.querySelector('.color-box')
    colorBox.style.backgroundColor = color

    const showColor = document.querySelector('.show-color')
    showColor.innerHTML = `Color: ${color}`
}

const genBtn = document.querySelector('.gencolorbtn')
genBtn.addEventListener('click', genColorAndApply)

window.addEventListener('load', genColorAndApply)  

// console.log(Math.floor( Math.random() * 1000 + 1000));


// const card = document.querySelector('.mycard')
// console.log(card);

// console.log(card.innerText);
// console.log(card.textContent);
// console.log(card.innerHTML);
// card.innerHTML = `<li>Change</li>`