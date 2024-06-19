"use client";
import Head from "next/head";
import { useEffect } from "react";

const Home = () => {
  const WHATSAPP_NUMBER = "+905552332833";

  useEffect(() => {
    // Hero section image slider
    let currentIndex = 0;
    const images = ["/back.jpg", "/back2.jpg", "/transport.jpg"];
    const heroElement = document.querySelector(".hero") as HTMLElement;

    const changeBackgroundImage = () => {
      heroElement.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;
    };

    changeBackgroundImage();
    const intervalId = setInterval(changeBackgroundImage, 5000);

    // Testimonials slider
    let testimonialIndex = 0;
    const testimonials = [
      {
        text: "Harika destek, hızlı ve etkili hizmetiniz için, dostça ve profesyonel destek ekibiniz için teşekkür etmek istiyorum! Uzman firmanızı tüm arkadaşlarıma tavsiye edeceğim.",
        author: "Ahmet Yılmaz",
        stars: "★★★★★",
        image: "/author.jpg",
      },
      {
        text: "Mükemmel hizmet! Taşımacılık ihtiyaçlarım için her zaman bu firmayı tercih edeceğim.",
        author: "Ayşe Kaya",
        stars: "★★★★★",
        image: "/author2.jpg",
      },
      {
        text: "Hızlı ve güvenilir hizmet. Gerçekten çok memnun kaldım. Teşekkürler!",
        author: "Mehmet Demir",
        stars: "★★★★★",
        image: "/author3.jpg",
      },
    ];

    const testimonialTextElement = document.querySelector(
      ".testimonial-text p"
    ) as HTMLElement;
    const testimonialAuthorElement = document.querySelector(
      ".testimonial-author h3"
    ) as HTMLElement;
    const testimonialStarsElement = document.querySelector(
      ".testimonial-author .stars"
    ) as HTMLElement;

    const changeTestimonial = () => {
      const testimonial = testimonials[testimonialIndex];
      testimonialTextElement.innerText = testimonial.text;
      testimonialAuthorElement.innerText = testimonial.author;
      testimonialStarsElement.innerText = testimonial.stars;

      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    };

    changeTestimonial();
    const testimonialIntervalId = setInterval(changeTestimonial, 5000);

    // Navbar Toggle Script
    const menuToggle = document.querySelector(".menu-toggle") as HTMLElement;
    const navLinks = document.querySelector(".nav-links") as HTMLElement;

    menuToggle?.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    return () => {
      clearInterval(intervalId);
      clearInterval(testimonialIntervalId);
      menuToggle?.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src="/big-elit-tur.png" alt="Servis Taşımacılığı Logo" />
        </div>
        <nav className="nav-links">
          <a href="#home">Ana Sayfa</a>
          <a href="#services">Hizmetler</a>
          <a href="#packages">Paketler</a>
          <a href="#gallery">Galeri</a>
        </nav>
        <div className="cta">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
          >
            <button>Rezervasyon Yap</button>
          </a>
        </div>
      </header>
      <section className="hero" id="home">
        <div className="overlay"></div>
        <h1>Güvenilir Taşımacılık Hizmeti</h1>
        <p>Konforlu ve Kolay Taşımacılık</p>
        <p>Telefon: +90 555 233 28 33</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
        >
          <button>Şimdi Rezervasyon Yap</button>
        </a>
      </section>

      <section className="services" id="services">
        <h2>Hizmetlerimiz</h2>
        <p>Her Zaman Hizmetinizdeyiz</p>
        <div className="service-cards">
          <div className="service-card">
            <img src="/bus.png" alt="Personel taşıma" />
            <h3>Personel</h3>
            <p>Personel taşımacılık hizmetleri sunuyoruz.</p>
          </div>
          <div className="service-card">
            <img src="/paket.svg" alt="Öğrenci taşıma" />
            <h3>Öğrenci</h3>
            <p>Öğrencilere özel taşımacılık hizmetleri sunuyoruz.</p>
          </div>
          <div className="service-card">
            <img src="/servis.svg" alt="Servis Hizmeti" />
            <h3>Hizmet</h3>
            <p>7/24 hızlı servis hizmetleri. Her zaman hizmetinizdeyiz.</p>
          </div>
        </div>
      </section>

      <section className="hero-orange" id="packages">
        <div className="overlay"></div>
        <div className="hero-content">
          <img src="/bus-driver.svg" alt="Otobüs Şöforü" />
          <h1>24/7 Güvenilir Servis Hizmeti</h1>
          <p>
            Konforlu ve Kolay Taşımacılık Hizmetlerimizle Yolculuğun Tadını
            Çıkarın
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
          >
            <button>Hemen Rezervasyon Yap</button>
          </a>
        </div>
      </section>

      <section className="vehicles">
        <h2>Araçlarımız</h2>
        <p>24/7 hızlı servis hizmetleri</p>
        <div className="vehicle-cards">
          <div className="vehicle-card">
            <div className="vehicle-image-wrapper">
              <img src="/ford.jpg" alt="Ford Servis" />
            </div>
            <h3>Ford</h3>
            <div className="vehicle-details">
              <span>4 Kişi</span>
              <span>20 KM</span>
              <span>4 Çanta</span>
              <span>Yeni</span>
              <span>2024</span>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
            >
              <button>Hemen Rezervasyon Yap</button>
            </a>
          </div>
          <div className="vehicle-card">
            <div className="vehicle-image-wrapper">
              <img src="/toyota.jpg" alt="Toyota Servis" />
            </div>
            <h3>Toyota</h3>
            <div className="vehicle-details">
              <span>4 Kişi</span>
              <span>20 KM</span>
              <span>4 Çanta</span>
              <span>Yeni</span>
              <span>2024</span>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
            >
              <button>Hemen Rezervasyon Yap</button>
            </a>
          </div>
          <div className="vehicle-card">
            <div className="vehicle-image-wrapper">
              <img src="/mercedes.webp" alt="Mercedes Servis" />
            </div>
            <h3>Mercedes</h3>
            <div className="vehicle-details">
              <span>4 Kişi</span>
              <span>20 KM</span>
              <span>4 Çanta</span>
              <span>Yeni</span>
              <span>2024</span>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
            >
              <button>Hemen Rezervasyon Yap</button>
            </a>
          </div>
        </div>
      </section>
      <section className="gallery" id="gallery">
        <h2>Galeri</h2>
        <p>En iyi araç resimlerimiz</p>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/tasimacilik.jpg" alt="Araba 1" />
          </div>
          <div className="gallery-item">
            <img src="/tasimacilik2.webp" alt="Araba 2" />
          </div>
          <div className="gallery-item">
            <img src="/tasimacilik3.jpg" alt="Araba 3" />
          </div>
          <div className="gallery-item">
            <img src="/tasimacilik4.jpg" alt="Araba 4" />
          </div>
          <div className="gallery-item">
            <img src="/back.jpg" alt="Araba 5" />
          </div>
          <div className="gallery-item">
            <img src="/back2.jpg" alt="Araba 6" />
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>GÖRÜŞLER</h2>
        <p>İnsanlar bizi seviyor</p>
        <div className="testimonial-content">
          <div className="quote-icon">“</div>
          <div className="testimonial-text">
            <p>
              Harika Destek, hızlı ve etkili hizmetiniz için, dostça ve
              profesyonel destek ekibiniz için teşekkür etmek istiyorum! Uzman
              firmanızı tüm arkadaşlarıma tavsiye edeceğim.
            </p>
          </div>
          <div className="quote-icon right">”</div>
          <div className="testimonial-author">
            <h3 className="testimonial-name"></h3>
            <div className="stars"></div>
          </div>
        </div>
      </section>

      <a
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
      >
        <img
          src="/whatsapp-icon.png"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </>
  );
};

export default Home;
