let list = [];
let cont = 0;

function addTask1() {
    document.getElementById("new-task").style.display = "flex";
    document.getElementById("btn1").style.display = "none";

    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("prioridade").value = "";
    document.getElementById("dataVencimento").value = "";
    document.getElementById("responsaveis").value = "";
}

 function addTask2() {
    cont++;

    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    const prioridade = document.getElementById("prioridade").value;
    const dataVencimento = document.getElementById("dataVencimento").value;
    const responsavel = document.getElementById("responsaveis").value;

    const task = {
        titulo: titulo,
        descricao: descricao,
        prioridade: prioridade,
        dataVencimento: dataVencimento,
        responsavel: responsavel,
        status: 1
    };

    list.push(task);

    const newTaskHTML = `
        <div id="task${cont}" class="task" name="draggable" draggable="true" data-id="${cont}">
            <div class="title">${list[cont-1].titulo}</div>
            <div class="flex">
                <div class="task-info">
                    <div class="priority">Prioridade: ${list[cont-1].prioridade}</div>
                    <div class="dtVencimento">Vencimento: ${list[cont-1].dataVencimento}</div>
                    <div class="">Responsavel: ${list[cont-1].responsavel}</div>
                </div>
                <div class="flex">
                    <button id="btnView" onclick="viewTask(${cont})">Vizualisar</button>
                    <button id="btnDel" onclick="deleteTask(${cont})">
                        <object data="icon/icondelete.svg" type="image/svg+xml" width="20px"></object>
                    </button>
                </div>
            </div>
        </div>
    `;

    document.getElementById("col1").innerHTML = newTaskHTML + document.getElementById("col1").innerHTML;

    document.getElementById("btn1").innerHTML = `<button onclick="addTask1()">Adicionar tarefa</button>`;

    addDragListeners();

    document.getElementById("new-task").style.display = "none";
    document.getElementById("btn1").style.display = "inline";

    console.log(list);
}

function deleteTask(x) {
    document.getElementById(`task${x}`).remove();
}

function viewTask(x){
    var docHtml = document.body.innerHTML;
    document.body.innerHTML =  `<div id="view-task${x}" class="container view-task">
                                    <h2>Titulo: ${list[x-1].titulo}</h2>
                                    <div>
                                        <div class="task-info2">
                                            <div class="desc">
                                                <h3>Descricao:</h3>
                                                ${list[x-1].descricao}
                                            </div>
                                            <div>
                                                <h3>Prioridade: ${list[x-1].prioridade}</h3>
                                            </div>
                                            <div>
                                                <h3>Data: ${list[x-1].dataVencimento}</h3>
                                            </div>
                                            <div>
                                                <h3>Responsavel: ${list[x-1].responsavel}</h3>
                                            </div>
                                        </div>
                                        <div class="task-buttons">
                                            <button onclick="exitTask(${x})" id="btnExit">Sair</button>
                                        </div>
                                    </div>
                                </div>` + docHtml;
}

function exitTask(x){
    document.getElementById(`view-task${x}`).style.display = "none";

    addDragListeners();
}

function cancel(){
    addDragListeners();

    document.getElementById("new-task").style.display = "none";
    document.getElementById("btn1").style.display = "inline";
}
