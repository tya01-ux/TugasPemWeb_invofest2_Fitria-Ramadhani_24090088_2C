import Button from "../components/ui/Button";

export default function Talkshow() {
    return (
        <div>
            <section
                            id="hero"
                            className="py-10 flex gap-10 justify-between items-center "
                        >
                            <div className="w-2/3 flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <h1
                                        data-aos="fade-right"
                                        data-aos-delay="300"
                                        className="text-[#7A1E3A] font-bold text-3xl sm:text-4xl lg:text-5xl"
                                    >
                                        IT Talkshow
                                    </h1>
            
                                    <p
                                        data-aos="fade-right"
                                        data-aos-delay="400"
                                        className="text-[#7A1E3A] text-lg sm:text-xl font-medium"
                                    >
                                       “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
                                    </p>
                                </div>
            
                                <p>
                                    Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” 
                                    Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan nilai-nilai 
                                    kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan. 
                                    yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif 
                                    yang memperkuat potensi unik manusia, bukan sebagai penggantinya.
                                </p>
            
                                {/* Button */}
                                <div className="flex gap-3">
                                    <Button label="Daftar Sekarang" variant="primary" />
                                </div>
                            </div>
                            <div className="w-1/3">
                                <img
                                    src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
                                    alt=""
                                />
                            </div>
            
                        </section>
        </div>
    );
}   