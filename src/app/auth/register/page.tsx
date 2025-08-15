export default function Register() {
  return (
    <main>
      <h1>Registro</h1>
      <form>
        <input type="text" placeholder="Nombre" /><br />
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Contraseña" /><br />
        <button type="submit">Crear cuenta</button>
      </form>
    </main>
  );
}
