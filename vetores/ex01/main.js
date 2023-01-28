/* 
    Vamos criar um exemplo para ilustrar a aplicação dos métodos de
    inclusão e exclusão de elementos no vetor. Nosso programa deve controlar
    a lista de atendimentos dos pacientes de um consultório odontológico –
    como se fosse um painel em exposição em uma tv do consultório. 

    devemos cadastrar um paciente em uma lista de espera para atendimento , 
    3 botões , cadastro , urgencia e atender.

    botão cadastrar - criar uma função para cadastrar os pacientes em um vetor
    botão atender - chamar o primeiro paciente da lista (primeiro índice) e mostra-lo na tela
    botão urgencia - cadastrar o paciente como prioridade e passando na frente dos demais , mas lembre-se ,
    se houver algum paciente cadastrado como urgência , a próxima urgência deve entrar depois dele.

*/


let inPaciente = document.getElementById('inPaciente');
let btCadastrar = document.getElementById('btCadastrar');
let outlista = document.getElementById("outLista");
let btUrgencia = document.getElementById("btUrgencia");
let btAtender = document.getElementById("btAtender");
let outAtendimento = document.getElementById("outAtendimento");


let listaPacientes = [];
let listaNaTela = [];
let prioridade = [];
let msg = "";
let atendimento = "";

function mostrar(){
    msg = "";

    if(prioridade.length > 0){
        for(let i = 0; i < prioridade.length; i++){
            msg += `${i+1}º ${prioridade[i]} \n`
        }
        for(let i = 0; i < listaPacientes.length; i++){
            msg += `${prioridade.length+1+i}º ${listaPacientes[i]} \n`
        }
    }else{
        for(let i = 0; i < listaPacientes.length; i++){
            msg += `${i+1}º ${listaPacientes[i]} \n`
        }
    }
        

    outlista.textContent = msg;
    inPaciente.focus();
    inPaciente.value = "";
}

function cadastrar(){
    
    let paciente = inPaciente.value;

    if(paciente == "" || !isNaN(paciente)){
        inPaciente.focus();
        alert("Por favor informe o nome do paciente.");
        return;
    }
    
    listaPacientes.push(paciente);
    mostrar();
    // msg = "";

    // if(prioridade.length > 0){
    //     for(let i = 0; i < prioridade.length; i++){
    //         msg += `${i+1}º ${prioridade[i]} \n`
    //     }
    //     for(let i = 0; i < listaPacientes.length; i++){
    //         msg += `${prioridade.length+1+i}º ${listaPacientes[i]} \n`
    //     }
    // }else{
    //     for(let i = 0; i < listaPacientes.length; i++){
    //         msg += `${i+1}º ${listaPacientes[i]} \n`
    //     }
    // }
        

    // outlista.textContent = msg;
    // inPaciente.focus();
    // inPaciente.value = "";
}

btCadastrar.addEventListener('click', cadastrar);

function urgencia(){

    let paciente = inPaciente.value;
    if(paciente == "" || !isNaN(paciente)){
        alert("Digite o nome do paciente corretamente!");
        inPaciente.focus();
        return;
    }

    prioridade.push(paciente);
    // msg = "";

    // for(let i = 0; i < prioridade.length; i++){
    //     msg += `${i+1}º ${prioridade[i]} \n`
    // }

    // for(let i = 0; i < listaPacientes.length; i++){
    //     msg += `${prioridade.length+1+i}º ${listaPacientes[i]} \n`
    // }

    // outlista.textContent = msg;
    // inPaciente.focus();
    // inPaciente.value = "";

    mostrar();
}

btUrgencia.addEventListener("click", urgencia);

function atender(){

    if(prioridade.length === 0 && listaPacientes.length === 0){
        alert("Não há pacientes na fila de espera.");
        inPaciente.focus();
        return;
    }

    if(prioridade.length > 0){
        atendimento = prioridade.shift();
        outAtendimento.textContent = atendimento;

        // msg = "";

        // for(let i = 0; i < prioridade.length; i++){
        //     msg += `${i+1}º ${prioridade[i]} \n`
        // }

        // for(let i = 0; i < listaPacientes.length; i++){
        //     msg += `${prioridade.length+1+i}º ${listaPacientes[i]} \n`
        // }

        // outlista.textContent = msg;
        // inPaciente.focus();
        // inPaciente.value = "";
    }else{
        atendimento = listaPacientes.shift();
        outAtendimento.textContent = atendimento;

        // msg = "";

        // for(let i = 0; i < prioridade.length; i++){
        //     msg += `${i+1}º ${prioridade[i]} \n`
        // }

        // for(let i = 0; i < listaPacientes.length; i++){
        //     msg += `${prioridade.length+1+i}º ${listaPacientes[i]} \n`
        // }

        // outlista.textContent = msg;
        // inPaciente.focus();
        // inPaciente.value = "";
    }

    mostrar();
}

btAtender.addEventListener("click", atender);