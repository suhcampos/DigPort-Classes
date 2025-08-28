let listaDeTarefas = ["Enviar email", "Ligar para o cliente"]
//listaDeTarefas.push("Enviar email")
//listaDeTarefas.push("Ligar para o cliente")
//console.log(listaDeTarefas);

function adicionarTarefa(texto) {
    listaDeTarefas.push(texto)
}

adicionarTarefa("Reunião")
adicionarTarefa("Academia")

function removerTarefa(number) {
    listaDeTarefas.splice(number, 1)
}

removerTarefa(2)

console.log(listaDeTarefas);