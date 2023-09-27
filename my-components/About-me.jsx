function Aboutme() {
  return (
    <section id="aboutMe" className="myservice">
      <div className="container">
        <div className="row text-center">
          <h3 className="display-3 fw-bold">Sobre mí</h3>
          <div className="heading-line pb-2"></div>

          {/*DESCRIPTIONS COLUMS */}
          <div className="container">
            <div className="row pt-2 pb-2 mt-5 mb-3">
              <div className="col-md-6">
                <p className=" fw-bold text-center display-6 py-4">
                  ¿Cuáles son mis objetivos?{" "}
                </p>
              </div>
              <div className="col-md-6">
                <p className="fw-light text-start lead p-border px-4 pb-5">
                  He trabajado siempre con el mismo objetivo, anticipar
                  problemas y dar soluciones innovadoras a éstos. Estoy en
                  constante aprendizaje por lo que mi objetivo es un puesto
                  desafiante y dinámico donde pueda seguir sumando nuevos
                  conocimientos sobre nuevas tecnologías.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
