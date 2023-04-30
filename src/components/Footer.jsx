import React from 'react'

const Footer = () => {
    return (

        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block ">
                    <span style={{fontSize:"2rem"}}>Bize Ulaşın</span>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>BANAUSTA
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Kurumsal
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Hakkımızda</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Kariyer</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Teknoloji Kariyeri</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">İletişim</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Gizlilik ve Kullanım
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Sıkça Sorulan Sorular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Kişisel Verilerin Korunması</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Gizlilik ve Çerez Bildirimi</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Kullanım Koşulları</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Sorun Bildir</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Bize Ulaşın</h6>
                            <p><i className="fas fa-home me-3"></i> İstiklal Cad. Hür Sokak No: 2/4 Orhangazi Pendik İstanbul</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> +90 (539) 939 0737</p>
                            <p><i className="fas fa-print me-3"></i> +90 (216) 510 3232</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                © 2023 Banausta. Tüm Hakları Saklıdır.
            </div>
        </footer>
    )
}

export default Footer;