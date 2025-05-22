window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnLimpar").addEventListener("click", () => {
        if (confirm("Deseja realmente apagar todos os dados de senhas?")) {
            localStorage.removeItem("senhas");
            container.innerHTML = "<p>Todos os dados foram apagados.</p>";
        }
    });
    
    const container = document.getElementById("relatorioContainer");
    const dados = localStorage.getItem("senhas");
    if (!dados) {
        container.innerHTML = "<p>Nenhuma senha registrada.</p>";
        return;
    }

    const senhas = JSON.parse(dados);

    let total = senhas.length;
    let atendidas = senhas.filter(s => s.status === "Atendida");
    let naoAtendidas = senhas.filter(s => s.status !== "Atendida");

    let contagemTipos = { SP: 0, SG: 0, SE: 0 };
    senhas.forEach(s => contagemTipos[s.tipo]++);

    let html = `
        <h2>Resumo</h2>
        <p>Total de senhas: ${total}</p>
        <p>Atendidas: ${atendidas.length}</p>
        <p>Não atendidas: ${naoAtendidas.length}</p>
        <p>SP: ${contagemTipos.SP} | SG: ${contagemTipos.SG} | SE: ${contagemTipos.SE}</p>
        <hr>
        <h2>Detalhes</h2>
        <table>
            <thead>
                <tr>
                    <th>Senha</th><th>Tipo</th><th>Emitida</th><th>Atendida</th><th>Guichê</th><th>Tempo</th><th>Status</th>
                </tr>
            </thead>
            <tbody>
    `;

    senhas.forEach(s => {
        html += `
            <tr>
                <td>${s.senha}</td>
                <td>${s.tipo}</td>
                <td>${s.emitida}</td>
                <td>${s.chamada ?? '-'}</td>
                <td>${s.guiche ?? '-'}</td>
                <td>${s.tempo ?? '-'}</td>
                <td>${s.status}</td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
});
