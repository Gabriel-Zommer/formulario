const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click', validaCamposFormulario);

function validaCamposFormulario() {
    let campos = [{campo: 'nome', alerta: 'alertaNome'}, 
                  {campo: 'email', alerta: 'alertaEmail'}, 
                  {campo: 'telefone', alerta: 'alertaTelefone'},
                  {campo: 'mensagem', alerta: 'alertaMensagem'}];
    
    campos.filter((objeto) => {
        let campo = document.getElementById(objeto.campo);
        let mensagem = document.getElementById(objeto.alerta);
        
        if(campo.value.length  === 0) {
            campo.style.borderColor = 'red';
            mensagem.style.display = 'block';
        } else {
            campo.style.borderColor = 'green';
            mensagem.style.display = 'none';
        }
    });
}
