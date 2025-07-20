//encontrar o botao adicionar tarefa 

const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicinarTarefa = document.querySelector(".app__form-add-task");
const textarea = document.querySelector(".app__form-textarea");

const tarefas = [];


btnAdicionarTarefa.addEventListener('click', () => {
    formAdicinarTarefa.classList.toggle("hidden");
});

formAdicinarTarefa.addEventListener('submit', (event) => {
    event.preventDefault();
    const tarefa = {
        descrcao: textarea.value
    };
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
});