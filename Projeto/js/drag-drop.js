let dragged = null;

// Adiciona event listeners de drag aos elementos "draggable"
function addDragListeners() {
    const draggables = document.getElementsByName("draggable");

    draggables.forEach(draggable => {
        // Remove event listeners anteriores para evitar múltiplas atribuições
        draggable.removeEventListener("dragstart", handleDragStart);
        
        // Adiciona o event listener de dragstart
        draggable.addEventListener("dragstart", handleDragStart);
    });

    const targets = document.getElementsByName("drop-target");

    targets.forEach(target => {
        target.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        target.addEventListener("drop", (event) => {
            event.preventDefault();
            if (event.target.classList.contains("dropzone")) {
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);

                // Atualizar o status da tarefa com base na coluna
                const newStatus = event.target.getAttribute("data-status");
                dragged.setAttribute("data-status", newStatus);
            }
        });
    });
}

// Função separada para o evento "dragstart" para garantir que o listener seja consistente
function handleDragStart(event) {
    dragged = event.target;
}

// Inicializa os listeners na primeira carga da página
addDragListeners();
