function receber(){
 
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var data_nasc = document.getElementById("data_nasc");
    var mensagem = document.getElementById("mensagem");
     
    var texto = "Nome: " +nome + "; E-mail: "+ email + "; Telefone: "+ telefone + "\n" +
                "Data de nascimento" + data_nasc +  "Mensagem" + mensagem; // como quiser formatar
      
    alert(texto);
     
}