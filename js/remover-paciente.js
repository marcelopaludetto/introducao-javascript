var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");


// pacientes.forEach(function (paciente) {
//     paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado com duplo clique");
//         this.remove();
//         });  
// });

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode;
        paiDoAlvo.remove();
    },500);

});