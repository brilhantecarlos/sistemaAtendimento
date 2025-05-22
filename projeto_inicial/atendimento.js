const sistema = (function () {
    let senhas = [];
    let painel = document.getElementById("painel");
    let painelSenhas = [];
    let sequence = { SP: 0, SG: 0, SE: 0 };
    let ultimaData = null;
    let ultimaSenhaTipo = null;

    function resetarSequenciasSeNovaData() {
        const hoje = new Date().toISOString().slice(0, 10);
        if (hoje !== ultimaData) {
            sequence = { SP: 0, SG: 0, SE: 0 };
            ultimaData = hoje;
        }
    }

    function definirPrioridade() {
        if (ultimaSenhaTipo === null || ultimaSenhaTipo === 'SG' || ultimaSenhaTipo === 'SE') {
            return 'SP';
        } else {
            return Math.random() < 0.5 ? 'SG' : 'SE';
        }
    }

    function gerarSenha(tipo) {
        resetarSequenciasSeNovaData();

        sequence[tipo]++;
        const data = new Date();
        const seq = sequence[tipo].toString().padStart(2, '0');
        const senha = `${data.getFullYear().toString().slice(-2)}${String(data.getMonth() + 1).padStart(2, '0')}${String(data.getDate()).padStart(2, '0')}-${tipo}${seq}`;

        const registro = {
            senha,
            tipo,
            emitida: data.toLocaleString(),
            chamada: null,
            guiche: null,
            tempo: null,
            status: "Não atendida"
        };

        senhas.push(registro);
        salvarSenhasLocal();
        return senha;
    }

    function salvarSenhasLocal() {
        localStorage.setItem("senhas", JSON.stringify(senhas));
    }

    function carregarSenhasLocal() {
        const dados = localStorage.getItem("senhas");
        if (dados) {
            senhas = JSON.parse(dados);
        }
    }

    function tipoParaTempo(tipo) {
        if (tipo === 'SP') return '15 min';
        if (tipo === 'SG') return '5 min';
        if (tipo === 'SE') return '1 min';
        return '-';
    }

    function chamarSenha() {

        const tiposPrioridade = ['SP', 'SG', 'SE'];
        let prioridade = definirPrioridade();

        let senhaObj = senhas.find(s => s.tipo === prioridade && s.status === "Não atendida");

        if (!senhaObj) {
            for (let tipo of tiposPrioridade) {
                senhaObj = senhas.find(s => s.tipo === tipo && s.status === "Não atendida");
                if (senhaObj) break;
            }
        }

        if (!senhaObj) return;

        senhaObj.status = "Atendida";
        senhaObj.chamada = new Date().toLocaleString();
        senhaObj.guiche = `Guichê ${Math.floor(Math.random() * 5) + 1}`;
        senhaObj.tempo = tipoParaTempo(senhaObj.tipo);
        ultimaSenhaTipo = senhaObj.tipo;
        salvarSenhasLocal();

        painelSenhas.push(senhaObj.senha);
        painel.innerText = painelSenhas.join(" | ");
    }

    return {
        pedirSenha: function () {
            const tipos = ['SP', 'SG', 'SE'];
            const tipo = tipos[Math.floor(Math.random() * tipos.length)];
            const senha = gerarSenha(tipo);
            alert(`Senha emitida: ${senha}`);
        },
        chamarSenha,
        carregarSenhasLocal
    };
})();

window.addEventListener("DOMContentLoaded", () => {
    sistema.carregarSenhasLocal();

    document.getElementById("btnCliente").addEventListener("click", () => {
        sistema.pedirSenha();
        sistema.chamarSenha();
    });
});
