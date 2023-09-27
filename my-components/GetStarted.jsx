import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
const checkList = <FontAwesomeIcon icon={faCheck} />;

const GetStarted = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="get-started">
      <div className="container">
        <div id="getstarted"  className="row text-center">
          <h1 className="display-3 text-capitalize fw-bold">Iniciemos juntos!</h1>
          <div className="heading-line pb-5"></div>
          
        </div>

        {/**SECTION INBOX*/}
        <div className=" row text-white ">
          <div className="col-12 col-lg-6 gradient shadow p-3">
            <div className="cta-info ">
              <h4 className="display-4 fw-bold">
                100% Satisfacción Garantizada 
              </h4>
              <p className="lh-lg">
                {" "}
                ¿Te gustaría tener una página web para tu negocio y potenciar tus ventas pero no sabés por dónde empezar? Estás en el lugar correcto.
              </p>
              <h3 className="display-3--brief">¿Cuál es el siguiente paso?</h3>
              <ul className="cta-info__list">
                <li>
                  {" "}
                  <span>{checkList}</span> Envíame tu idea
                </li>
                <li>
                  {" "}
                  <span>{checkList}</span> Armemos un plan juntos
                </li>
                <li>
                  {" "}
                  <span>{checkList}</span> Hagámoslo realidad
                </li>
              </ul>
            </div>
          </div>
          {/**SECOND COLUM - FORM */}
          <div className="col-12 col-lg-6 bg-white shadow p-3">
            <div className="form w-100 pb-2">
              <h4 className="display-3--title mb-5">Inicia tu proyecto</h4>

              <form onSubmit={handleSubmit(onSubmit)} className="row ">
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    placeholder="Nombre"
                    id="inputFirsName"
                    className="form-control form-control-lg"
                    {...register("Nombre", { required: true })}
                  />

                  {errors.FirstName?.type === "required" && (
                    <p className="warning">el campo es requerido</p>
                  )}
                </div>
                <div className="col-lg-6 mb-3 ">
                  <input
                    type="text"
                    placeholder="Apellido"
                    id="inputLastName"
                    className="form-control form-control-lg"
                    {...register("Apellido", { required: true })}
                  />
                  {errors.LastName?.type === "required" && (
                    <p className="warning">el campo es requerido</p>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="email"
                    id="inpuEmail"
                    className="form-control form-control-lg"
                    {...register("email", {
                      pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                    })}
                  />
                  {errors.email?.type === "pattern" && (
                    <p className="warning">el formato del email es invalido</p>
                  )}
                </div>
                <div className="mb-3">
                  <textarea
                    placeholder="Mensaje"
                    name="Mensaje"
                    id="Mensaje"
                    cols="30"
                    rows="8"
                    className="form-control"
                    {...register("Mensaje", { maxLength: 100 })}
                  ></textarea>
                  {errors.Message?.type === "maxLength" && (
                    <span className="warning">
                      el campo es debetener menos de 100 caracteres
                    </span>
                  )}
                </div>
                <div className="text-center d-grid mt-1">
                  <button
                    className="btn btn-primary rounded-pill pb-3"
                    type="submit"
                  >
                    Enviar <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
