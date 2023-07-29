function Footer() {
  let email = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-mail-opened"
      viewBox="0 0 24 24"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
      <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
      <path d="M3 19l6 -6" />
      <path d="M15 13l6 6" />
    </svg>
  );
  let linkedin = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-linkedin"
      viewBox="0 0 24 24"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M8 11l0 5" />
      <path d="M8 8l0 .01" />
      <path d="M12 16l0 -5" />
      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
    </svg>
  );

  let location = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-map-2"
      viewBox="0 0 24 24"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
      <path d="M9 4v13" />
      <path d="M15 7v5.5" />
      <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
      <path d="M19 18v.01" />
    </svg>
  );

  let github = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-github"
      viewBox="0 0 24 24"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  );

  return (
    <section className="footer" id="footer">
      <div className="container">
        <div className="row">
          {/*content for GitHub*/}
          <div className="col-lg-3 col-md-3 contact-box pt-1 d-lg-flex d-flex d-sm-block">
            <div className="contact-box__icon">{github}</div>
            <div className="contact-box__info">
              <a
                href="https://github.com/jonabenitez "
                target="_blank"
                className="contact-box__info--title" rel="noreferrer"
              >
                GitHub
              </a>
              <p className="contact-box__info--subtitle">jonabenitez</p>
            </div>
          </div>

          {/*content for LOCATION*/}
          <div className="col-lg-3 col-md-3 contact-box pt-1  d-lg-flex d-flex d-sm-block">
            <div className="contact-box__icon">{location}</div>
            <div className="contact-box__info">
              <a
                href="https://goo.gl/maps/whVn8XMqfxFS4hxs9"
                target="_blank"
                className="contact-box__info--title"
                rel="noreferrer"
              >
                Jopolo-Italy
              </a>
              <p className="contact-box__info--subtitle">calle falsa 123</p>
            </div>
          </div>

          {/*content for lINKEID*/}
          <div className="col-lg-3 col-md-3 contact-box pt-1  d-lg-flex d-flex d-sm-block">
            <div className="contact-box__icon">{linkedin}</div>
            <div className="contact-box__info">
              <a
                href="www.linkedin.com/in/jonatan-benitez-0ab0a0107"
                target="_blank"
                className="contact-box__info--title"
              >
                Linkedin
              </a>
              <p className="contact-box__info--subtitle">Jonatan Benitez</p>
            </div>
          </div>

          {/*content for MAIL*/}
          <div className="col-lg-3 col-md-3 contact-box pt-1  d-lg-flex d-flex d-sm-block">
            <div className="contact-box__icon ">{email}</div>
            <div className="contact-box__info">
              <a href="" className="contact-box__info--title" target="_blank">
                Email
              </a>
              <p className="contact-box__info--subtitle">
                jona.benitez096@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
