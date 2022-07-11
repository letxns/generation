$("#btnInscrever").click(function(e){
    e.preventDefault();
    $.ajax({
        url: `localhost:3000/cadastro`,
        type: "GET",
        success: function(result){
            console.log(result);
            $(".nome").text(result.nome);
            $(".dataNascimento");
            $(".periodo").text(result.periodo);  
            $(".tipoCurso").text(result.tipoCurso);

        },
    });
});

// Não consegui tempo para finalizar
