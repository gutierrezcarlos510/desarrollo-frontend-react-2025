const LandingTable = ({title}) => {
    return (
        <>
            <div>
                <h2 className="text-start">{title}</h2>
                <hr className="border-success border-5"/>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>
                            Componentes funcionales y de clase
                        </td>
                        <td>
                            Uso de <strong>React hooks</strong> como useState y useEffect
                        </td>
                        <td>
                            Creación de <strong>custom hooks</strong> como userForm
                        </td>
                        <td>
                            Gestión de variables de estado con <strong>useState</strong>
                        </td>
                        <td>
                            Gestión de variables de estado con <strong>Redux</strong>
                        </td>
                        <td>
                            Integración de <strong>Redux</strong> con <strong>React</strong>
                        </td>
                        <td>
                            Manejo de <strong>Formularios en React</strong>
                        </td>
                        <td>
                            Publicando nuestra <strong>Pagina</strong> con <strong>GitHub Pages</strong>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default LandingTable;