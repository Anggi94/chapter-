import React from 'react';
import './style.css';
const Banner = (props) => {
    return (
        <main>
        <section className="cta-banner">
        <div className="container">
          <div className="cta-body">
            <h1>Sewa Mobil di Sekarang</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. </p>
            <a href="http://" className="btn btn-primary">Mulai Sewa Mobil</a>
          </div>
        </div>
      </section>
  
      <section className="faq" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="faq-head">
                <h3>Frequently Asked Question</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="accordion" id="accordionExample">
                <div className="accordion-border">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        Apa saja syarat yang dibutuhkan?
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error accusamus, exercitationem
                        tempora
                        itaque sunt doloribus nihil officiis dolores fugiat.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-border">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        Berapa hari minimal sewa mobil lepas kunci?
                      </button>
                    </h2>
                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error accusamus, exercitationem
                        tempora
                        itaque sunt doloribus nihil officiis dolores fugiat.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-border">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                      </button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error accusamus, exercitationem
                        tempora
                        itaque sunt doloribus nihil officiis dolores fugiat.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-border">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Apakah Ada biaya antar-jemput?
                      </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error accusamus, exercitationem
                        tempora
                        itaque sunt doloribus nihil officiis dolores fugiat.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-border">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading5">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        Bagaimana jika terjadi kecelakaan
                      </button>
                    </h2>
                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error accusamus, exercitationem
                        tempora
                        itaque sunt doloribus nihil officiis dolores fugiat.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    );
};
export default Banner;