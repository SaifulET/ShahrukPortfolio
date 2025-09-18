import { Facebook, InstagramIcon, MessageCircle, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#1f5a53] to-[#06241f] text-white"
    >
      {/* Container with same padding as Hero */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-lime-400 mb-6">Contact</h2>

        <a href="tel:0508179771">
          <p className="mb-2 cursor-pointer">📞 Mobile: 0508179771</p>
        </a>

        <a href="mailto:zahidulislamsharukh@gmail.com">
          <p className="mb-2">📧 Email: zahidulislamsharukh@gmail.com</p>
        </a>

        <p className="mb-2">
          📍 Location: Amir Bin Mukhald Ali Najari St., Near Omrah Office, Suk Sabi, Al-Rimal, Riyadh.
        </p>

        {/* Social Links */}
        <div className="flex justify-center flex-wrap gap-6 mt-6">
          <a
            href="https://wa.me/0508179771"
            className="flex items-center gap-2 text-green-400 font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>

          <a
            href="https://instagram.com"
            className="flex items-center gap-2 text-pink-400 font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="w-4 h-4" /> Instagram
          </a>

          <a
            href="https://www.facebook.com/share/1Ef5eAasff/"
            className="flex items-center gap-2 text-blue-400 font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-4 h-4" /> Facebook
          </a>

          <a
            href="https://x.com/Sharukh18217621"
            className="flex items-center gap-2 text-blue-400 font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-4 h-4" /> Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
