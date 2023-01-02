export function Slider() {
  return (
    <div className="container-fluid">
      <div id="mainSlider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators mb-3">
          <li
            data-target="#mainSlider"
            data-slide-to="0"
            className="active"
          ></li>

          <li data-target="#mainSlider" data-slide-to="1"></li>

          <li data-target="#mainSlider" data-slide-to="2"></li>

          <li data-target="#mainSlider" data-slide-to="3"></li>

          <li data-target="#mainSlider" data-slide-to="4"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              // src="https://source.unsplash.com/random/1920x1080/?igreja/" //random image
              src="https://images.unsplash.com/photo-1481142889578-dda440dacfe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTI4NjQ5Mnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1920&q=60"
              className="w-full d-block brightness-50"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Vamos à casa do Senhor?!</h2>
              <p></p>
              <a href="#" className="main-btn">
                Confira a programação dessa semana
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/collection/490148/1920x1080/"
              className="d-block w-full brightness-50"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Culto de Oração</h2>
              <p>Participe conosco desse momento toda quinta-feira, às 19h30</p>
              <a href="#" className="main-btn">
                Saiba mais
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/collection/3493237/1920x1080/"
              className="d-block w-full brightness-50"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Culto de Adoração</h2>
              <p>Momento de adoração e louvor, todo sábado, às 19h30</p>
              <a href="#" className="main-btn">
                Saiba mais
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/collection/8362155/1920x1080/"
              className="d-block w-full brightness-50"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block ">
              <h2 className="">Escola Bíblica Dominical</h2>
              <p>Estude a Palavra de Deus conosco, todo domingo, às 9h00</p>
              <a href="#" className="main-btn">
                Confira o estudo da semana
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/collection/11571012/1920x1080/"
              className="d-block w-full brightness-50"
              alt=""
              //
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Culto Evangelístico</h2>
              <p>Você é nosso convidado, todo domingo, às 19h30</p>
              <a href="#" className="main-btn">
                Saiba mais
              </a>
            </div>
          </div>
        </div>

        <a
          href="#mainSlider"
          className="carousel-control-prev"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>

        <a
          href="#mainSlider"
          className="carousel-control-next"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
