export default async function PerfilVisitante({ params }) {
    const { id } = await params;

    return (
        <main>
            <h1>Perfil do usuário</h1>

            <p>ID do usuário: {id}</p>
        </main>
    );
}