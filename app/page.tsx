import Image from "next/image";

const logoSrc = "/efovi-logo-oficial.jpeg";

const navigation = [
  "La Escuela",
  "Carrera",
  "Cursos",
  "Apuntes",
  "Videos",
  "Libros",
  "Marketplace",
];

const mobileNavigation = navigation.slice(0, 4);
const mobileMoreNavigation = navigation.slice(4);

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "Academia virtual EFOVI",
    title: "Formación para una vida con propósito",
    text: "Un espacio educativo para aprender, crecer y transformar la manera de vivir, liderar y servir.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "Desarrollo integral",
    title: "Aprender, crecer y transformar",
    text: "Cursos, carreras y materiales diseñados para acompañar procesos personales, espirituales y profesionales.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "Comunidad educativa",
    title: "Una escuela para el desarrollo integral",
    text: "Formación accesible, profunda y moderna para personas que buscan una vida con sentido.",
  },
];

const courses = [
  {
    title: "Liderazgo Personal",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    text: "Herramientas para tomar decisiones, liderar procesos y fortalecer la visión personal.",
  },
  {
    title: "Inteligencia Emocional",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    text: "Recursos para reconocer emociones, ordenar vinculos y responder con mayor claridad.",
  },
  {
    title: "Introducción a la Kabbalah",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
    text: "Una aproximacion inicial al pensamiento espiritual y sus aplicaciones para la vida cotidiana.",
  },
  {
    title: "Comunicación Efectiva",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    text: "Practicas para expresar ideas, escuchar mejor y construir conversaciones transformadoras.",
  },
  {
    title: "Gestión del Propósito",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    text: "Metodos para descubrir talentos, ordenar metas y avanzar con direccion.",
  },
  {
    title: "Desarrollo de Hábitos",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80",
    text: "Estrategias concretas para sostener rutinas de aprendizaje, bienestar y crecimiento.",
  },
];

const notes = [
  "Desarrollo Personal",
  "Espiritualidad",
  "Liderazgo",
  "Educación Financiera",
];

const videos = [
  {
    title: "Clase abierta: vida con sentido",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Taller de liderazgo interior",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Encuentro de formacion espiritual",
    image:
      "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=900&q=80",
  },
];

const books = [
  "Proposito y vida",
  "Camino interior",
  "Liderar con valores",
  "Hábitos conscientes",
];

const marketplace = [
  "Cursos certificados",
  "Libros digitales",
  "Material descargable",
  "Certificaciones",
];

function LogoMark({ priority = false }: { priority?: boolean }) {
  return (
    <a
      href="#"
      className="flex shrink-0 items-center"
      aria-label="Inicio EFOVI"
    >
      <Image
        src={logoSrc}
        alt="EFOVI - Escuela de Formación para la Vida"
        width={500}
        height={200}
        className="h-auto w-24 rounded-sm object-contain shadow-lg shadow-violet-950/15 sm:w-44 lg:w-52"
        priority={priority}
      />
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-violet-100/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <LogoMark priority />
        <nav className="hidden items-center gap-1 rounded-full border border-violet-100 bg-violet-50/70 px-2 py-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-full px-3 py-2 text-sm font-medium text-violet-950 transition hover:bg-white hover:text-violet-700"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="#mi-cuenta"
            className="inline-flex rounded-full px-3 py-2 text-xs font-semibold text-violet-950 transition hover:bg-violet-50 sm:px-4 sm:text-sm"
          >
            Mi Cuenta
          </a>
          <a
            href="#inscripcion"
            className="rounded-full bg-[#5f168f] px-3 py-2 text-xs font-bold text-white shadow-lg shadow-violet-950/25 transition hover:bg-[#310b63] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Inscribirme
          </a>
        </div>
      </div>
      <nav className="border-t border-violet-100 px-3 py-3 lg:hidden">
        <div className="relative flex flex-wrap items-center gap-2">
          {mobileNavigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-full bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-900 sm:text-sm"
            >
              {item}
            </a>
          ))}
          <details className="relative">
            <summary className="list-none rounded-full bg-violet-900 px-3 py-2 text-xs font-bold text-white shadow-sm sm:text-sm">
              Más
            </summary>
            <div className="absolute right-0 top-11 z-50 w-48 overflow-hidden rounded-lg border border-violet-100 bg-white p-2 shadow-xl shadow-violet-950/15">
              {mobileMoreNavigation.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-violet-950 transition hover:bg-violet-50"
                >
                  {item}
                </a>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}

