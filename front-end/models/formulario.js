$("#btnInscrever").click(function (event) {
    event.preventDefault();
  
    let nome = $("#inputNome").val();
    let dataNasc = $("#inputData").val();
    let periodo = $("#inputPeriodo").val();
    let curso = $("#inputCurso").val();
    let aceite = $('#gridCheck').prop('checked')
  
    console.log(nome);
    console.log(dataNasc);
    console.log(periodo);
    console.log(curso);
    console.log(aceite);
    
    permitirCadastro();
  });

  function permitirCadastro(){
    verificaNome();
    verificaPeriodo();
    verificaCurso();
  
    $("#retornoSucesso").html(`<p class='retornoSucesso'>Inscrição realizada com sucesso!</p>`);
  }

  function verificaNome(){
    let nome = $("#inputNome").val();
  
    if(nome.length <= 0){
      $("#retornoNome").html(`<p class="nomeInvalido">Digite um nome válido</p>`);
    }else{        
      $("#retornoNome").html(`<p></p>`);      
    } 
  }

  function verificaPeriodo(){
    let periodo = $("#inputPeriodo").val();
  
    if(periodo.length < 4){
      $("#retornoPeriodo").html(`<p class="periodoInvalido">Digite um período válido</p>`);
    }else{        
      $("#retornoPeriodo").html(`<p></p>`);      
    } 
  }

  function verificaCurso(){
    let curso = $("#inputCurso").val();
  
    if(curso.length < 3){
      $("#retornoCurso").html(`<p class="periodoInvalido">Digite um curso válido</p>`);
    }else{        
      $("#retornoCurso").html(`<p></p>`);      
    } 
  }


  $(document).ready(function (){
    checarPreenchimento();
    $('#inputNome, #inputPeriodo, #inputCurso').change(checarPreenchimento);
  });

  function checarPreenchimento(){
    if ($('#inputNome').val().length > 0 &&
        $('#inputPeriodo').val().length > 0 &&
        $('#inputCurso').val().length > 0        
        
        ) {
        $("#btnInscrever").prop("disabled", false);
    }
    else {
        $("#btnInscrever").prop("disabled", true);
    }
}
