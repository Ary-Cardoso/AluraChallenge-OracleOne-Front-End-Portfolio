
document.querySelector("form").addEventListener("submit", validaDados);


function validaDados(){

    if(document.form.nome.value == ""){
        window.event.preventDefault();
        alert("O campo Nome é obrigatório!");
        
        document.form.nome.focus();

    }else if(document.form.nome.value.length > 50){
        window.event.preventDefault();
        alert("O máximo de caracteres é 50!");
        document.form.nome.focus();

    }else if(document.form.email.value.indexOf("@") == -1 || document.form.email.value.indexOf(".") == -1){
        window.event.preventDefault();
        alert("Email invalido!");
        document.form.email.focus();

    }else if(document.form.assunto.value == ""){
        window.event.preventDefault();
        alert("O campo assunto é obrigatório!");
        document.form.nome.focus();
    
    }else if(document.form.assunto.value.length > 50){
        window.event.preventDefault();
        alert("O máximo de caracteres é 50!");
        document.form.assunto.focus();

    }else if(document.form.mensagem.value == ""){
        window.event.preventDefault();
        alert("O campo mensagem é obrigatório!");
        document.form.mensagem.focus();

    }else if(document.form.mensagem.value.length > 300){
        window.event.preventDefault();
        alert("O máximo de caracteres é 300!");
        document.form.mensagem.focus();
    } 

}








