import "../static/loading.css";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="desk-animation">
        <img src="/images/matcha.png" alt="matcha" />
        <img src="/images/notebook.png" alt="notebook" />
        <img src="/images/laptop.png" alt="laptop" />
      </div>

      <p className="loading-text">Setting up Katie’s desk space…</p>
    </div>
  );
}
