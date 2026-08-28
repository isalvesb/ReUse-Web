import Header from "@/components/Header";

export default function EditarPerfil() {
    return (
        <>
            <Header />

            <main>
                <h1>Editar perfil</h1>

                <form>
                    <label>
                        Nome
                        <input type="text" />
                    </label>

                    <label>
                        E-mail
                        <input type="email" />
                    </label>

                    <label>
                        Bio
                        <textarea />
                    </label>

                    <button type="submit">
                        Salvar alterações
                    </button>
                </form>
            </main>
        </>
    );
}