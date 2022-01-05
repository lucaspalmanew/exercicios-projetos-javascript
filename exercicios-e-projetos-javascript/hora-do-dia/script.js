function carregar() {
   var msg = window.document.getElementById('msg')
   var imagem = window.document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas`
   if (hora >= 0 && hora < 12) {
       //  BOM DIA
       imagem.src = 'fotomanha.png'
       document.body.style.background = '#e2cd9f'
   } else if (hora >= 12 && hora <= 18) {
       // BOA TARDE
       imagem.src = 'fototarde.png'
       document.body.style.background = '#b9846f'
   } else {
       //BOA NOITE
       imagem.src = 'fotonoite.png'
       document.body.style.background = '#515154'
   }
}


