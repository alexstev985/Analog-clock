setInterval(() => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    
    const hr = document.getElementById('hr')
    const min = document.getElementById('min')
    const sec = document.getElementById('sec')

    const h = hours * 30
    const m = minutes * 6
    const s = seconds * 6

    hr.style.transform = `rotateZ(${h+(m/12)}deg)`
    min.style.transform = `rotateZ(${m}deg)`
    sec.style.transform = `rotateZ(${s}deg)`
}, 1000)