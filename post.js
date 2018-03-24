function ValidarCampos(){
        var author = document.getElementById("author").value;
        var book = document.getElementById("book").value;
        var comment = document.getElementById("comment").value;
        if (author == "" || author == null){
            alert("Você precisa digitar o nome do autor");

        }
        else if(book== "" || book == null){
            alert("Você precisa digitar o nome do livro, seu cavalo");    

        }
        
        else if( comment =="" || comment ==null){
            alert("Você precisa digitar um comentário");

        }
        else{
            var registers = {"author":author,"book":book,"comment":comment};

            salvarRegistro(registers);

        }


}

function salvarRegistro(registers){
    var url = "http://localhost:3000/aulareforco";    
    $.post(url,registers);
}