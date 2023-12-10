
import { register } from "swiper/element/bundle";
import NavBar from "./components/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "./components/Footer";

register();
function App() {
  const data = [
    {
      id: 1,
      image:
        "https://get.wallhere.com/photo/2048x1365-px-code-coding-color-codes-computer-Computer-screen-CSS-HTML-Java-knowledge-logic-minified-PHP-pixels-programming-programming-language-syntax-highlighting-1291833.jpg",
    },
    {
      id: 2,
      image:
        "https://c1.wallpaperflare.com/preview/574/155/736/computer-screen-man-male.jpg",
    },
    {
      id: 3,
      image:
        "https://www.fintory.com/_next/image?url=https%3A%2F%2Fblog-api.fintory.com%2Fwp-content%2Fuploads%2F2022%2F02%2FDSC07413-Bearbeitet-scaled.jpg&w=828&q=75",
    },
    {
      id: 4,
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2023/05/Web-Developer-Featured-Image-2048x1365-1-1024x683.jpeg",
    },
  ];
  return (
    <div>
      <NavBar />
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="imagem" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
