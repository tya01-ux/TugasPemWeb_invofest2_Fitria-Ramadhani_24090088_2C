import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-200 text-gray-700 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* LOGO + DESC */}
        <div>
          <h2 className="text-2xl font-bold text-rose-800 mb-3">
            INVOFEST
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Informatics Vocational Festival sebagai wadah untuk
            mengembangkan kreativitas, inovasi, dan kolaborasi
            generasi muda di bidang teknologi.
          </p>
        </div>

        {/* MENU NAVIGASI */}
        <div>
          <h3 className="font-semibold mb-3">MENU NAVIGASI</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/seminar">Seminar</Link></li>
            <li><Link to="/competition">Competition</Link></li>
            <li><Link to="/workshop">Workshop</Link></li>
            <li><Link to="/talkshow">Talkshow</Link></li>
          </ul>
        </div>

        {/* SOSIAL MEDIA */}
        <div>
          <h3 className="font-semibold mb-3">IKUTI KAMI</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>

        {/* MAP */}
        <div>
          <h3 className="font-semibold mb-3">ALAMAT</h3>
          <div className="w-full h-32 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Politeknik%20Harapan%20Bersama%20Tegal&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="border-t border-rose-300 mt-10 pt-4 text-center text-sm text-gray-600">
        © 2025 INVOFEST. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;