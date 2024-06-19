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
        text: "Harika Destek, hızlı ve etkili hizmetiniz için, dostça ve profesyonel destek ekibiniz için teşekkür etmek istiyorum! Uzman firmanızı tüm arkadaşlarıma tavsiye edeceğim.",
        author: "William Hoy",
        stars: "★★★★★",
        image: "/author.jpg",
      },
      {
        text: "Mükemmel hizmet! Taşımacılık ihtiyaçlarım için her zaman bu firmayı tercih edeceğim.",
        author: "Jane Doe",
        stars: "★★★★★",
        image: "/author2.jpg",
      },
      {
        text: "Hızlı ve güvenilir hizmet. Gerçekten çok memnun kaldım. Teşekkürler!",
        author: "John Smith",
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
    const testimonialImageElement = document.querySelector(
      ".testimonial-author img"
    ) as HTMLImageElement;

    const changeTestimonial = () => {
      const testimonial = testimonials[testimonialIndex];
      testimonialTextElement.innerText = testimonial.text;
      testimonialAuthorElement.innerText = testimonial.author;
      testimonialStarsElement.innerText = testimonial.stars;
      testimonialImageElement.src = testimonial.image;
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
      <Head>
        <title>Servis Taşımacılığı</title>
        <meta
          name="description"
          content="Evinizden İş Yerine Kolay ve Güvenli Taşımacılık"
        />
        <meta
          name="keywords"
          content="taşımacılık, servis, güvenli taşımacılık, kolay taşımacılık, öğrenci taşıma hizmeti,servis,personel taşıma"
        />
        <link rel="icon" href="/big-elit-tur.png" />
      </Head>
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
        <p>Telefon: +90 123456789</p>
        <a target="_blank" rel="noopener noreferrer"   href={`https://wa.me/${WHATSAPP_NUMBER}`}>

        <button>Şimdi Rezervasyon Yap</button>
</a>
      
      </section>

      <section className="services" id="services">
        <h2>Hizmetlerimiz</h2>
        <p>Her Zaman Hizmetinizdeyiz</p>
        <div className="service-cards">
          <div className="service-card">
            <img src="/taksi.svg" alt="personel taşıma" />
            <h3>Personel</h3>
            <p>Personel taşımacılık hizmetleri sunuyoruz.</p>
          </div>
          <div className="service-card">
            <img src="/paket.svg" alt="öğrenci taşıma" />
            <h3>Öğrenci </h3>
            <p>Öğrencilere özel taşımacılık hizmetleri sunuyoruz.</p>
          </div>
          <div className="service-card">
            <img src="/servis.svg" alt="Servis Hizmeti" />
            <h3>Hizmet</h3>
            <p>24/7 hızlı taksi hizmetleri. Her zaman hizmetinizdeyiz.</p>
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
            <img src="/back.jpg" alt="Ford Taksi" />
            <h3>Ford</h3>
            <div className="vehicle-details">
              <span>4 Kişi</span>
              <span>20 KM</span>
              <span>4 Çanta</span>
              <span>Yeni</span>
              <span>2024</span>
            </div>
            <p className="price">$1,000.00/Gün</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
            >
              <button>Hemen Rezervasyon Yap</button>
            </a>
          </div>
          <div className="vehicle-card">
            <img src="/back.jpg" alt="Toyota Taksi" />
            <h3>Toyota</h3>
            <div className="vehicle-details">
              <span>4 Kişi</span>
              <span>20 KM</span>
              <span>4 Çanta</span>
              <span>Yeni</span>
              <span>2024</span>
            </div>
            <p className="price">$1,000.00/Gün</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
            >
              <button>Hemen Rezervasyon Yap</button>
            </a>
          </div>
          <div className="vehicle-card">
            <img src="/back.jpg" alt="Mercedes Taksi" />
            <h3>Mercedes</h3>
            <div className="vehicle-details">
              <span>4 Kişi</span>
              <span>20 KM</span>
              <span>4 Çanta</span>
              <span>Yeni</span>
              <span>2024</span>
            </div>
            <p className="price">$1,000.00/Gün</p>
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

      <div className="gallery" id="gallery">
        <h2>Galeri</h2>
        <p>En iyi araç resimlerimiz</p>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/back.jpg" alt="Araba 1" />
          </div>
          <div className="gallery-item">
            <img src="/back2.jpg" alt="Araba 2" />
          </div>
          <div className="gallery-item">
            <img src="/back.jpg" alt="Araba 3" />
          </div>
          <div className="gallery-item">
            <img src="/back2.jpg" alt="Araba 4" />
          </div>
          <div className="gallery-item">
            <img src="/back.jpg" alt="Araba 5" />
          </div>
          <div className="gallery-item">
            <img src="/back2.jpg" alt="Araba 6" />
          </div>
        </div>
      </div>

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
            <img src="/author.jpg" alt="William Hoy" />
            <h3>William Hoy</h3>
            <div className="stars">★★★★★</div>
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
