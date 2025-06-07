'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://app.getaetheria.com/webhook-test/54678454-647f-44a5-b0d1-629a9a247848', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Formulaire envoyé !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("Erreur lors de l’envoi.");
      }
    } catch (error) {
      setStatus("Erreur lors de l’envoi.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="section-divider" />
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-[--color-bg] text-[--color-text] px-4 py-20"
      >
        <div className="w-full max-w-2xl p-10 rounded-2xl shadow-xl border border-[--color-border] bg-gradient-to-br from-white via-white/70 to-cyan-100/70 ">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[--color-text] mb-3">Contactez-nous</h1>
            <p className="text-[--color-text]/70">
              Une idée, un projet ? Envoyez-nous un message, nous vous répondrons rapidement.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'email'].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-[--color-text] mb-1 capitalize">
                  {field === 'name' ? 'Nom' : 'Email'}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Votre ${field === 'name' ? 'nom' : 'email'}`}
                  className="w-full px-4 py-3 rounded-xl border border-[--color-border] bg-white text-black shadow-sm focus:ring-2 focus:ring-[--color-accent] focus:outline-none transition"
                  required
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-[--color-text] mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-[--color-border] bg-white text-black shadow-sm focus:ring-2 focus:ring-[--color-accent] focus:outline-none transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[--color-text] text-white font-semibold hover:bg-black transition-colors shadow-md"
            >
              Envoyer
            </button>

            {status && (
              <div className={`mt-4 px-4 py-3 rounded-xl text-center shadow-sm ${
                status.includes('Erreur')
                  ? 'bg-red-100 text-red-700 border border-red-300'
                  : 'bg-green-100 text-green-700 border border-green-300'
              }`}>
                {status}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
