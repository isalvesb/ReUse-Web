export default function RecuperarSenha() {
    return (
        <main>
            <h1>Recuperar senha</h1>

            <p>
                Digite seu e-mail para receber as instruções.
            </p>

            <form>
                <input
                    type="email"
                    placeholder="Seu e-mail"
                />

                <button type="submit">
                    Enviar
                </button>
            </form>
        </main>
    );
}