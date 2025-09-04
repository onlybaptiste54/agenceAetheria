'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objectif: '',
    outils: '',
    volumetrie: '',
    message: '',
    honeypot: '', // Champ honeypot pour détecter les bots
  });
  const [status, setStatus] = useState('');

  // Fonction pour vérifier/gérer la limitation de taux
  const checkRateLimit = () => {
    const submissionKey = 'formSubmissions';
    const maxSubmissions = 3;
    const timeWindow = 24 * 60 * 60 * 1000; // 24 heures en millisecondes

    const submissions = JSON.parse(localStorage.getItem(submissionKey) || '[]');
    const now = Date.now();

    // Filtrer les soumissions dans la fenêtre de temps
    const recentSubmissions = submissions.filter(
      (submission) => now - submission.timestamp < timeWindow
    );

    if (recentSubmissions.length >= maxSubmissions) {
      return false; // Limite atteinte
    }

    // Ajouter la nouvelle soumission
    recentSubmissions.push({ timestamp: now });
    localStorage.setItem(submissionKey, JSON.stringify(recentSubmissions));
    return true;
  };

  // Validation des entrées
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.honeypot !== '') {
      return 'Bot détecté. Veuillez réessayer.';
    }
    if (formData.name.length > 50) {
      return 'Le nom est trop long (50 caractères maximum).';
    }
    if (!emailRegex.test(formData.email)) {
      return 'Veuillez entrer une adresse e-mail valide.';
    }
    if (formData.message.length > 500) {
      return 'Le message est trop long (500 caractères maximum).';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    // Vérification du honeypot et validation des champs
    const validationError = validateForm();
    if (validationError) {
      setStatus(validationError);
      return;
    }

    // Vérification de la limitation de taux
    if (!checkRateLimit()) {
      setStatus('Vous avez atteint la limite de 3 soumissions par jour.');
      return;
    }

    try {
      const response = await fetch('https://agenceaetheria.com/webhook/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          objectif: formData.objectif,
          outils: formData.outils,
          volumetrie: formData.volumetrie,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setStatus('Formulaire envoyé !');
        setFormData({ name: '', email: '', objectif: '', outils: '', volumetrie: '', message: '', honeypot: '' });
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
            {/* Champ honeypot caché */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

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
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Objectif principal</label>
              <select
                name="objectif"
                value={formData.objectif}
                onChange={handleChange}
                className="form-input w-full px-4 py-3 rounded-lg border"
                required
              >
                <option value="">Sélectionnez…</option>
                <option value="rdv">Augmenter les RDV qualifiés</option>
                <option value="support">Automatiser le support (WhatsApp/Email)</option>
                <option value="ops">Gagner du temps sur les opérations</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Outils actuels</label>
              <input
                type="text"
                name="outils"
                value={formData.outils}
                onChange={handleChange}
                placeholder="CRM, WhatsApp, Email, Agenda, n8n, Make…"
                className="form-input w-full px-4 py-3 rounded-lg border"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Volumétrie (approx.)</label>
              <select
                name="volumetrie"
                value={formData.volumetrie}
                onChange={handleChange}
                className="form-input w-full px-4 py-3 rounded-lg border"
                required
              >
                <option value="">Sélectionnez…</option>
                <option value="<50">Moins de 50 leads/mois</option>
                <option value="50-200">50 à 200 leads/mois</option>
                <option value=">200">Plus de 200 leads/mois</option>
              </select>
            </div>

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
              <div
                className={`mt-4 px-4 py-3 rounded-lg text-center ${
                  status.includes('Erreur') || status.includes('limite') || status.includes('Bot')
                    ? 'form-status-error'
                    : 'form-status-success'
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}