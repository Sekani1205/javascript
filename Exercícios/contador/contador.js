function contar()
{
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('result')
    
    
    if (ini.value.length == 0 && fim.value.length == 0 && passo.value.length == 0)
    {
        alert('[ERRO!] Faltam valores!')
        res.innerText = 'Impossivel contar.'
    }
    else
    {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0)
        {
            alert('Valor do passo incorreto! Considerando 1.')
            p = 1
        }
        if (i < f)
        {
            //Contagem crescente
            for (let cont = i; cont <= f; cont = cont + p)
            {
                res.innerText += ` ${cont} \u{1F449}`
            }
            res.innerText += '\u{1F3C1}'
        }
        else
        {
            //Contagem decrescente
            for (let cont = i; cont >= f; cont = cont - p)
            {
                res.innerText += `${cont} \u{1F449}`
            }
            res.innerText += '\u{1F3C1}'
        }
        
    }

}