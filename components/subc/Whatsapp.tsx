// components/WhatsappButton.tsx
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5511999999999" // substitua pelo seu número
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
