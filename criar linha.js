let alunos = [
    {
        matricula: 111,
        nome: "Pedro",
        notas: [8, 9, 10]
    },
]

function adicionarAluno() {
    const tabela = document.querySelector("#tabela")
    const linha = document.createElement("tr")  
    
    // Criando o botão de edição
    const tdEditar = document.createElement("td")
    const btnEditar = document.createElement("button")
    btnEditar.innerHTML = "Editar"
    linha.append(btnEditar)

    // Adicionando os outros campos
    for (let aluno of alunos) {
        for (let chave in aluno) {
            let td
            if (aluno[chave] instanceof Array) {           
                for (let nota of aluno[chave]) {
                    td = document.createElement("td")

                    td.innerHTML = nota  
                    linha.append(td)              
                }                                    
            } else {
                td = document.createElement("td")        
                td.innerHTML = aluno[chave]
            }    
            linha.append(td)
        }
    }
    tabela.append(linha)
}

function editarDadosAlunos () {
    
}

// Abrir e fechar modal

document.querySelector("#addAluno").addEventListener("click", () => {
    document.querySelector("#id01").hidden = false
    document.querySelector(".modal").style.cssText = "display: flex; justify-content:center; align-items: center;"
}) 

document.querySelector("#botaoDesaparecer").addEventListener("click", () => {    
    document.querySelector("#id01").hidden = true 
    document.querySelector(".modal").style.cssText = ""
}) 

// Salvar alunos

document.querySelector(".salvarAluno") .addEventListener("click", () => {
    let turmas = [
        {
            codTurma: 123,
            nomeTurma: "Prog WEB",
            alunos: [
                {
                    matricula: 123,
                    nome: "Joao",
                    notas: [10, 10, 10],
                    media: 10                    
                },
                {
                    matricula: 124,
                    nome: "Pedro",
                    notas: [10, 10, 10],
                    media: 10                    
                }
            ]
        },
        {
            codTurma: 123,
            nomeTurma: "Prog WEB",
            alunos: [
                {
                    matricula: 123,
                    nome: "Joao",
                    notas: [10, 10, 10],
                    media: 10                    
                },
                {
                    matricula: 124,
                    nome: "Pedro",
                    notas: [10, 10, 10],
                    media: 10                    
                }
            ]
        }
    ]

    for (let turma of turmas) {
        if (turma.codTurma === codigoAtual) {
            turma.alunos.push(new Aluno(nome, ))
        }   
    }

    localStorage.setItem("turmas", JSON.stringify(turmas))
})


let turmas = localStorage.getItem("turmas")

// Fechar pop-up no botão salvar 

document.querySelector(".salvarAluno").addEventListener("click", () => {
    document.querySelector("#id01").style.display = "none"
})