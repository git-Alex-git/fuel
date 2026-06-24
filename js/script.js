let gas = document.querySelectorAll(".btn")
let res = document.querySelector('.res')


for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let am = document.querySelectorAll('.gass')[0].value
        let num = this.getAttribute('data-price')
        if (am === '' || am > 21) {
            alert('використовуй нормально!')
            return
        }
        res.innerHTML = `До сплати: ${am * num} грн`
        gas.forEach(btn => btn.classList.remove('active'))
        this.classList.add('active')

    }
}
