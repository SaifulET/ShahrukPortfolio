const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 text-center bg-gradient-to-b from-[#1f5a53] to-[#06241f] text-white"
    >
      <h2 className="text-3xl font-bold text-lime-400 mb-6">Contact</h2>
      <a href="tel:0508179771">
  <p className="mb-2 cursor-pointer">
    📞 Mobile: 0508179771
  </p>
</a>
      <a
    href="mailto:zahidulislamsharukh@gmail.com"
   
  >
    <p className="mb-2">📧 Email: zahidulislamsharukh@gmail.com</p>
  </a>
      <p className="mb-2">
        📍 Location: Amir Bin Mukhald Ali Najari St., Near Omrah Office, Suk Sabi, Al-Rimal, Riyadh.
        
      </p>
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://wa.me/0508179771"
          className="text-green-400 font-bold hover:underline"
          target="_blank"
        >
          WhatsApp
        </a>
        <a
          href="https://instagram.com"
          className="text-pink-400 font-bold hover:underline"
          target="_blank"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/share/1Ef5eAasff/"
          className="text-blue-400 font-bold hover:underline"
          target="_blank"
        >
          Facebook
        </a>
        <a
          href="https://x.com/Sharukh18217621?fbclid=IwY2xjawM4FJhleHRuA2FlbQIxMABicmlkETFSZll1bU5jNFdheG12Y1pEAR4g6ayvqYEA6snMa2eP-o-eV4TON58-E0FhXBx9XlWTg6mnASLMpAI0qhB61A_aem_6vW1tGWj0hp8W3ieKq_42w"
          className="text-blue-400 font-bold hover:underline"
          target="_blank"
        >
          Twitter
        </a>
      </div>
    </section>
  );
};

export default Contact;
