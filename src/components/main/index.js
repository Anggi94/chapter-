import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './style.css';
import Body from './assets/img_car@2x.png'
const Main = () => {

    const location = useLocation();
    const navigate = useNavigate();
    return (
        <main className="main">
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                                <p>
                                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                                    kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                                    kebutuhanmu untuk sewa mobil selama 24 jam.
                                </p>
                                <a className={location.pathname !== "/" ? "d-none" : "btn btn-success button "} href="/CariMobil">Mulai Sewa Mobil </a>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-thumbnail">
                    <img src={Body} alt="" />
                </div>
            </section>
        </main>
    );
};
export default Main;