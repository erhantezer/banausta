import React from 'react'

const Accordion = () => {
    return (
        
        <div className="accordion container mb-5 mt-5 " id="accordionExample">
            <div className='mb-5' >
                <h2 style={{ fontSize: "3rem" }}>Sıkça Sorulan Sorular</h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed fs-5 fw-normal text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Banausta’yı kimler kullanabilir?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                    <div className="accordion-body">
                        18 yaşını doldurmuş herkes kullanabilir.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed fs-5 fw-normal text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Banausta ile usta bulmak ücretli mi?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Hayır, hiçbir ücret ödemeden aradığınız ustaya ulaşabilirsiniz.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed fs-5 fw-normal text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Banausta’ya üye olmak zorunda mıyım?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Hayır. Üye olmadan da arama yapabilirsiniz.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed fs-5 fw-normal text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Banausta’ya üye olmanın avantajları nelerdir?
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Üye olarak beğendiğiniz ustaları favori listenize ekleyebilirsiniz. İhtiyaç halinde zaman kaybetmeden ustanıza ulaşabilirsiniz. Ayrıca üyeler iş yaptırdıkları ustalar hakkında yorumda bulunabilirler.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed fs-5 fw-normal text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Üye olmak için hangi bilgilerin verilmesi gerekiyor?
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Adınız, soyadınız, e-mail adresiniz ve telefon numaranız.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed fs-5 fw-normal text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Üyelik bilgilerim ustalar ile veya üçüncü şahıslar ile paylaşılır mı?
                    </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Hayır, üyelik bilgileri kişisel verilerin korunması kanununa uygun olarak banausta tarafından saklanır ve 3. şahıslarla paylaşılmaz, satılmaz.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Accordion