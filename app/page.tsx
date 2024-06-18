"use client";
import Head from "next/head";
import { useEffect } from "react";

const Home = () => {
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
        image: "/author.jpg"
      },
      {
        text: "Mükemmel hizmet! Taşımacılık ihtiyaçlarım için her zaman bu firmayı tercih edeceğim.",
        author: "Jane Doe",
        stars: "★★★★★",
        image: "/author2.jpg"
      },
      {
        text: "Hızlı ve güvenilir hizmet. Gerçekten çok memnun kaldım. Teşekkürler!",
        author: "John Smith",
        stars: "★★★★★",
        image: "/author3.jpg"
      }
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

    return () => {
      clearInterval(intervalId);
      clearInterval(testimonialIntervalId);
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navbar">
        <div className="logo">
          <img src="/transport.png" alt="Logo" />
        </div>
        <nav>
          <a href="#">Ana Sayfa</a>
          <a href="#">Hizmetler</a>
          <a href="#">Paketler</a>
          <a href="#">Galeri</a>
        </nav>
        <div className="cta">
          <button
            onClick={() =>
              window.open("https://wa.me/YOUR_WHATSAPP_NUMBER", "_blank")
            }
          >
            İletişime Geç
          </button>
        </div>
      </div>
      <div className="hero">
        <div className="overlay"></div>
        <h1>Güvenilir Taşımacılık Hizmeti</h1>
        <p>Konforlu ve Kolay Taşımacılık</p>
        <p>Telefon: +90 123456789</p>
        <button>Şimdi Rezervasyon Yap</button>
      </div>

      {/* Hizmetlerimiz Bölümü */}
      <div className="services">
        <h2>Hizmetlerimiz</h2>
        <p>Her Zaman Hizmetinizdeyiz</p>
        <div className="service-cards">
          <div className="service-card">
            <img src="/taksi.svg" alt="Taksi" />
            <h3>Taksi</h3>
            <p>Konforlu ve kolay taksi hizmetlerimizden yararlanın.</p>
          </div>
          <div className="service-card">
            <img src="/paket.svg" alt="Paket" />
            <h3>Paket</h3>
            <p>Paketlerinizi güvenle ve zamanında teslim ediyoruz.</p>
          </div>
          <div className="service-card">
            <img src="/servis.svg" alt="Servis" />
            <h3>Hizmet</h3>
            <p>24/7 hızlı taksi hizmetleri. Her zaman hizmetinizdeyiz.</p>
          </div>
        </div>
      </div>

      {/* 724 Bölümü */}
      <div className="hero-orange">
        <div className="overlay"></div>
        <div className="hero-content">
          <img src="/bus-logo.png" alt="Taxi Icon" />
          <h1>24/7 Güvenilir Taksi Hizmeti</h1>
          <p>
            Konforlu ve Kolay Taşımacılık Hizmetlerimizle Yolculuğun Tadını
            Çıkarın
          </p>
          <button>Şimdi Rezervasyon Yap</button>
        </div>
      </div>

      {/* Araçlarımız Bölümü */}
      <div className="vehicles">
        <h2>Araçlarımız</h2>
        <p>24/7 hızlı taksi hizmetleri</p>
        <div className="vehicle-cards">
          <div className="vehicle-card">
            <img src="/back.jpg" alt="Ford" />
            <h3>Ford</h3>
            <div className="vehicle-details">
              <span>4 Kişi</span>
              <span>20 KM</span>
              <span>4 Çanta</span>
              <span>Yeni</span>
              <span>2024</span>
            </div>
            <p className="price">$1,000.00/Gün</p>
            <button>Hemen Rezervasyon Yap</button>
          </div>
          <div className="vehicle-card">
            <img src="/back.jpg" alt="Toyota" />
            <h3>Toyota</h3>
            <div className="vehicle-details">
              <span>4 Kişi</span>
              <span>20 KM</span>
              <span>4 Çanta</span>
              <span>Yeni</span>
              <span>2024</span>
            </div>
            <p className="price">$1,000.00/Gün</p>
            <button>Hemen Rezervasyon Yap</button>
          </div>
          <div className="vehicle-card">
            <img src="/back.jpg" alt="Mercedes" />
            <h3>Mercedes</h3>
            <div className="vehicle-details">
              <span>4 Kişi</span>
              <span>20 KM</span>
              <span>4 Çanta</span>
              <span>Yeni</span>
              <span>2024</span>
            </div>
            <p className="price">$1,000.00/Gün</p>
            <button>Hemen Rezervasyon Yap</button>
          </div>
        </div>
      </div>

      {/* Galeri Bölümü */}
      <div className="gallery">
        <h2>Galeri</h2>
        <p>En iyi araç resimlerimiz</p>
        <div className="gallery-buttons">
          <button className="active">Hepsi</button>
          <button>Ofis</button>
          <button>Düğün</button>
          <button>Etkinlikler</button>
          <button>VIP Rezervasyon</button>
        </div>
        <div className="gallery-images">
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

      {/* Görüşler Bölümü */}
      <div className="testimonials">
        <h2>GÖRÜŞLER</h2>
        <p>İnsanlar bizi seviyor</p>
        <div className="testimonial-content">
          <div className="quote-icon">“</div>
          <div className="testimonial-text">
            <p>
              Harika Destek, hızlı ve etkili hizmetiniz için, dostça ve profesyonel destek ekibiniz için teşekkür etmek istiyorum! Uzman firmanızı tüm arkadaşlarıma tavsiye edeceğim.
            </p>
          </div>
          <div className="quote-icon right">”</div>
          <div className="testimonial-author">
            <img src="/author.jpg" alt="William Hoy" />
            <h3>William Hoy</h3>
            <div className="stars">★★★★★</div>
          </div>
        </div>
      </div>

      <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
  <img src="/whatsapp-icon.png" alt="WhatsApp" className="whatsapp-icon" />
</a>
    </>
  );
};

export default Home;
