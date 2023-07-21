function clicar() {

    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("Fim")
    let passo = document.getElementById("Passo")
    let resp = document.getElementById("resp")
    
    if (inicio.value.length == 0 ||passo.value.length == 0 ||fim.value.length == 0 ) {
        resp.innerHTML = ("Impossível contar!!!")
        //alert("[ERRO] FALTAM DADOS!!!")
    
    }else{
    
        resp.innerHTML = ("Contando: <br>")
    
        let i = Number(inicio.value)
        let p = Number(passo.value)
        let f = Number(fim.value)
        if(p<=0){
            alert("Passo inválido! Considerando passo 1")
            p = 1
        }
        if(i<f){
            //contagem crescente
            for(let c = i ; c <= f ; c += p ){
    
         resp.innerHTML += ( c + " \u{1f449} ")
    
    }
        }else{
            //contagem decrescente
            for(let c = i ; c>=f ; c-=p ){
    
                resp.innerHTML += ( c + " \u{1f449} ")
    
            }
        }
        resp.innerHTML += (" \u{1f3c1}")
    }
    
    } 