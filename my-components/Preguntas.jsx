import ButtonAcordeon from "./Button-acordeon";

function Faq() {
  return (
    <section id="faq" className="faq container">
      <div className="row faq__title">
        <h3 className="display-3 fw-bold">Mis habilidades</h3>
        <div className="heading-line pb-5"></div>
      </div>

      <ButtonAcordeon
        title="¿Qué puedo aportar?"
        text="Poseo una gran capacidad de autogestión en proyectos independientes y también excelentes habilidades de <strong>trabajo en equipo.</strong>  Me considero una persona <strong>organizada, resolutiva y proactiva.</strong> Además dispongo de una <strong>gran fluidez comunicativa, mentalidad de crecimiento y excelente capacidad de resolución.</strong>"
      />

      <ButtonAcordeon
        title="¿Por qué contratarme?"
        text="Estoy seguro de que mis habilidades les generarán un beneficio porque soy <strong> capaz de resolver problemas y lograr los objetivos que me propongo.</strong>
        Además me encantan los retos. Tengo muchas ganas de aprender y seguir creciendo tanto a nivel personal como profesional."
      />
    </section>
  );
}

export default Faq;
