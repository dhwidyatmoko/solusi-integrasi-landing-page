import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import heroCs from "@/assets/hero-cs.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import a1 from "@/assets/article-1.jpg";
import a2 from "@/assets/article-2.jpg";
import a3 from "@/assets/article-3.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

declare global {
  interface Window {
    Swiper?: any;
    AOS?: any;
  }
}

const services = [
  { icon: "bi-code-slash", title: "Pengembangan Aplikasi", desc: "Web & mobile app custom sesuai kebutuhan bisnis Anda.", color: "#2AA9B4" },
  { icon: "bi-diagram-3", title: "Integrasi Sistem", desc: "Menyatukan berbagai sistem menjadi satu ekosistem digital.", color: "#F5A623" },
  { icon: "bi-cloud-arrow-up", title: "Cloud Solutions", desc: "Infrastruktur cloud yang scalable dan aman.", color: "#3D8BFF" },
  { icon: "bi-shield-lock", title: "Cyber Security", desc: "Lindungi aset digital dengan solusi keamanan terbaik.", color: "#006CB7" },
  { icon: "bi-graph-up", title: "Data Analytics", desc: "Ubah data menjadi keputusan bisnis yang cerdas.", color: "#E53935" },
  { icon: "bi-headset", title: "IT Consulting", desc: "Konsultasi strategi teknologi untuk transformasi digital.", color: "#2AA9B4" },
];

const galleryImages = [g1, g2, g3, g4, g5, g6];

const testimonials = [
  { name: "Andi Wijaya", role: "CEO, PT Maju Bersama", text: "Tim ASI sangat profesional. Aplikasi yang dibuat sesuai dengan kebutuhan kami.", avatar: "AW" },
  { name: "Siti Nurhaliza", role: "Direktur Operasional", text: "Integrasi sistem berjalan lancar dan tepat waktu. Sangat direkomendasikan!", avatar: "SN" },
  { name: "Budi Santoso", role: "CTO, TechCorp", text: "Solusi cloud yang mereka berikan sangat membantu skalabilitas bisnis kami.", avatar: "BS" },
  { name: "Rina Kartika", role: "Manager IT", text: "Support tim 24/7 sangat responsif. Puas dengan pelayanannya.", avatar: "RK" },
  { name: "Doni Prasetyo", role: "Founder Startup", text: "Dari konsultasi sampai deployment, semua dikerjakan dengan detail dan rapi.", avatar: "DP" },
  { name: "Maya Anggraini", role: "Head of Digital", text: "Hasil kerjanya melebihi ekspektasi. Timnya sangat kompeten.", avatar: "MA" },
  { name: "Rudi Hermawan", role: "Owner UKM", text: "Bisnis saya kini lebih efisien berkat aplikasi yang dibuat oleh ASI.", avatar: "RH" },
];

const articles = [
  { img: a1, title: "5 Tren Transformasi Digital di 2026", date: "12 Juli 2026", excerpt: "Pelajari tren teknologi terbaru yang akan membentuk masa depan bisnis." },
  { img: a2, title: "Mengapa Cloud Computing Wajib untuk UMKM", date: "05 Juli 2026", excerpt: "Cloud bukan hanya untuk korporat besar — UMKM juga bisa memanfaatkannya." },
  { img: a3, title: "Manfaat Data Analytics untuk Bisnis Anda", date: "28 Juni 2026", excerpt: "Data adalah aset. Ketahui cara mengoptimalkannya untuk pertumbuhan." },
];

const clients = ["ACME", "TechCorp", "InnoLab", "DataPro", "CloudX", "NexGen", "BizHub", "SmartCo"];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#jasa", label: "Jasa Kami" },
  { href: "#galeri", label: "Galeri" },
  { href: "#video", label: "Video" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#artikel", label: "Artikel" },
  { href: "#kontak", label: "Kontak" },
];

