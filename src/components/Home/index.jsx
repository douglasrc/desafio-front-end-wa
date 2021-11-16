import "./style.css";
export function Home() {
  return (
    <section className="home-container">
      <section className="home-content">
        <div className="home-info">
          <h1>Questionario de Conhecimentos Gerais</h1>
          <p>
            Antes de iniciar, coloque seu nome e o numero de questões que deseja
            responder.
          </p>
        </div>
        <div className="home-form">
          <form>
            <label>Nome</label>
            <input type="text" />

            <label>Numero de Questões</label>
            <input type="number" />
          </form>
        </div>
      </section>
    </section>
  );
}
