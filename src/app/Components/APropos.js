import Image from "next/image";

export default function Apropos() {
  return (
    <section
      id="a-propos"
      className="relative py-24 px-6 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Colonne texte */}
        <div className="relative w-full md:w-1/2 space-y-8">
          {/* Ligne décorative */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full opacity-70" />

          <div className="pl-8 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 drop-shadow-lg">
              Derrière Aetheria
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 opacity-80 leading-relaxed">
              Trop d’entreprises utilisent encore des outils qui ne leur correspondent pas. <br />
              Des logiciels rigides, peu d’automatisation, des tâches répétitives, et toujours plus de paperasse.
            </p>

            <p className="text-lg leading-relaxed text-[var(--color-text)]/80">
              Je suis <strong>Baptiste Beroual</strong>, fondateur d’Aetheria. <br />
              J’aide les indépendants et les PME à automatiser leurs processus, connecter leurs outils, et gagner en efficacité.
            </p>

            <p className="text-lg leading-relaxed text-[var(--color-text)]/80">
              Chaque projet est conçu sur mesure, avec une approche claire, pragmatique et transparente.
            </p>
          </div>
        </div>

        {/* Image avec effet fondu */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-300/30 via-transparent to-transparent blur-3xl" />
          <div className="relative z-10 p-[2px] rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/40 shadow-xl">
            <div className="rounded-full bg-[var(--color-bg)] p-1">
              <Image
                src="/baptisteImage.png"
                alt="Baptiste Beroual"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Icône LinkedIn */}
          <a
            href="https://www.linkedin.com/in/baptiste-beroual-27865326b/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-cyan-500 hover:text-cyan-600 transition-transform duration-300 transform hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.53c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zm15.11 12.92h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
