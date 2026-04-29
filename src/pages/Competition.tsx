import { Button } from "../components/ui/Button";

export default function Competition() {
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
              IT Competition
            </h1>

            <p
              data-aos="fade-right"
              data-aos-delay="400"
              className="text-[#7A1E3A] text-lg sm:text-xl font-medium"
            >
              "From Creation to Innovation"
            </p>
          </div>
          <p className="font-lg">
            Kompetisi dalam INVOFEST ini mengusung tema{" "}
            <b className="font-bold">"From Creation to Innovation"</b>
            ,Tema ini bertujuan mengajak generasi muda untuk mengembangkan
            inovasi dan kreativitas guna membentuk kelompok yang memiliki
            potensi luar biasa, yang mampu mewujudkan masa depan yang
            berkelanjutan.
          </p>

          {/* Buton */}
          <div className="flex gap-3">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
