import ButtonAcordeon from "./Button-acordeon";

function Faq() {
  return (
    <section id="faq" className="faq container">
      <div className="row faq__title">
        <h3 className="display-3 fw-bold">FAQ?</h3>
        <div className="heading-line"></div>
      </div>

      <p className="faq__subtitle lead mt-2 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <ButtonAcordeon />
      {/* <Accordion className="buttonACordeon">
        <Accordion.Item>
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>*/}
    </section> 
  );
}

export default Faq;