function HeroCarousel() {
  return (
    <section className="relative min-h-[550px] overflow-hidden bg-violet-950 text-white sm:min-h-[520px] lg:min-h-[525px]">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.title}
            className="efovi-slide absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(43, 12, 88, 0.94), rgba(104, 24, 151, 0.7), rgba(24, 8, 50, 0.34)), url(${slide.image})`,
              animationDelay: `${index * 6}s`,
            }}
          />
        ))}
      </div>
      <div className="relative mx-auto flex min-h-[550px] max-w-7xl items-start px-4 pb-8 pt-9 sm:min-h-[520px] sm:px-6 sm:pb-9 sm:pt-10 lg:min-h-[525px] lg:px-8 lg:pb-10 lg:pt-11">
        <div className="w-full max-w-5xl">
          <div className="hidden">
            Escuela de Formación para la Vida
          </div>
          <div className="efovi-copy-stack relative min-h-[345px] sm:min-h-[290px] lg:min-h-[245px] xl:min-h-[280px]">
            {heroSlides.map((slide, index) => (
              <article
                key={slide.title}
                className="efovi-copy absolute inset-0 max-w-4xl"
                style={{ animationDelay: `${index * 6}s` }}
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-violet-100 sm:text-sm sm:tracking-[0.28em]">
                  {slide.eyebrow}
                </p>
                <h1 className="max-w-4xl text-[2.45rem] font-black leading-[1.03] tracking-normal sm:text-[3.2rem] lg:text-[3.9rem] xl:text-[4.35rem]">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-violet-50 sm:text-lg sm:leading-8 lg:text-xl">
                  {slide.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-2 flex w-full flex-col gap-3 sm:mt-3 sm:flex-row lg:absolute lg:bottom-10 lg:right-8 lg:mt-0 lg:w-auto lg:justify-end lg:gap-4">
            <a
              href="#carrera"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-violet-950 shadow-xl shadow-violet-950/20 transition hover:bg-violet-50"
            >
              Conocer Carrera
            </a>
            <a
              href="#cursos"
              className="rounded-full border border-white/35 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explorar Cursos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-violet-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-normal text-violet-950 sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>
      ) : null}
    </div>
  );
}

function ImageCard({
  title,
  text,
  image,
  button = "Ver Más",
}: {
  title: string;
  text: string;
  image: string;
  button?: string;
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-violet-100 bg-white shadow-sm shadow-violet-950/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/10">
            <div className="relative h-48 w-full">
              <Image src={image} alt="" fill className="object-cover" />
            </div>
      <div className="p-6">
        <h3 className="text-xl font-black text-violet-950">{title}</h3>
        <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">{text}</p>
        <a
          href="#inscripcion"
          className="mt-5 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-900 transition hover:bg-violet-800 hover:text-white"
        >
          {button}
        </a>
      </div>
    </article>
  );
}

