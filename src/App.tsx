import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Check, 
  X,
  Image as ImageIcon,
  MessageSquare,
  Code,
  ArrowDown,
  Sparkles,
  Award,
  GraduationCap,
  Briefcase,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Globe,
  Star,
  FileText,
  Folder
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  detailedDesc: string;
  year: string;
  tags: string[];
  image: string;
  link?: string;
  accentColor: string;
  themeColor: string;
  isCosmetics?: boolean;
}

interface OrganizationDoc {
  orgName: string;
  title: string;
  image: string;
  caption: string;
  period: string;
  role: string;
  highlights: string[];
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId: string;
  accent: string;
  desc: string;
  category: string;
  image: string;
  link: string;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeMenuSection, setActiveMenuSection] = useState('pembuka');

  const projects: Project[] = [
    {
      id: 'skin-analyz',
      title: 'SkinAnalyz',
      subtitle: 'Platform Rekomendasi Skincare',
      desc: 'Mendeteksi tipe kulit wajah (oily, kering, normal) melalui kamera, menyajikan analisis mendalam, serta memberi rekomendasi produk ideal.',
      detailedDesc: 'SkinAnalyz dirancang khusus sebagai solusi digital pintar bagi pencari produk skincare yang tepat. Menggunakan analisis tekstur kulit wajah, sistem merekomendasikan produk seperti facewash, toner, pelembab, dan sunscreen terbaik berbasis database produk yang akurat.',
      year: '2025',
      tags: ['React', 'Figma', 'Computer Vision', 'Tailwind CSS'],
      image: '/src/assets/images/skinalyze_banner_1782230080861.jpg',
      link: 'https://github.com/Kholilaaaaaa',
      accentColor: '#00A2FF',
      themeColor: 'from-blue-600/30 via-slate-900 to-[#04080F]',
      isCosmetics: true
    },
    {
      id: 'dimsum-wings',
      title: 'Dimsum Wings Tegal',
      subtitle: 'Website Profil UMKM Tegal',
      desc: 'Membangun platform informasi bisnis interaktif untuk meningkatkan pemasaran digital, memperkuat branding, dan memperluas audiens kuliner lokal.',
      detailedDesc: 'Proyek website responsif profesional untuk meningkatkan branding digital kuliner lokal Tegal ke ranah digital. Mempublikasikan katalog menu terperinci, lokasi cabang fisik, testimoni pelanggan, serta integrasi pemesanan interaktif langsung via WhatsApp.',
      year: '2024',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Branding'],
      image: '/src/assets/images/dimsum_wings_logo_1782230105326.jpg',
      link: 'https://github.com/Kholilaaaaaa',
      accentColor: '#EF4444',
      themeColor: 'from-red-600/20 via-slate-900 to-[#04080F]'
    },
    {
      id: 'fitness-app',
      title: 'Aplikasi Pusat Kebugaran',
      subtitle: 'Gym Monitoring & Tracker UI',
      desc: 'Sistem monitoring aktivitas member gym, pelacakan kehadiran harian, program latihan kustom, virtual card, serta dashboard statistik pembakaran kalori.',
      detailedDesc: 'Rancangan platform mobile komprehensif untuk pengelola kebugaran dan member aktif. Menampilkan integrasi registrasi member lewat QR Code, digital workout log harian, program kelas senam, dan visualisasi performa kalori mingguan.',
      year: '2024',
      tags: ['React Native', 'Node.js', 'Figma API', 'RESTful API'],
      image: '/src/assets/images/gym_jug_logo_1782230490178.jpg',
      link: 'https://github.com/Kholilaaaaaa',
      accentColor: '#10B981',
      themeColor: 'from-emerald-600/20 via-slate-900 to-[#04080F]'
    },
    {
      id: 'cow-ar',
      title: 'Edu-AR Sapi 3D',
      subtitle: 'Augmented Reality Sapi Interaktif',
      desc: 'Aplikasi edukasi tiga dimensi berbasis Augmented Reality (AR) yang menyajikan anatomi fisik sapi dengan marker suara & teks deskriptif.',
      detailedDesc: 'Aplikasi inovatif mobile ditujukan untuk pembelajaran biologi dan peternakan secara interaktif. Mengarahkan kamera perangkat ke marker fisik memunculkan model 3D sapi realistis yang dapat dirotasi, diperbesar, serta memuat deskripsi organ pencernaan lengkap.',
      year: '2024',
      tags: ['Unity 3D', 'Vuforia AR', 'C#', '3D Blender'],
      image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=600&auto=format&fit=crop',
      link: 'https://github.com/Kholilaaaaaa',
      accentColor: '#8B5CF6',
      themeColor: 'from-purple-600/20 via-slate-900 to-[#04080F]'
    }
  ];

  const educations = [
    {
      period: '2023 — Sekarang',
      school: 'Universitas Harkat Negeri Tegal',
      program: 'Diploma IV (D4) · Teknik Informatika',
      desc: 'Fokus studi utama diarahkan pada rekayasa perangkat lunak modern, pengembangan web semantik, manajemen basis data, mobile programming, serta kalkulasi statistik digital.',
      highlights: [
        'Mempelajari Algoritma & Struktur Data Tingkat Lanjut',
        'Aktif mengembangakan proyek aplikasi frontend berbasis React & Node.js',
        'IPK Berjalan sangat memuaskan dengan fokus pemrograman fungsional'
      ]
    },
    {
      period: '2020 — 2023',
      school: 'SMK Negeri 3 Kota Tegal',
      program: 'Multimedia',
      desc: 'Penguasaan murni di pilar visual layouting, rekayasa grafis Photoshop, penyuntingan video dinamis, prinsip dasar UI/UX, tata warna estetis, serta branding digital.',
      highlights: [
        'Juara Desain Grafis Komparatif Tingkat Sekolah',
        'Menguasai Adobe Creative Suite (Photoshop, Premiere, Illustrator)',
        'Mengerjakan Proyek Branding UMKM Kuliner lokal'
      ]
    },
    {
      period: '2017 — 2020',
      school: 'MTs Negeri Kota Tegal',
      program: 'Pendidikan Menengah Pertama',
      desc: 'Aktif berkolaborasi dalam organisasi lingkungan internal madrasah, mengasah keterampilan tata kelola kepemimpinan dasar serta kematangan koordinasi.',
      highlights: [
        'Anggota Inti Pramuka Penggalang Berprestasi',
        'Menyelenggarakan bakti sosial madrasah tahunan'
      ]
    }
  ];

  const organizationDocs: OrganizationDoc[] = [
    {
      orgName: 'BEM Universitas Harkat Negeri Tegal',
      role: 'Anggota Divisi Komunikasi dan Informasi',
      period: '2024 — 2025',
      title: 'Dokumentasi, Desain Visual, & Pengelolaan Sosial Media',
      image: '/assets/.aistudio/panitia_workshop.jpeg', 
      caption: 'Berperan aktif dalam mendokumentasikan kegiatan, menciptakan konten visual yang menarik, serta menyusun jadwal posting yang terstruktur untuk memperkuat citra organisasi di media sosial.',
      highlights: [
        'Mendokumentasikan seluruh rangkaian kegiatan resmi organisasi kemahasiswaan.',
        'Menciptakan aset desain konten visual kreatif yang menarik dan responsif.',
        'Menyusun jadwal publikasi media sosial terstruktur guna meningkatkan impresi publik.'
      ]
    },
    {
      orgName: 'Lokakarya Akademik Mahasiswa',
      role: 'Ketua Pelaksana Lokakarya',
      period: '2025',
      title: 'Koordinasi Operasional & Konseptual Lokakarya Kampus',
      image: '/assets/.aistudio/panitia_lokakraya.jpeg',
      caption: 'Bertanggung jawab memimpin seluruh panitia, merancang konsep acara, dan memastikan jalannya lokakarya berjalan lancar dari persiapan hingga evaluasi.',
      highlights: [
        'Memimpin rapat koordinasi dan pembagian tugas seluruh divisi panitia pelaksana.',
        'Merancang konsep acara, timeline, serta memastikan kelancaran operasional teknis.',
        'Mengevaluasi kesiapan serta performa pelaksanaan kegiatan secara menyeluruh.'
      ]
    },
    {
      orgName: 'Panitia PKKMB Universitas',
      role: 'Koordinator Sponsorship Kegiatan',
      period: '2024 — 2025',
      title: 'Kemitraan Strategis & Pendanaan Kegiatan PKKMB',
      image: '/assets/.aistudio/panitia_workshop.jpeg',
      caption: 'Berperan mengkoordinasikan pencarian sponsor mulai dari penyusunan proposal, negosiasi, hingga pengelolaan hubungan dengan mitra selama pelaksanaan PKKMB.',
      highlights: [
        'Mengoordinasikan tim pencarian sponsor and memetakan prospek kemitraan strategis.',
        'Menyusun draf proposal kerja sama komprehensif untuk diajukan ke pihak korporasi.',
        'Melakukan negosiasi pembiayaan dan mengelola hubungan baik dengan pihak sponsor.'
      ]
    },
    {
      orgName: 'DPM Universitas Harkat Negeri',
      role: 'Sekretaris Pemira KPR',
      period: '2024',
      title: 'Manajemen Administrasi & Dokumentasi Pemilu Raya',
      image: '/assets/.aistudio/panitia_workshop.jpeg',
      caption: 'Mengelola tata kelola administrasi surat-menyurat dan pendataan resmi untuk menyukseskan Pemilihan Raya (PEMIRA) Komisi Pemilihan Raya (KPR) bentukan Dewan Perwakilan Mahasiswa (DPM).',
      highlights: [
        'Mengarsip seluruh dokumen masuk, surat keluar, dan administrasi pemilihan raya.',
        'Mengelola data registrasi peserta pemilu secara rapi, sistematis, dan terverifikasi.',
        'Menyusun Minutes of Meeting (MoM) serta laporan pertanggungjawaban panitia.'
      ]
    },
    {
      orgName: 'Invofest Universitas Harkat Negeri',
      role: 'TIM Lomba IT',
      period: '2024',
      title: 'Pengelolaan Data Peserta & Administrasi Kompetisi',
      image: '/assets/.aistudio/OLA.jpeg',
      caption: 'Mengelola data keseluruhan anggota lomba, merapikan kelengkapan berkas kepesertaan, serta memastikan alur administrasi kompetisi IT Vocational Festival berjalan transparan.',
      highlights: [
        'Mengonfirmasi kelayakan administrasi dari setiap tim kompetitor yang terdaftar.',
        'Menjamin integrasi data penilaian peserta secara aman, presisi, dan bebas manipulasi.',
        'Mengoordinasikan kelancaran distribusi informasi teknis lomba kepada seluruh peserta.'
      ]
    },
    {
      orgName: 'SMKN 3 Kota Tegal',
      role: 'Pengurus OSIS & Anggota Paskibra',
      period: '2020 — 2022',
      title: 'Publikasi Dokumentasi Desain OSIS & Paskibra Kota',
      image: '/assets/.aistudio/osis_smk.jpeg',
      caption: 'Aktif mengelola materi promosi kreatif di bidang Publikasi Dokumentasi dan Desain OSIS, serta mengemban tugas upacara kenegaraan sebagai Anggota Paskibra tingkat Kota.',
      highlights: [
        'Mengonsep desain visual pamflet, poster, dan dokumentasi resmi aktivitas sekolah.',
        'Mengikuti latihan fisik disiplin tinggi dan bertugas di upacara Paskibra tingkat Kota Tegal.',
        'Menjalin koordinasi kolaboratif antarsiswa dalam menyukseskan agenda tahunan OSIS.'
      ]
    }
  ];

  const certificates: Certificate[] = [
    {
      id: 'cert-huawei',
      category: 'Course Huawei',
      title: 'Huawei Course Certification',
      issuer: 'Huawei Technologies Academy',
      year: '2025',
      credentialId: 'HW-HCIA-58391',
      accent: '#FF6B00',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&auto=format&fit=crop',
      link: 'https://drive.google.com/drive/folders/1UHJuLMwNZOas_yrp-7z-wvKbEcpL0qZ3?usp=drive_link',
      desc: 'Sertifikasi pelatihan resmi dari Huawei, membuktikan penguasaan dasar-dasar cloud computing, teknologi routing & switching jaringan, serta solusi AI enterprise.'
    },
    {
      id: 'cert-kompetisi',
      category: 'Kompetisi',
      title: 'Sertifikat Penghargaan Kompetisi',
      issuer: 'Pusat Prestasi Nasional / Universitas',
      year: '2024',
      credentialId: 'COMP-TEGAL-2024',
      accent: '#FBBF24',
      image: 'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?q=80&w=400&auto=format&fit=crop',
      link: 'https://drive.google.com/drive/folders/15OoRmyN0PitGfGMQ61Cxku8GKK_7IEqU?usp=drive_link',
      desc: 'Penghargaan dan sertifikasi pencapaian luar biasa dalam kompetisi inovasi teknologi digital, ide bisnis kreatif, dan rekayasa multimedia tingkat regional.'
    },
    {
      id: 'cert-organisasi',
      category: 'Organisasi',
      title: 'Sertifikat Kepengurusan Organisasi',
      issuer: 'Badan Eksekutif Mahasiswa (BEM)',
      year: '2024',
      credentialId: 'BEM-KOMINFO-2024',
      accent: '#34D399',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=400&auto=format&fit=crop',
      link: 'https://drive.google.com/drive/folders/1URL8ucEthECV1OhyfhWAM2YhEurKL6P1?usp=drive_link',
      desc: 'Sertifikat penghargaan kepemimpinan atas dedikasi fungsionaris departemen KOMINFO dalam menginisiasi, merancang, dan mempublikasikan media digital kampus.'
    },
    {
      id: 'cert-workshop',
      category: 'Workshop',
      title: 'Sertifikat Partisipasi Workshop',
      issuer: 'Vocational Tech Community / Bootcamp',
      year: '2025',
      credentialId: 'WRK-DEV-WEB-2025',
      accent: '#00A2FF',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop',
      link: 'https://drive.google.com/drive/folders/1wNp_sLHgWs6eFGcnYhO2d8QaqjapgNe2?usp=drive_link',
      desc: 'Sertifikat keikutsertaan intensif dalam workshop dan pelatihan langsung (hands-on) mengenai kerangka frontend React modern dan teknologi web masa depan.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#00A2FF] selection:text-white grainy-bg relative overflow-x-hidden">
      
      {/* BACKGROUND HEAVY BLUE GLOWING SPHERES */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00A2FF]/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#00A2FF]/5 blur-[150px] pointer-events-none"></div>

      {/* 1. TOP RESPONSIVE HEADER NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 h-16 transition-all shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00A2FF] animate-pulse"></div>
            <a href="#pembuka" className="font-mono text-xs font-black tracking-widest text-[#00A2FF] hover:text-blue-600 transition-colors uppercase">
              KHOLILA RISTIANA
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-5 font-mono text-[9px] lg:text-[10px] font-bold tracking-wider uppercase text-slate-500">
            <a 
              href="#pembuka" 
              onClick={() => setActiveMenuSection('pembuka')} 
              className={`hover:text-[#00A2FF] transition-colors py-1 ${activeMenuSection === 'pembuka' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : ''}`}
            >
              Home
            </a>
            <a 
              href="#tentang" 
              onClick={() => setActiveMenuSection('tentang')} 
              className={`hover:text-[#00A2FF] transition-colors py-1 ${activeMenuSection === 'tentang' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : ''}`}
            >
              Tentang Saya
            </a>
            <a 
              href="#pendidikan" 
              onClick={() => setActiveMenuSection('pendidikan')} 
              className={`hover:text-[#00A2FF] transition-colors py-1 ${activeMenuSection === 'pendidikan' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : ''}`}
            >
              Pendidikan
            </a>
            <a 
              href="#proyek" 
              onClick={() => setActiveMenuSection('proyek')} 
              className={`hover:text-[#00A2FF] transition-colors py-1 ${activeMenuSection === 'proyek' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : ''}`}
            >
              Projek
            </a>
            <a 
              href="#organisasi" 
              onClick={() => setActiveMenuSection('organisasi')} 
              className={`hover:text-[#00A2FF] transition-colors py-1 ${activeMenuSection === 'organisasi' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : ''}`}
            >
              Organisasi
            </a>
            <a 
              href="#sertifikat" 
              onClick={() => setActiveMenuSection('sertifikat')} 
              className={`hover:text-[#00A2FF] transition-colors py-1 ${activeMenuSection === 'sertifikat' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : ''}`}
            >
              Sertifikat
            </a>
            <a 
              href="#kontak" 
              onClick={() => setActiveMenuSection('kontak')} 
              className={`hover:text-[#00A2FF] transition-colors py-1 ${activeMenuSection === 'kontak' ? 'text-[#00A2FF] border-b-2 border-[#00A2FF]' : ''}`}
            >
              Kontak
            </a>
          </div>

          <a 
            href="#kontak" 
            className="px-4 py-1.5 border border-[#00A2FF] text-[#00A2FF] font-mono text-[9px] font-bold uppercase rounded-md hover:bg-[#00A2FF] hover:text-white transition-all shadow-sm tracking-widest bg-[#00A2FF]/5"
          >
            HUBUNGI
          </a>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-8 pb-32 flex flex-col gap-28 relative z-10">

        {/* ================= 1. THE HERO SECTION ================= */}
        <section id="pembuka" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
            
            {/* Left Column: Big Display Text */}
            <div className="lg:col-span-6 flex flex-col gap-6">

              {/* Big bold text style */}
              <div className="flex flex-col select-none">
                <h1 className="font-sans font-black text-[55px] md:text-[85px] uppercase tracking-tighter leading-[0.80] text-slate-900">
                  KHOLILA<br />
                  <span className="text-[#00A2FF]">RISTIANA</span>
                </h1>
              </div>

              {/* Subtitle bio */}
              <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                Mahasiswi aktif D4 Teknik Informatika Universitas Harkat Negeri Tegal, mengimplementasikan rancang bangun antarmuka handal hasil kolaborasi logika algoritmik komputasi &amp; estetika digital multimedia.
              </p>

              {/* Navigation buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="#proyek" 
                  className="px-5 py-3 bg-[#00A2FF] text-white hover:bg-blue-600 text-xs font-mono font-bold uppercase tracking-widest rounded transition-all flex items-center gap-2 shadow-lg hover:shadow-[#00A2FF]/20"
                >
                  LIHAT PROJEK <ArrowDown size={14} />
                </a>
                <a 
                  href="#kontak" 
                  className="px-5 py-3 border border-slate-300 hover:border-[#00A2FF] bg-white hover:bg-slate-50 text-slate-700 hover:text-[#00A2FF] transition-all text-xs font-mono font-bold uppercase tracking-widest rounded shadow-sm"
                >
                  DISKUSI KOLABORASI
                </a>
              </div>

            </div>

            {/* Right Column: Profile Portrait */}
            <div className="lg:col-span-6 flex justify-center relative">
              
              {/* Outer decorative glowing sphere */}
              <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-tr from-[#00A2FF]/10 to-transparent rounded-2xl filter blur-xl opacity-60 pointer-events-none -z-10 animate-pulse"></div>

              {/* Portrait Frame */}
              <div className="relative aspect-[3.8/4.8] w-full max-w-sm rounded-[24px] overflow-hidden border border-slate-200/80 shadow-2xl flex items-end bg-white">
                
                {/* Fallback pattern */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-white to-slate-200 flex flex-col justify-between p-6 -z-10 select-none">
                  <div className="flex justify-between items-start text-slate-400 font-mono text-[9px] uppercase">
                    <span>DESIGNER &amp; WEB FRONTEND</span>
                    <span>TECH STACK 06</span>
                  </div>
                  <div className="my-auto self-center opacity-20">
                    <ImageIcon size={120} className="text-[#00A2FF]" />
                  </div>
                  <div className="text-center font-serif italic text-3xl text-slate-400 uppercase tracking-widest">
                    K_RISTIANA
                  </div>
                </div>

                {/* Actual profile image */}
                <img 
                  src="/assets/pas foto.jpeg" 
                  alt="Profil Kholila Ristiana" 
                  className="absolute inset-0 w-full h-full object-cover object-[center_20%] z-10 hover:scale-105 transition-transform duration-500 hover:brightness-110"
                  onError={(e) => {
                    // Falls back to showing high-fidelity background card if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Graphic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100/30 via-transparent to-black/10 z-20 pointer-events-none"></div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= 2. THE CHASSIS PROFILE CARD WITH SOFTWARE LOGOS (TENTANG SAYA) ================= */}
        <section id="tentang" className="scroll-mt-24">
          <div className="bg-white border border-slate-200/85 rounded-[32px] p-6 lg:p-12 shadow-md relative overflow-hidden flex flex-col gap-10 bg-gradient-to-br from-white via-white to-blue-50/20">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Profile Details */}
              <div className="lg:col-span-12 flex flex-col gap-5">
                
                <div className="flex items-center gap-3">
                  <h2 className="font-sans font-black text-2xl md:text-3xl text-slate-900 uppercase tracking-tight">
                     Tentang Saya
                  </h2>
                </div>

                <div className="h-[2px] w-20 bg-[#00A2FF]"></div>

                {/* Indonesian Bio */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed text-left max-w-4xl font-sans">
                  Hai, perkenalkan nama saya <strong className="text-slate-900">Kholila Ristiana</strong> asal Suradadi, Kabupaten Tegal, Jawa Tengah. Memulai ketertarikan tinggi di ranah desain digital kreatif sejak menempuh pendidikan Multimedia di SMKN 3 Kota Tegal pada tahun 2020. Ketertarikan visual murni tersebut kini saya padukan secara fungsional di bangku kuliah Diploma IV Teknik Informatika Universitas Harkat Negeri Tegal guna melahirkan produk aplikasi website frontend yang responsif, terstruktur, serta berpusat pada kepuasan antarmuka pengguna.
                </p>

                {/* SOFTWARE / TOOL LOGOS SHELF */}
                <div className="flex flex-col gap-5 mt-4 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-2">
                    <Code className="text-[#00A2FF]" size={16} />
                    <span className="font-mono text-xs font-black tracking-widest uppercase text-slate-800">
                      Software &amp; Lingkungan Kerja
                    </span>
                  </div>

                  {/* Circular Software Logos representing: GitHub, Flutter, VS Code, Figma, Adobe Photoshop, Microsoft Word */}
                  <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-4 items-center">
                    
                    {/* Circle 1: GitHub */}
                    <div className="flex flex-col items-center gap-1.5 group">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100/60 border border-slate-200/80 flex items-center justify-center hover:border-slate-400 hover:bg-white transition-all shadow-sm transform hover:-translate-y-1">
                        <Github size={24} className="text-slate-800 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="font-mono text-[9px] text-slate-500 font-bold group-hover:text-slate-800 uppercase transition-colors">GitHub</span>
                    </div>

                    {/* Circle 2: Flutter */}
                    <div className="flex flex-col items-center gap-1.5 group">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100/60 border border-slate-200/80 flex items-center justify-center hover:border-sky-400 hover:bg-white transition-all shadow-sm transform hover:-translate-y-1">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-sky-400 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.314 0L2.3 12l3.6 3.6 12.015-12.015h-3.601zM21.7 12.015L14.39 4.7l-3.601 3.6 3.701 3.715-3.701 3.715 3.601 3.601L21.7 12.015z"/>
                        </svg>
                      </div>
                      <span className="font-mono text-[9px] text-slate-500 font-bold group-hover:text-sky-400 uppercase transition-colors">Flutter</span>
                    </div>

                    {/* Circle 3: VS Code (Coding Logo) */}
                    <div className="flex flex-col items-center gap-1.5 group">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100/60 border border-slate-200/80 flex items-center justify-center hover:border-blue-500 hover:bg-white transition-all shadow-sm transform hover:-translate-y-1">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-blue-500 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.985 17.56a1.442 1.442 0 0 0-.447-1.015L16.22 10.5l7.318-6.045a1.439 1.439 0 0 0-.102-2.22l-2.325-1.74a1.411 1.411 0 0 0-1.786.111L9.124 9.176 3.513 4.819a1.414 1.414 0 0 0-1.996.38L.15 7.152a1.412 1.412 0 0 0 .38 1.995l5.064 3.931-5.064 3.93a1.413 1.413 0 0 0-.38 1.996l1.367 1.954a1.415 1.415 0 0 0 1.996.38l5.611-4.357 10.201 8.571a1.42 1.42 0 0 0 1.83-.027l2.454-1.921c.253-.198.397-.502.397-.822z"/>
                        </svg>
                      </div>
                      <span className="font-mono text-[9px] text-slate-500 font-bold group-hover:text-blue-500 uppercase transition-colors">VS Code</span>
                    </div>

                    {/* Circle 4: Figma */}
                    <div className="flex flex-col items-center gap-1.5 group">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100/60 border border-slate-200/80 flex items-center justify-center hover:border-pink-500 hover:bg-white transition-all shadow-sm transform hover:-translate-y-1">
                        <svg viewBox="0 0 24 24" className="w-5 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.5 12a3.5 3.5 0 1 1 0-7H12v7H8.5z" fill="#F24E1E"/>
                          <path d="M15.5 12a3.5 3.5 0 1 1 0-7H12v7h3.5z" fill="#FF7262"/>
                          <path d="M8.5 19a3.5 3.5 0 1 1 0-7H12v7H8.5z" fill="#1ABC9C"/>
                          <path d="M12 19a3.5 3.5 0 1 1 3.5-3.5V19H12z" fill="#A259FF"/>
                          <path d="M15.5 12a3.5 3.5 0 1 1-3.5 3.5V12h3.5z" fill="#1ABC9C"/>
                        </svg>
                      </div>
                      <span className="font-mono text-[9px] text-slate-500 font-bold group-hover:text-pink-500 uppercase transition-colors">Figma</span>
                    </div>

                    {/* Circle 5: Adobe Photoshop */}
                    <div className="flex flex-col items-center gap-1.5 group">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100/60 border border-slate-200/80 flex items-center justify-center hover:border-sky-500 hover:bg-white transition-all shadow-sm transform hover:-translate-y-1">
                        <div className="border border-[#31A8FF] rounded p-0.5 bg-[#001D33] w-8 h-8 flex items-center justify-center">
                          <span className="font-sans text-xs font-black text-[#31A8FF] tracking-tighter leading-none">Ps</span>
                        </div>
                      </div>
                      <span className="font-mono text-[9px] text-slate-500 font-bold group-hover:text-[#31A8FF] uppercase transition-colors">Photoshop</span>
                    </div>

                    {/* Circle 6: Word */}
                    <div className="flex flex-col items-center gap-1.5 group">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100/60 border border-slate-200/80 flex items-center justify-center hover:border-blue-600 hover:bg-white transition-all shadow-sm transform hover:-translate-y-1">
                        <div className="border border-[#185ABD] rounded p-0.5 bg-[#102A54] w-8 h-8 flex items-center justify-center">
                          <span className="font-sans text-xs font-black text-[#185ABD] tracking-tighter leading-none">W</span>
                        </div>
                      </div>
                      <span className="font-mono text-[9px] text-slate-500 font-bold group-hover:text-[#185ABD] uppercase transition-colors">MS Word</span>
                    </div>

                  </div>
                </div>

                {/* EXTERNAL GITHUB URL */}
                <div className="flex flex-wrap gap-3 items-center mt-4 pt-4 border-t border-slate-200">
                  <span className="px-3 py-1 bg-[#00A2FF]/10 text-[#00A2FF] rounded-full text-[10px] font-mono font-black tracking-widest uppercase border border-[#00A2FF]/25">
                    PRANALA UTAMA
                  </span>
                  <a 
                    href="https://github.com/Kholilaaaaaa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 hover:bg-[#00A2FF] hover:text-white border border-slate-200 text-slate-700 rounded-full font-mono text-[10px] tracking-widest transition-all flex items-center gap-1.5 uppercase bg-white hover:border-[#00A2FF] shadow-sm"
                  >
                    ✦ https://github.com/Kholilaaaaaa <ExternalLink size={11} />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= 3. RIWAYAT PENDIDIKAN DIBIKIN RAPI ================= */}
        <section id="pendidikan" className="scroll-mt-24">
          <div className="flex flex-col gap-6">
            
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-sans font-black text-3xl uppercase tracking-tighter text-slate-900">
                  RIWAYAT <span className="text-[#00A2FF]">PENDIDIKAN</span>
                </h2>
              </div>
            </div>

            {/* Premium, neat educational road layout */}
            <div className="relative pl-6 md:pl-10 border-l-2 border-slate-200 space-y-10 mt-4">
              {educations.map((edu, index) => (
                <div key={index} className="relative group p-6 bg-white hover:shadow-lg rounded-2xl border border-slate-200 hover:border-[#00A2FF]/50 transition-all duration-300 shadow-sm">
                  
                  {/* Circle locator bullet point */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-8 w-5 h-5 rounded-full bg-slate-50 border-2 border-[#00A2FF] flex items-center justify-center group-hover:scale-125 transition-transform">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A2FF]"></div>
                  </div>

                  {/* Header info */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#00A2FF]/10 text-[#00A2FF] flex items-center justify-center border border-[#00A2FF]/20">
                        <GraduationCap size={15} />
                      </div>
                      <div>
                        <h4 className="font-sans font-black text-lg text-slate-900 uppercase tracking-tight leading-tight">
                          {edu.school}
                        </h4>
                        <span className="font-sans text-xs text-slate-500 font-medium tracking-tight">
                          {edu.program}
                        </span>
                      </div>
                    </div>
                    
                    <span className="font-mono text-[9px] text-[#00A2FF] bg-[#00A2FF]/10 px-3 py-1 rounded-full border border-[#00A2FF]/25 uppercase font-bold tracking-widest shadow-sm">
                      [ {edu.period} ]
                    </span>
                  </div>

                  {/* Program description */}
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 text-justify">
                    {edu.desc}
                  </p>

                  {/* Key Highlights list inside card */}
                  <div className="border-t border-slate-100 pt-3 mt-3">
                    <span className="font-mono text-[8px] text-[#00A2FF] font-black uppercase tracking-widest block mb-2">[ PRESTASI / CAPAIAN ]</span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {edu.highlights.map((hlt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-left">
                          <Check size={12} className="text-[#00A2FF] mt-0.5 shrink-0" />
                          <span>{hlt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= 4. PROJEK (CARDS ARE COMPACT AND SKINCATE PROJECT EMBELLISHED BEAUTIFULLY) ================= */}
        <section id="proyek" className="scroll-mt-24">
          <div className="flex flex-col gap-6">
            
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-sans font-black text-3xl uppercase tracking-tighter text-slate-900">
                  DAFTAR <span className="text-[#00A2FF]">PROJEK</span>
                </h2>
              </div>
            </div>

            {/* COMPACT CHASSIS PROJECTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-white hover:shadow-xl rounded-2xl p-5 border border-slate-200 hover:border-[#00A2FF]/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-md transform hover:-translate-y-1 relative"
                >
                  {/* Glowing subtle background accent on hover */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#00A2FF]/5 rounded-full blur-lg group-hover:bg-[#00A2FF]/10 transition-colors pointer-events-none" />

                  <div className="flex flex-col gap-3">
                    {/* Header: Icon & Year */}
                    <div className="flex justify-between items-center">
                      <div className="text-[#00A2FF] bg-[#00A2FF]/10 p-2 rounded-lg border border-[#00A2FF]/10">
                        {project.id === 'skin-analyz' ? (
                          <Sparkles size={16} />
                        ) : project.id === 'dimsum-wings' ? (
                          <Globe size={16} />
                        ) : project.id === 'fitness-app' ? (
                          <Smartphone size={16} />
                        ) : (
                          <Folder size={16} />
                        )}
                      </div>
                    </div>

                    {/* Titles */}
                    <div className="space-y-1">
                      <span className="font-mono text-[8px] text-slate-500 font-bold uppercase tracking-widest block">
                        [ {project.subtitle} ]
                      </span>
                      <h4 className="font-sans font-black text-sm text-slate-900 uppercase tracking-tight leading-tight group-hover:text-[#00A2FF] transition-colors">
                        {project.title}
                      </h4>
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-600 text-[11px] leading-relaxed text-justify line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tags & Action Link */}
                  <div className="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between">
                    <div className="flex gap-1 flex-wrap max-w-[70%]">
                      {project.tags.slice(0, 2).map((tg, i) => (
                        <span key={i} className="text-[7.5px] font-mono bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded text-slate-500">
                          {tg}
                        </span>
                      ))}
                    </div>
                    <span className="text-[8px] font-mono text-[#00A2FF] font-black uppercase flex items-center gap-0.5 group-hover:underline shrink-0">
                      Detail <ExternalLink size={8} />
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= 5. ORGANISASI (WITH SMARTPHONE PREVIEW AS REQUESTED) ================= */}
        <section id="organisasi" className="scroll-mt-24">
          <div className="flex flex-col gap-6">
            
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-sans font-black text-3xl uppercase tracking-tighter text-slate-900">
                  KEPANITIAN <span className="text-[#00A2FF]">&amp; ORGANISASI</span>
                </h2>
              </div>
            </div>

            {/* DIRECT DETAILED IMAGE CARDS GRID FOR ALL ORGANIZATIONS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {organizationDocs.map((org, index) => (
                <div 
                  key={index}
                  className="bg-white hover:shadow-xl border border-slate-200 hover:border-[#00A2FF]/60 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-md relative overflow-hidden"
                >
                  {/* Glowing background accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#00A2FF]/5 rounded-full blur-xl group-hover:bg-[#00A2FF]/10 transition-colors pointer-events-none" />

                  <div>
                    {/* Period & Role */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-[9px] text-[#00A2FF] font-black uppercase tracking-widest bg-[#00A2FF]/10 px-2.5 py-0.5 rounded border border-[#00A2FF]/20">
                        {org.period}
                      </span>
                      <span className="font-mono text-[9px] text-slate-500 font-bold uppercase tracking-widest">
                        {org.role}
                      </span>
                    </div>

                    {/* Org Info */}
                    <h4 className="font-sans font-black text-sm text-slate-900 uppercase tracking-tight mb-1 leading-snug">
                      {org.orgName}
                    </h4>

                    <div className="mb-3">
                      <span className="font-mono text-[9px] text-[#00A2FF] font-black uppercase tracking-tight">
                        // {org.title}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 text-xs leading-relaxed text-justify mb-5">
                      {org.caption}
                    </p>
                  </div>

                  {/* Highlights Bullet List (Aksi Nyata) */}
                  <div className="border-t border-slate-100 pt-4 mt-auto">
                    <span className="font-mono text-[8px] text-[#00A2FF] font-black uppercase tracking-widest block mb-1.5">[ KONTRIBUSI NYATA ]</span>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {org.highlights.map((hlt, idx) => (
                        <li key={idx} className="relative pl-4 leading-relaxed text-slate-600 text-[11px] text-justify flex gap-1.5 items-start">
                          <span className="text-[#00A2FF] font-extrabold select-none">•</span>
                          <span>{hlt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= 6. SERTIFIKAT (REPLACES OLD KEAHLIAN / COMPETENCIES MATRIX) ================= */}
        <section id="sertifikat" className="scroll-mt-24">
          <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 lg:p-10 shadow-xl relative overflow-hidden flex flex-col gap-8 bg-gradient-to-br from-white via-slate-50 to-blue-50/30">
            
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
              <div className="flex flex-col gap-1">
                <h3 className="font-sans font-black text-2xl uppercase tracking-tighter text-slate-900">
                  SERTIFIKAT &amp; <span className="text-[#00A2FF]">LISENSI</span>
                </h3>
              </div>
            </div>

            {/* Simpel Design Certificates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certificates.map((cert) => (
                <div 
                  key={cert.id} 
                  className="bg-white border border-slate-200/85 hover:border-[#00A2FF]/60 rounded-2xl p-4 hover:bg-slate-50/50 transition-all duration-300 flex flex-col justify-between min-h-[380px] relative overflow-hidden group shadow-sm"
                >
                  
                  {/* Subtle seal background pattern */}
                  <div className="absolute top-2 right-4 text-[#00A2FF]/10 group-hover:text-[#00A2FF]/15 transition-colors pointer-events-none select-none">
                    <Award size={60} />
                  </div>

                  <div>
                    {/* Certificate Badge Cover Design (Logo Sertifikat) */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl mb-4 border border-slate-200/80 bg-gradient-to-br from-slate-100 via-white to-blue-50/50 flex flex-col items-center justify-center group-hover:border-[#00A2FF]/30 transition-colors">
                      {/* Grid background lines */}
                      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:12px_12px] opacity-60 pointer-events-none" />
                      
                      {/* Decorative Frame border layout */}
                      <div className="absolute inset-2 border border-slate-200/40 rounded-lg pointer-events-none" />
                      <div className="absolute inset-3 border border-slate-200/10 rounded-md pointer-events-none" />

                      {/* Glowing Badge Circle */}
                      <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-white border border-slate-200 group-hover:border-[#00A2FF]/40 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        {/* Radial Glow */}
                        <div 
                          className="absolute inset-0 rounded-full blur-md opacity-25 group-hover:opacity-40 transition-opacity" 
                          style={{ backgroundColor: cert.accent }}
                        />
                        <Award className="w-7 h-7 relative z-10" style={{ color: cert.accent }} />
                      </div>

                      {/* Small text indicating official credential */}
                      <div className="mt-2.5 font-mono text-[7px] text-slate-500 font-bold uppercase tracking-widest text-center px-4 relative z-10">
                        OFFICIAL COV CERTIFICATE
                      </div>

                      <span className="absolute bottom-2 left-2 font-mono text-[8.5px] text-[#00A2FF] font-black uppercase bg-[#00A2FF]/10 px-2 rounded border border-[#00A2FF]/20">
                        {cert.category}
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h4 className="font-sans font-black text-xs text-slate-900 uppercase tracking-tight line-clamp-2 mb-1">
                      {cert.title}
                    </h4>

                    {/* Issuer note */}
                    <div className="text-[10px] text-slate-500 font-medium mb-1.5">
                      Penerbit: <strong className="text-slate-700">{cert.issuer}</strong>
                    </div>

                    {/* Description text */}
                    <p className="text-[10px] text-slate-600 leading-relaxed text-justify line-clamp-3">
                      {cert.desc}
                    </p>
                  </div>

                  <div>
                    {/* Foot metadata */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-1 text-[8px] font-mono text-slate-500 z-10">
                      <div className="flex justify-between">
                        <span>NO. SERT:</span>
                        <span className="text-slate-700 font-bold">{cert.credentialId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>TAHUN:</span>
                        <span className="text-slate-700 font-bold">{cert.year}</span>
                      </div>
                    </div>

                    {/* Call to action: Google Drive drive certificate link */}
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-3.5 w-full py-2 bg-[#00A2FF] text-white hover:bg-blue-600 rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 font-mono text-[9px] font-black uppercase tracking-wider shadow-sm"
                    >
                      Buka Sertifikat <ExternalLink size={10} />
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= 7. SALURAN PENUNJANG KONTAK (REPLACED RESERVASI TO KONTAK WITH NEW SOCIAL PATHS) ================= */}
        <section id="kontak" className="scroll-mt-24">
          <div className="bg-white border border-slate-200 rounded-[32px] p-6 lg:p-12 shadow-xl relative overflow-hidden flex flex-col gap-8">
            
            {/* Ambient Diagonal Design lines layout */}
            <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none select-none opacity-20 z-0">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="100%" x2="100%" y2="0" stroke="#00A2FF" strokeWidth="2" strokeDasharray="6,4" />
                <line x1="15%" y1="100%" x2="100%" y2="15%" stroke="#00A2FF" strokeWidth="1" />
                <line x1="0" y1="80%" x2="80%" y2="0" stroke="#e2e8f0" strokeWidth="4" />
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Left Column representing "TERIMA KASIH // LET'S WORK TOGETHER" text block */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                
                <div className="space-y-1">
                  <h1 className="font-sans font-black text-4xl lg:text-6xl text-slate-900 uppercase tracking-tighter leading-none mt-2">
                    SALURAN KONTAK
                  </h1>
                  <h3 className="font-mono text-xs font-black text-slate-500 tracking-wider uppercase">
                    Koneksi Resmi Kholila Ristiana
                  </h3>
                  <div className="h-[2px] w-12 bg-[#00A2FF] mt-3"></div>
                </div>

                <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-sm text-justify">
                  Sangat terbuka untuk kerja sama magang, pembuatan rancangan visual Figma digital, maupun pengembangan website frontend komersial. Silakan hubungi:
                </p>

                {/* Vertical lists of contact details: Email, No Telepon, Instagram, LinkedIn, GitHub */}
                <div className="flex flex-col gap-3 font-mono text-xs text-slate-700 pt-2">
                  
                  {/* Email */}
                  <a href="mailto:kholilala99@gmail.com" className="flex items-center gap-3.5 hover:text-[#00A2FF] transition-all group">
                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-[#00A2FF] transition-colors shadow-sm">
                      <Mail size={13} className="text-[#00A2FF]" />
                    </div>
                    <span>kholilala99@gmail.com</span>
                  </a>

                  {/* Phone */}
                  <a href="tel:+6289609967345" className="flex items-center gap-3.5 hover:text-[#00A2FF] transition-all group">
                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-[#00A2FF] transition-colors shadow-sm">
                      <Phone size={13} className="text-[#00A2FF]" />
                    </div>
                    <span>+62 896-0996-7345</span>
                  </a>

                  {/* Instagram */}
                  <a href="https://instagram.com/kholila.rt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 hover:text-[#00A2FF] transition-all group">
                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-[#00A2FF] transition-colors shadow-sm">
                      <Instagram size={13} className="text-[#00A2FF]" />
                    </div>
                    <span>@kholila.rt</span>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/kholila-ristiana-b4b81b295/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 hover:text-[#00A2FF] transition-all group">
                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-[#00A2FF] transition-colors shadow-sm">
                      <Linkedin size={13} className="text-[#00A2FF]" />
                    </div>
                    <span>Kholila Ristiana</span>
                  </a>

                  {/* GitHub */}
                  <a href="https://github.com/Kholilaaaaaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 hover:text-[#00A2FF] transition-all group">
                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-[#00A2FF] transition-colors shadow-sm">
                      <Github size={13} className="text-[#00A2FF]" />
                    </div>
                    <span>github.com/Kholilaaaaaa</span>
                  </a>

                </div>

                {/* Small watermark signature */}
                <div className="pt-6 border-t border-slate-200 flex flex-col gap-1 text-[9px] font-mono text-slate-400 mt-2">
                  <span className="font-extrabold text-slate-700">KHOLILA RISTIANA</span>
                </div>

              </div>

              {/* Right Column: Dynamic Send Message Formulation */}
              <div className="lg:col-span-6 bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl shadow-inner">
                
                <h4 className="font-sans font-black text-sm text-slate-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                  <MessageSquare size={14} className="text-[#00A2FF]" />
                  Kirim Pesan Langsung
                </h4>

                {formSubmitted ? (
                  <div className="bg-white border border-[#00A2FF]/35 text-slate-800 text-xs p-5 rounded-xl font-mono text-center flex flex-col gap-2.5 shadow-md">
                    <span className="text-[#00A2FF] font-black tracking-widest block font-sans text-sm">✓ STATUS: PESAN TERKIRIM !</span>
                    <p className="text-slate-600 leading-relaxed">Terima kasih banyak atas atensi Anda. Kholila akan segera meninjau surat yang masuk dalam waktu 1x24 jam.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-xs font-mono">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-500 uppercase font-black text-[9px] tracking-wider">[ NAMA PENGIRIM ]</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Masukkan nama lengkap..."
                        className="px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-[#00A2FF] font-mono text-xs hover:border-slate-300 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-500 uppercase font-black text-[9px] tracking-wider">[ ALAMAT EMAIL ]</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="kontak@korporasi.com"
                        className="px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-[#00A2FF] font-mono text-xs hover:border-slate-300 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-500 uppercase font-black text-[9px] tracking-wider">[ REKAP TOPIK / PESAN ]</label>
                      <textarea 
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Deskripsikan detail kemitraan atau pesan Anda..."
                        className="px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-[#00A2FF] font-mono text-xs hover:border-slate-300 transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="px-4 py-3 bg-[#00A2FF] hover:bg-blue-600 text-white font-black font-mono text-[10px] uppercase rounded-lg transition-colors tracking-widest text-center mt-2 shadow-md"
                    >
                      KIRIM SEKARANG ➤
                    </button>
                  </form>
                )}

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* ================= DETAILED LIGHTBOX MODAL ================= */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white border border-slate-200 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:grid md:grid-cols-12 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Circle button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-[#00A2FF] text-slate-700 hover:text-white rounded-full w-8 h-8 flex items-center justify-center z-50 transition-colors border border-slate-200 shadow-sm"
            >
              <X size={15} />
            </button>

            {/* Left side picture presentation */}
            <div className="md:col-span-7 bg-slate-50 flex flex-col justify-center items-center relative min-h-[300px] overflow-hidden border-b md:border-b-0 md:border-r border-slate-100">
              
              {selectedProject.isCosmetics && (
                <div className="absolute top-4 left-4 z-30 bg-blue-600 border border-[#00A2FF]/40 text-white font-mono text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                  Skin analyzed active
                </div>
              )}

              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="max-h-[480px] w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* Right side data details */}
            <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
              
              <div className="flex flex-col gap-5">
                <div>
                  <span className="font-mono text-[9px] text-[#00A2FF] font-black uppercase tracking-widest block">
                    {selectedProject.subtitle}
                  </span>
                  <h3 className="font-sans font-black text-xl text-slate-900 uppercase tracking-tight mt-1.5 leading-snug">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="h-[1px] w-full bg-slate-100"></div>

                <p className="text-slate-600 text-xs leading-relaxed text-left font-sans">
                  {selectedProject.detailedDesc}
                </p>

                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[9px] text-[#00A2FF] font-black uppercase tracking-widest">[ TEKNOLOGI PIRANTI ]</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600 font-mono text-[9px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {selectedProject.link && (
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-4 py-3 bg-[#00A2FF] hover:bg-blue-600 text-white font-mono text-xs font-black uppercase rounded-xl text-center transition-colors flex items-center justify-center gap-1.5 shadow-md"
                >
                  Lihat Kode di GitHub <ExternalLink size={12} />
                </a>
              )}

            </div>

          </div>
        </div>
      )}

      {/* FOOTER BAR */}
      <footer className="border-t border-slate-200 bg-white py-8 text-xs text-slate-400 font-mono shadow-inner">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>PORTFOLIO DIGITAL // KHOLILA RISTIANA</span>
        </div>
      </footer>

    </div>
  );
}
