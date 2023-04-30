import logo1 from '../assets/image-1.png'
import logo2 from '../assets/image-2.png'
import logo3 from '../assets/image-3.png'
import logo4 from '../assets/image-4.png'

const Middle = () => {
    return (
        <>
        <div className="mb-4 mt-5 d-flex " style={{ height: "35rem", backgroundColor:"#F7F7F7" }}>
            <div className="container d-flex justify-content-center align-items-center">
                    <div className='p-3'>
                        <img width={300} src={logo1} alt="" />
                    </div>
                    <div className=" ms-5">
                        <p className="fw-bold mt-5" style={{ fontSize: "2rem" }}>Aradığınız ustaya saniyeler
                            içinde ulaşın.</p>
                        <p className="fs-5">Banausta.com ile bulunduğunuz ilçe, çevrenizdeki ilçeler veya konumunuzun etrafındaki Ustaların adreslerine ve telefon bilgilerine saniyeler içinde ulaşabilirsiniz.</p>
                </div>
            </div>
        </div>

        <div className="mt-5 mb-4 " style={{ height: "35rem" }}>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className='p-3'>
                        <img width={300} src={logo2} alt="" />
                    </div>
                    <div className="ms-5">
                        <p className="fw-bold mt-5" style={{ fontSize: "2rem" }}>Evinize bilinen bir kişiyi
                            güvenle çağırın.</p>
                        <p className="fs-5">Banausta.com ile ulaştığınız bütün ustaların, adres, telefon, vergi levhası ve kimlik bilgileri doğrulanmıştır. Sadece telefon numarasını bildiğiniz belirsiz kişilerle muhatap olmazsınız.</p>
                </div>
            </div>
        </div>

            <div className="mt-5  mb-4 " style={{ height: "35rem", backgroundColor: "#F7F7F7" }}>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className='p-3'>
                        <img width={320} src={logo3} alt="" />
                    </div>
                    <div className="ms-5">
                        <p className="fw-bold mt-5" style={{ fontSize: "2rem" }}>Ustalık ve güler yüz ile
                            hizmet alın.</p>
                        <p className="fs-5">Banausta.com müşteri yorumları hizmet alan gerçek müşteriler tarafından yapılır. Tüm yorumları tek tek kontrol ederiz. Usta puanları verilirken işçilik kalitesi, zamanında gelme, işi ustalıkla tamamlama, temizlik ve Güler yüz gibi hususları göz önünde bulundururuz.</p>
                </div>
            </div>
        </div>

        <div className="mt-5  mb-5 " style={{ height: "35rem" }}>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className='p-3'>
                        <img width={300} src={logo4} alt="" />
                    </div>
                <div className="ms-5">
                        <p className="fw-bold mt-5" style={{ fontSize: "2rem" }}>Doğrudan, istediğiniz sayıda
                            teklif alın. <br /> Bütçenize destek olun.</p>
                        <p className="fs-5">Banausta web uygulamamız ile istediğiniz sayıda, istediğiniz lokasyonda bulunan gerçek usrtalardan aracısız doğrudan teklif alabilirsiniz. En rekabetçi fiyata ulaşabilirsiniz.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Middle