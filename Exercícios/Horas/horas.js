function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let saud = document.getElementById('saud')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12)
    {
        img.src = 'manha.png'
        document.body.style.background = '#097900'
        saud.innerHTML = 'Bom dia!'
    }
    else if (hora >= 12 && hora < 18)
    {
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        saud.innerHTML = 'Boa tarde!'
    }
    else
    {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        saud.innerHTML = 'Boa noite!'
    }
}