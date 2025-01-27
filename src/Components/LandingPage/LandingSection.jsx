const LandingSection = ({title}) => {
    return (
        <>
            <div>
                <h2 className="text-start">{title}</h2>
                <hr className="border-success border-5"/>
                <p className="text-start">Este módulo se centra en el uso de <strong>React</strong>, incluyendo la
                    creación
                    de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso
                    de <strong>Redux</strong>.</p>
            </div>
        </>
    )
}
export default LandingSection