function MissionVision() {
  return (
    <section id="la-escuela" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="ESCUELA DE FORMACIÓN PARA LA VIDA"
          text="Aprendizaje, propósito y transformación personal."
        />
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-lg border border-violet-100 bg-violet-50/60 p-8 shadow-sm">
            <p className="text-lg leading-9 text-slate-700">
              EFOVI nace como una escuela orientada al desarrollo integral de
              las personas.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              Buscamos brindar herramientas para el crecimiento personal,
              espiritual, emocional y profesional.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              Nuestra misión es acompañar procesos de formación profunda
              mediante cursos, carreras, apuntes, libros, videos y espacios de
              aprendizaje accesibles para todos.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              Nuestra visión es formar personas capaces de descubrir su
              propósito, desarrollar sus talentos y generar impacto positivo en
              el mundo.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-violet-950">
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85"
              alt="Persona estudiando en un entorno sereno"
              width={1200}
              height={900}
              className="h-[560px] w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-violet-100">
                Misión y visión
              </p>
              <p className="mt-3 max-w-md text-2xl font-black">
                Formación profunda para una vida con sentido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCareer() {
  return (
    <section id="carrera" className="bg-violet-950 py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
            alt="Clase de formacion academica"
            width={1200}
            height={900}
            className="h-[460px] w-full object-cover"
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-violet-200">
            Carrera destacada
          </p>
          <h2 className="text-4xl font-black tracking-normal sm:text-5xl">
            Carrera de Formación para la Vida
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-50">
            Un trayecto académico integral para ordenar conocimientos,
            fortalecer la vida interior, desarrollar liderazgo personal y
            aplicar herramientas concretas de transformación.
          </p>
          <a
            href="#inscripcion"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-violet-950 transition hover:bg-violet-100"
          >
            Conocer Carrera
          </a>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="cursos" className="bg-[#fbf9ff] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cursos destacados"
          title="Programas para crecer con claridad"
          text="Una propuesta modular para aprender a tu ritmo y avanzar hacia una formación integral."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <ImageCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Notes() {
  return (
    <section id="apuntes" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Apuntes"
          title="Biblioteca digital EFOVI"
          text="Materiales de estudio organizados para acompañarte antes, durante y después de cada clase."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {notes.map((note, index) => (
            <article
              key={note}
              className="rounded-lg border border-violet-100 bg-gradient-to-br from-white to-violet-50 p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-800 text-sm font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-xl font-black text-violet-950">
                {note}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                  Guías, lecturas y recursos preparados para consulta permanente.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Videos() {
  return (
    <section id="videos" className="bg-violet-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Videos"
          title="Clases online y encuentros formativos"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {videos.map((video) => (
            <article
              key={video.title}
              className="group overflow-hidden rounded-lg border border-violet-100 bg-white shadow-sm"
            >
              <div className="relative">
                <Image
                  src={video.image}
                  alt=""
                  width={900}
                  height={640}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-xl"
                  aria-hidden="true"
                >
                  <span className="play-triangle" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-violet-950">
                  {video.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Books() {
  return (
    <section id="libros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Libros"
          title="Lecturas para profundizar"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book, index) => (
            <article key={book} className="rounded-lg bg-violet-950 p-4">
              <div className="flex aspect-[3/4] flex-col justify-between rounded-md border border-white/20 bg-gradient-to-br from-violet-700 via-violet-900 to-slate-950 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-200">
                  Biblioteca EFOVI
                </p>
                <h3 className="text-3xl font-black leading-tight">{book}</h3>
                <p className="text-sm text-violet-100">
                  Vol. {String(index + 1).padStart(2, "0")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marketplace() {
  return (
    <section id="marketplace" className="bg-[#fbf9ff] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Marketplace"
          title="Productos formativos preparados para escalar"
          text="Una estructura visual lista para sumar pagos, descargas, certificados y acceso al campus virtual."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {marketplace.map((item) => (
            <article
              key={item}
              className="rounded-lg border border-violet-100 bg-white p-6 shadow-sm transition hover:border-violet-300 hover:shadow-xl hover:shadow-violet-950/10"
            >
              <div className="mb-8 h-24 rounded-md bg-gradient-to-br from-violet-800 to-fuchsia-900" />
              <h3 className="text-xl font-black text-violet-950">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Espacio preparado para venta, entrega digital y seguimiento de
                alumnos.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section
      id="inscripcion"
      className="bg-[linear-gradient(135deg,#180832,#5f168f_58%,#2b0c58)] py-20 text-white sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-violet-100">
          Escuela de Formación para la Vida
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">
          Comenzá hoy tu camino de formación.
        </h2>
        <a
          href="#"
          className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-black text-violet-950 shadow-xl shadow-violet-950/20 transition hover:bg-violet-100"
        >
          Inscribirme Ahora
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <LogoMark />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Formando personas para una vida con sentido.
          </p>
        </div>
        <nav className="flex max-w-2xl flex-wrap gap-3">
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-violet-300 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <HeroCarousel />
      <MissionVision />
      <FeaturedCareer />
      <Courses />
      <Notes />
      <Videos />
      <Books />
      <Marketplace />
      <FinalCta />
      <Footer />
    </main>
  );
}
