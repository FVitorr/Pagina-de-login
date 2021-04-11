// funciona baseado em eventos 
function validacao(){
    var erro,result = false
    var formulario = document.forms ["loginexe"]
    var name = formulario.user.value
    var pass = formulario.password.value
    console.log (pass,name)
    if (name.length > 0){
        console.log ("VALOR 'nome' INSERIDO")
        if (pass.length >0) {
            console.log ("VALOR 'senha' INSERIDO")
            var erro = true
            if (name == "admin" && pass == "admin" ){
                var result = true
            } else {var erro = true}
        }
    } 
    if (erro == true) {
        console.log ("VALORES OBTIDOS") 
    }
    else {console.log("VALORES INVALIDOS OU INEXISTENTE")
        alert ("PREENCHA TODOS OS CAMPOS OU INFORME A SENHA e USUARIO NOVAMENTE ")
    }

    return result
}