export default function WhatsAppButton() {
  const phoneNumber = '919820012345';
  const defaultMessage = encodeURIComponent(
    'Hello Ananthaa Global Team, I would like to inquire about import/export trade opportunities.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact Ananthaa Global via WhatsApp"
    >
      <div className="whatsapp-tooltip">Chat with Export Desk</div>
      <svg viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.968.541 1.761.78 2.791.78 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.745 0-3.383-.454-4.819-1.246l-5.181 1.308 1.336-4.887c-.895-1.503-1.336-3.21-1.336-5.175 0-5.518 4.482-10 10-10 5.518 0 10 4.482 10 10z" />
      </svg>
    </a>
  );
}
