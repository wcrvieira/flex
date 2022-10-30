function valida(){

    if(document.form.nome.value == ""){
        alert("Digite o nome");
        document.getElementById("nome").focus();
        return false;
    }

    var vm = document.form.email.value;
    if(vm.search("@")==-1){
        alert("Digite um e-mail válido");
        document.getElementById("email").focus();
        return false;
    }
        
    if(document.form.telefone.value == ""){
        alert("Digite um número de telefone");
        document.getElementById("telefone").focus();
        return false;
    }
        
    var data=new Date();
    var dt=new Array;
    var aux = document.form.data_nasc.value;
    dt = aux.split("/");
            
    if( ((dt[0] < 1)||(dt[0] > 31)) || ((dt[1] < 1)||(dt[1] > 12)) || ((dt[2] < dt.getFullYear()-150)||(dt[2] > dt.getFullYear())) ){
        alert("Digite uma data válida");
        document.getElementById("data_nasc").focus();
        return false;
    }
            
    
}
    