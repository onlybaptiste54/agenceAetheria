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
        id="Contact"
        className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)] px-4 py-20"
      >
        <div className="form-container w-full max-w-2xl p-8 rounded-lg border">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[var(--color-text)] mb-3">Contactez-nous</h1>
            <p className="text-[var(--color-text)]/70">
              Une idée, un projet ? Envoyez-nous un message, nous vous répondrons rapidement.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'email'].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-[var(--color-text)] mb-1 capitalize">
                  {field === 'name' ? 'Nom' : 'Email'}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Votre ${field === 'name' ? 'nom' : 'email'}`}
                  className="form-input w-full px-4 py-3 rounded-lg border"
                  required
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                rows={5}
                className="form-textarea w-full px-4 py-3 rounded-lg border resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="form-button w-full py-3 rounded-lg font-semibold"
            >
              Envoyer
            </button>

            {status && (
              <div className={`mt-4 px-4 py-3 rounded-lg text-center ${
                status.includes('Erreur') ? 'form-status-error' : 'form-status-success'
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