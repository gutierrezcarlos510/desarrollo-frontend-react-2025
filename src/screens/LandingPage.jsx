import LandingSection from "../Components/LandingPage/LandingSection.jsx";
import LandingRecurso from "../Components/LandingPage/LandingRecurso.jsx";
import LandingTable from "../Components/LandingPage/LandingTable.jsx";

const LandingPage = ()=>{
    return (
        <>
            <div className="alert alert-success mt-4 mb-2">
                <h1 className="display-4">Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            </div>
            <LandingSection title="Bienvenido" />
            <LandingTable title="Temas Cubiertos"/>
            <LandingRecurso title="Recursos Adicionales" />
            <hr className="mt-5"/>
            <div className="text-center">
                <span>© 2025 Modulo 7. USIP</span>
            </div>
        </>
    )
}
export default LandingPage