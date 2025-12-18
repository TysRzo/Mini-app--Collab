const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-10 border-t border-gray-700 text-center text-sm text-gray-400">
      <p>
        © {year} 3WAB2 — Licence GPL. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
