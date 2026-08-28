import Header from "@/components/Header";

export default function PublicarItem() {
    return (
        <>
            <Header />

            <main>
                <h1>Publicar item</h1>

                <form>
                    <label>
                        Nome do item
                        <input type="text" />
                    </label>

                    <label>
                        Descrição
                        <textarea />
                    </label>

                    <label>
                        Categoria
                        <select>
                            <option>Selecione</option>
                            <option>Móveis</option>
                            <option>Eletrônicos</option>
                            <option>Roupas</option>
                            <option>Livros</option>
                        </select>
                    </label>

                    <label>
                        Estado do item
                        <select>
                            <option>Novo</option>
                            <option>Bom estado</option>
                            <option>Usado</option>
                        </select>
                    </label>

                    <button type="submit">
                        Publicar item
                    </button>
                </form>
            </main>
        </>
    );
}