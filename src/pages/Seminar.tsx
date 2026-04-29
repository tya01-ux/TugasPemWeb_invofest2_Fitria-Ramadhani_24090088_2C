import { Button } from "../components/ui/Button";
import { Collapse } from "../components/ui/Collapse";
import { SpeakerCard } from "../components/ui/SpeakerCard";

export default function Seminar() {
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
              IT Seminar
            </h1>

            <p
              data-aos="fade-right"
              data-aos-delay="400"
              className="text-[#7A1E3A] text-lg sm:text-xl font-medium"
            >
              “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan
              Kompetitif”
            </p>
          </div>

          <p>
            Seminar nasional yang membahas strategi dan arsitektur teknologi
            untuk menciptakan sistem di mana manusia dan AI bekerja sebagai
            mitra yang sinergis.Yang bertujuan mengubah paradigma dari
            persaingan menjadi kolaborasi, serta meningkatkan pengetahuan
            peserta dalam merancang teknologi AI yang berpusat pada manusia.
          </p>

          {/* Button */}
          <div className="flex gap-3">
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
            alt=""
          />
        </div>
      </section>

      <section id="speaker" className="py-16">
        <h2 className="text-3xl font-bold text-center text-red-900 mb-10">
          Temui Pembicara Khusus Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <SpeakerCard
            name="Dery Agung Triyadi"
            role="AWS Indonesia"
            imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png"
          />

          <SpeakerCard
            name="Sowam Habibi"
            role="Google Indonesia"
            imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="text-center mb-10">
          <p className="text-gray-500 uppercase">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-800">
            Punya Pertanyaan? Lihat <span className="text-red-900">Disini</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Ada banyak informasi yang terkait dengan INVOFEST
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kiri */}
          <div className="flex flex-col gap-6">
            <Collapse
              title="Apa itu INVOFEST?"
              description="Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan 
              oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan 
              untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital."
            />
            <Collapse
              title="Kapan dan dimana INVOFEST dilaksanakan?"
              description="INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 
              November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 
              Universitas Harkat Negeri dan kompetisi diadakan secara Online."
            />
            <Collapse
              title="Apakah ada biaya pendaftaran di INVOFEST?"
              description="Semua kegiatan dipastikan berbayar ya teman-teman"
            />
          </div>

          {/*Kanan*/}
          <div className="flex flex-col gap-6">
            <Collapse
              title="Bagaimana saya mengetahui pemenang kompetisi?"
              description="Pemenang akan diinformasikan melalui media sosial instagram dari invofest 
              @invofest_harkatnegeri."
            />
            <Collapse
              title="Apa yang didapat pemenang dalam kompetisi?"
              description="Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat."
            />
            <Collapse
              title="Bagaimana cara mendaftar event?"
              description="Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda 
              ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu 
              eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka 
              akan diarahkan ke google form pengisian pendaftaran event yang diikuti."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
