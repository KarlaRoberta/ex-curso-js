function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

   
    msg.innerHTML = `Agora são ${hora} horas. `
        if(hora >= 0 && hora < 12 ) {
             img.src="../exercicio014/dia.png"
             document.body.style.background = '#fcd3c1'
        }else if(hora >= 12 && hora <= 18 ) {
            img.src="../exercicio014/tarde.png"
            document.body.style.background = '#fdbb58'
        }else{
            img.src="../exercicio014/noite.png"
            document.body.style.background = '#395258'
         }

}
