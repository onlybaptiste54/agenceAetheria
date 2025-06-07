'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubscribe = async () => {
    setLoading(true);
    setError(null);

    try {
      window.location.href = `https://buy.stripe.com/test_7sY14n1ANdBL1K75PcbII00`;
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] py-20 px-4 flex items-center justify-center"
    >
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-700 dark:text-cyan-300 mb-4">
          Abonnez-vous à notre Newsletter
        </h1>

        <div className="w-20 h-1 bg-cyan-500 dark:bg-cyan-400 mb-6 rounded" />

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Recevez les dernières actus en santé numérique et IA médicale, 1 fois par mois.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre e-mail"
            className="flex-1 px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-300 w-full"
          />
          <button
            onClick={handleSubscribe}
            disabled={loading || !email}
            className="button px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition disabled:opacity-50 w-full sm:w-auto"
          >
            {loading ? 'Chargement...' : "S'inscrire"}
          </button>
        </div>

        {error && (
          <p className="text-red-500 dark:text-red-400 text-sm mt-4">{error}</p>
        )}
      </div>
    </section>
  );
}
