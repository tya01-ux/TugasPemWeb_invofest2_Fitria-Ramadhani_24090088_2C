import Button from "../components/ui/Button";

export default function Workshop() {
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
                            IT Workshop
                        </h1>

                        <p
                            data-aos="fade-right"
                            data-aos-delay="400"
                            className="text-[#7A1E3A] text-lg sm:text-xl font-medium"
                        >
                            “AI for a Sustainable Future: The Role of Z Generation in the Digital Era”
                        </p>
                    </div>

                    <p>
                        IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk 
                        menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk 
                        mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
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