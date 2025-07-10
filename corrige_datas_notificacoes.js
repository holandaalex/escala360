const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("Escala360-melhorias/db/escala360.db");

// Regex para encontrar datas yyyy-mm-dd
const regex = /(no plantão de )([0-9]{4})-([0-9]{2})-([0-9]{2})/g;

function atualizarMensagens() {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT id, mensagem FROM notificacoes WHERE mensagem LIKE '%no plantão de 2%'",
      (err, rows) => {
        if (err) return reject(err);
        let pendentes = 0;
        let feitos = 0;
        rows.forEach(({ id, mensagem }) => {
          const novaMensagem = mensagem.replace(
            regex,
            (match, prefixo, ano, mes, dia) => {
              return `${prefixo}${dia}/${mes}/${ano}`;
            }
          );
          if (novaMensagem !== mensagem) {
            pendentes++;
            db.run(
              "UPDATE notificacoes SET mensagem = ? WHERE id = ?",
              [novaMensagem, id],
              (err) => {
                if (err)
                  console.error("Erro ao atualizar notificação", id, err);
                else console.log("Notificação atualizada:", id);
                feitos++;
                if (feitos === pendentes) resolve();
              }
            );
          }
        });
        if (pendentes === 0) resolve();
      }
    );
  });
}

atualizarMensagens().then(() => db.close());