function LandingPage() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });

  useEffect(() => {
    let cancelled = false;
    const init = () => {
      if (cancelled) return;
      if (window.AOS) window.AOS.init({ duration: 800, once: true });
      if (window.Swiper) {
        new window.Swiper(".testimoni-swiper", {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          autoplay: { delay: 4000 },
          pagination: { el: ".swiper-pagination", clickable: true },
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
          breakpoints: { 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } },
        });
        new window.Swiper(".client-swiper", {
          slidesPerView: 2,
          spaceBetween: 30,
          loop: true,
          autoplay: { delay: 2000, disableOnInteraction: false },
          breakpoints: { 576: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1200: { slidesPerView: 6 } },
        });
      }
      if (!window.Swiper || !window.AOS) setTimeout(init, 150);
    };
    init();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { nama, email, pesan } = form;
    if (!nama.trim() || !email.trim() || !pesan.trim()) return;
    const message = `Halo, saya ${nama} (${email}).\n\n${pesan}`;
    window.open("https://wa.me/6281234567890?text=" + encodeURIComponent(message), "_blank");
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="asi-page">
      <style>{css}</style>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top asi-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home" onClick={(e) => handleNavClick(e, "#home")}>
            <span style={{ color: "#2AA9B4" }}>PT ASI</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {navLinks.map((l) => (
                <li key={l.href} className="nav-item">
                  <a className="nav-link fw-medium" href={l.href} onClick={(e) => handleNavClick(e, l.href)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="asi-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="badge asi-badge mb-3">Solusi Teknologi Terintegrasi</span>
              <h1 className="display-4 fw-bold text-white mb-3">
                Wujudkan Transformasi Digital Bisnis Anda Bersama Kami
              </h1>
              <p className="lead text-white-50 mb-4">
                PT Aplikasi Solusi Integrasi hadir sebagai partner teknologi terpercaya untuk mengembangkan aplikasi, mengintegrasikan sistem, dan mengoptimalkan proses bisnis Anda.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#jasa" onClick={(e) => handleNavClick(e, "#jasa")} className="btn asi-btn-primary btn-lg px-4">
                  <i className="bi bi-rocket-takeoff me-2"></i>Mulai Sekarang
                </a>
                <a href="#kontak" onClick={(e) => handleNavClick(e, "#kontak")} className="btn btn-outline-light btn-lg px-4">
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center" data-aos="fade-left">
              <img src={heroCs} alt="Customer Service ASI" className="img-fluid asi-hero-img" width={1024} height={1024} />
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="py-5 py-lg-6">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-up">
              <span className="asi-eyebrow">Tentang Kami</span>
              <h2 className="fw-bold mt-2 mb-3">Partner Digital Terpercaya Sejak 2015</h2>
              <p className="text-muted">
                PT Aplikasi Solusi Integrasi adalah perusahaan teknologi yang berfokus pada pengembangan aplikasi dan integrasi sistem. Dengan pengalaman lebih dari 10 tahun, kami telah membantu ratusan klien mencapai tujuan bisnis mereka.
              </p>
              <div className="row g-3 mt-2">
                {[
                  { n: "150+", l: "Proyek Selesai" },
                  { n: "80+", l: "Klien Puas" },
                  { n: "10+", l: "Tahun Pengalaman" },
                  { n: "24/7", l: "Support" },
                ].map((s) => (
                  <div key={s.l} className="col-6">
                    <div className="asi-stat">
                      <div className="fs-2 fw-bold" style={{ color: "#2AA9B4" }}>{s.n}</div>
                      <div className="text-muted small">{s.l}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <div className="asi-about-visual">
                <img src={g1} alt="Tim ASI" className="img-fluid rounded-4 shadow" loading="lazy" width={1024} height={1024} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JASA */}
      <section id="jasa" className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="asi-eyebrow">Layanan Kami</span>
            <h2 className="fw-bold mt-2">Solusi Lengkap untuk Bisnis Anda</h2>
            <p className="text-muted">Kami menyediakan berbagai layanan teknologi untuk mendukung pertumbuhan bisnis Anda.</p>
          </div>
          <div className="row g-4">
            {services.map((s, i) => (
              <div key={s.title} className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={i * 80}>
                <div className="asi-service-card" style={{ ["--overlay" as any]: s.color }}>
                  <div className="asi-service-inner">
                    <div className="asi-service-icon">
                      <i className={`bi ${s.icon}`}></i>
                    </div>
                    <h5 className="fw-bold">{s.title}</h5>
                    <p className="mb-0">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4" data-aos="fade-up">
            <span className="asi-eyebrow">Klien Kami</span>
            <h3 className="fw-bold mt-2">Dipercaya oleh Berbagai Perusahaan</h3>
          </div>
          <div className="swiper client-swiper" data-aos="fade-up">
            <div className="swiper-wrapper align-items-center">
              {clients.map((c) => (
                <div key={c} className="swiper-slide">
                  <div className="asi-client-logo">{c}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section id="galeri" className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="asi-eyebrow">Galeri</span>
            <h2 className="fw-bold mt-2">Momen Bersama Tim & Klien</h2>
          </div>
          <div className="row g-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="asi-gallery-item">
                  <img src={img} alt={`Galeri ${i + 1}`} loading="lazy" width={1024} height={1024} />
                  <div className="asi-gallery-overlay">
                    <i className="bi bi-zoom-in"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="py-5 py-lg-6">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="asi-eyebrow">Video</span>
            <h2 className="fw-bold mt-2">Lihat Kami Beraksi</h2>
          </div>
          <div className="row g-4">
            {["dQw4w9WgXcQ", "aqz-KE-bpKQ"].map((id, i) => (
              <div key={id} className="col-lg-6" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Video ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section id="testimoni" className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="asi-eyebrow">Testimoni</span>
            <h2 className="fw-bold mt-2">Apa Kata Klien Kami</h2>
          </div>
          <div className="swiper testimoni-swiper position-relative pb-5" data-aos="fade-up">
            <div className="swiper-wrapper">
              {testimonials.map((t) => (
                <div key={t.name} className="swiper-slide h-auto">
                  <div className="asi-testimoni-card h-100">
                    <i className="bi bi-quote asi-quote"></i>
                    <p className="mb-4">{t.text}</p>
                    <div className="d-flex align-items-center">
                      <div className="asi-avatar">{t.avatar}</div>
                      <div className="ms-3">
                        <div className="fw-bold">{t.name}</div>
                        <small className="text-muted">{t.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </section>

      {/* ARTIKEL */}
      <section id="artikel" className="py-5 py-lg-6">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="asi-eyebrow">Artikel</span>
            <h2 className="fw-bold mt-2">Insight & Berita Terbaru</h2>
          </div>
          <div className="row g-4">
            {articles.map((a, i) => (
              <div key={a.title} className="col-md-4" data-aos="fade-up" data-aos-delay={i * 100}>
                <article className="asi-article card h-100 border-0 shadow-sm">
                  <img src={a.img} className="card-img-top" alt={a.title} loading="lazy" width={1024} height={1024} />
                  <div className="card-body">
                    <small className="text-muted"><i className="bi bi-calendar3 me-1"></i>{a.date}</small>
                    <h5 className="fw-bold mt-2">{a.title}</h5>
                    <p className="text-muted">{a.excerpt}</p>
                    <a href="#" className="fw-semibold text-decoration-none" style={{ color: "#3D8BFF" }}>
                      Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="asi-cta py-5" data-aos="zoom-in">
        <div className="container text-center text-white">
          <h2 className="fw-bold mb-3">Siap Mengembangkan Bisnis Anda?</h2>
          <p className="mb-4 opacity-75">Konsultasikan kebutuhan digital Anda dengan tim ahli kami — gratis!</p>
          <a href="#kontak" onClick={(e) => handleNavClick(e, "#kontak")} className="btn asi-btn-primary btn-lg px-5">
            <i className="bi bi-chat-dots me-2"></i>Hubungi Sekarang
          </a>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="asi-eyebrow">Kontak</span>
              <h2 className="fw-bold mt-2 mb-3">Mari Berdiskusi</h2>
              <p className="text-muted">Kirim pesan melalui form berikut — akan diteruskan langsung ke WhatsApp kami.</p>
              <ul className="list-unstyled mt-4">
                <li className="mb-3"><i className="bi bi-geo-alt-fill me-2" style={{ color: "#2AA9B4" }}></i>Jl. Sudirman No. 123, Jakarta Pusat</li>
                <li className="mb-3"><i className="bi bi-telephone-fill me-2" style={{ color: "#2AA9B4" }}></i>+62 812-3456-7890</li>
                <li className="mb-3"><i className="bi bi-envelope-fill me-2" style={{ color: "#2AA9B4" }}></i>info@asi.co.id</li>
              </ul>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <form onSubmit={handleSubmit} className="asi-form p-4 p-lg-5 bg-white rounded-4 shadow-sm">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Nama</label>
                  <input required maxLength={100} type="text" className="form-control form-control-lg" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} placeholder="Nama lengkap" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input required maxLength={255} type="email" className="form-control form-control-lg" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="email@contoh.com" />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Pesan</label>
                  <textarea required maxLength={1000} rows={5} className="form-control form-control-lg" value={form.pesan} onChange={(e) => setForm({ ...form, pesan: e.target.value })} placeholder="Ceritakan kebutuhan Anda..."></textarea>
                </div>
                <button type="submit" className="btn asi-btn-primary btn-lg w-100">
                  <i className="bi bi-whatsapp me-2"></i>Kirim via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="asi-footer text-white pt-5">
        <div className="container">
          <div className="row g-4 pb-4">
            <div className="col-md-4">
              <h4 className="fw-bold mb-3">PT Aplikasi Solusi Integrasi</h4>
              <p className="opacity-75">Partner teknologi terpercaya untuk transformasi digital bisnis Anda.</p>
              <p className="opacity-75 mb-0"><i className="bi bi-geo-alt-fill me-2"></i>Jl. Sudirman No. 123, Jakarta Pusat 10220</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Ikuti Kami</h5>
              <div className="d-flex gap-2 mb-3">
                {[
                  { i: "bi-facebook", href: "#" },
                  { i: "bi-instagram", href: "#" },
                  { i: "bi-linkedin", href: "#" },
                  { i: "bi-youtube", href: "#" },
                  { i: "bi-twitter-x", href: "#" },
                ].map((s) => (
                  <a key={s.i} href={s.href} className="asi-social" aria-label={s.i}>
                    <i className={`bi ${s.i}`}></i>
                  </a>
                ))}
              </div>
              <p className="opacity-75 mb-1"><i className="bi bi-envelope-fill me-2"></i>info@asi.co.id</p>
              <p className="opacity-75"><i className="bi bi-telephone-fill me-2"></i>+62 812-3456-7890</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Lokasi Kami</h5>
              <div className="ratio ratio-4x3 rounded-3 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.229!2d106.8229!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJTIDEwNsKwNDknMjIuNCJF!5e0!3m2!1sen!2sid!4v1700000000000"
                  title="Lokasi ASI"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="asi-footer-bottom text-center py-3">
          <div className="container">
            © {new Date().getFullYear()} PT Aplikasi Solusi Integrasi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

const css = `
.asi-page { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; color: #1f2937; scroll-behavior: smooth; }
html { scroll-behavior: smooth; }
.py-lg-6 { padding-top: 5rem !important; padding-bottom: 5rem !important; }

.asi-navbar .nav-link { color: #1f2937; padding: .5rem 1rem !important; position: relative; }
.asi-navbar .nav-link:hover { color: #2AA9B4; }
.asi-navbar .nav-link::after { content: ''; position: absolute; bottom: 4px; left: 50%; width: 0; height: 2px; background: #2AA9B4; transition: all .3s; }
.asi-navbar .nav-link:hover::after { width: 50%; left: 25%; }

.asi-hero { background: linear-gradient(135deg, #2AA9B4 0%, #1e8892 100%); padding: 6rem 0 5rem; position: relative; overflow: hidden; }
.asi-hero::before { content: ''; position: absolute; top: -50%; right: -10%; width: 500px; height: 500px; background: rgba(245,166,35,.15); border-radius: 50%; }
.asi-badge { background: rgba(255,255,255,.15); color: #fff; padding: .5rem 1rem; font-weight: 500; }
.asi-hero-img { max-height: 480px; filter: drop-shadow(0 20px 40px rgba(0,0,0,.2)); }

.asi-btn-primary { background: #3D8BFF; border-color: #3D8BFF; color: #fff; font-weight: 600; transition: all .3s; }
.asi-btn-primary:hover { background: #2670e0; border-color: #2670e0; color: #fff; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(61,139,255,.35); }

.asi-eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: .8rem; font-weight: 700; color: #F5A623; }
.asi-stat { background: #fff; padding: 1.25rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,.05); }

.asi-service-card { position: relative; border-radius: 16px; overflow: hidden; background: #fff; box-shadow: 0 6px 20px rgba(0,0,0,.06); transition: transform .35s ease, box-shadow .35s ease; height: 100%; cursor: pointer; }
.asi-service-inner { padding: 2rem; position: relative; z-index: 2; transition: color .35s; }
.asi-service-card::before { content: ''; position: absolute; inset: 0; background: var(--overlay); opacity: 0; transition: opacity .35s ease; z-index: 1; }
.asi-service-card:hover { transform: translateY(-8px); box-shadow: 0 16px 36px rgba(0,0,0,.12); }
.asi-service-card:hover::before { opacity: 1; }
.asi-service-card:hover .asi-service-inner { color: #fff; }
.asi-service-icon { width: 60px; height: 60px; border-radius: 14px; display: flex; align-items: center; justify-content: center; background: var(--overlay); color: #fff; font-size: 1.75rem; margin-bottom: 1rem; transition: background .35s; }
.asi-service-card:hover .asi-service-icon { background: rgba(255,255,255,.25); }

.asi-client-logo { height: 80px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.5rem; color: #6b7280; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,.05); transition: all .3s; }
.asi-client-logo:hover { color: #2AA9B4; transform: scale(1.05); }

.asi-gallery-item { position: relative; border-radius: 14px; overflow: hidden; aspect-ratio: 4/3; cursor: pointer; }
.asi-gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
.asi-gallery-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(42,169,180,.85), rgba(61,139,255,.85)); color: #fff; font-size: 2rem; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity .35s; }
.asi-gallery-item:hover img { transform: scale(1.1); }
.asi-gallery-item:hover .asi-gallery-overlay { opacity: 1; }

.asi-testimoni-card { background: #fff; padding: 2rem; border-radius: 16px; box-shadow: 0 6px 20px rgba(0,0,0,.06); position: relative; }
.asi-quote { position: absolute; top: 1rem; right: 1.25rem; font-size: 3rem; color: #F5A623; opacity: .3; }
.asi-avatar { width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, #2AA9B4, #3D8BFF); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; }
.testimoni-swiper .swiper-button-next, .testimoni-swiper .swiper-button-prev { color: #2AA9B4; }
.testimoni-swiper .swiper-pagination-bullet-active { background: #2AA9B4; }

.asi-article { transition: transform .3s, box-shadow .3s; border-radius: 16px; overflow: hidden; }
.asi-article:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(0,0,0,.1) !important; }
.asi-article img { height: 220px; object-fit: cover; }

.asi-cta { background: linear-gradient(135deg, #F5A623 0%, #e08c0d 100%); }

.asi-form .form-control:focus { border-color: #2AA9B4; box-shadow: 0 0 0 .2rem rgba(42,169,180,.15); }

.asi-footer { background: #006CB7; }
.asi-social { width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,.15); color: #fff; display: inline-flex; align-items: center; justify-content: center; transition: all .3s; text-decoration: none; }
.asi-social:hover { background: #F5A623; color: #fff; transform: translateY(-3px); }
.asi-footer-bottom { background: #E53935; }

@media (max-width: 768px) {
  .asi-hero { padding: 4rem 0 3rem; }
  .asi-hero h1 { font-size: 2rem; }
}
`;
