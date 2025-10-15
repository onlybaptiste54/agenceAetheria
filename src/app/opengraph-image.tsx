import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0f172a, #1e3a8a)', // bleu foncé vers indigo
          fontFamily: 'Sora, sans-serif',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Logo */}
        <img
          src="https://www.agenceaetheria.com/LogoAetheriaaNoBg.png" // à mettre dans /public si besoin
          alt="Logo AetherIA"
          width={160}
          height={160}
          style={{ marginBottom: 40 }}
        />

        {/* Texte principal */}
        <h1 style={{ fontSize: 60, fontWeight: 700, marginBottom: 20 }}>
          Assistant IA sur mesure
        </h1>
        <p style={{ fontSize: 30, opacity: 0.9, marginBottom: 40 }}>
          Gagnez 5h/semaine avec AetherIA
        </p>

        {/* Bas de bannière */}
        <p style={{ fontSize: 24, opacity: 0.8 }}>www.agenceaetheria.com</p>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
