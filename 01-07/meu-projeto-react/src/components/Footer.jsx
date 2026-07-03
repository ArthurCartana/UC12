import React from 'react'

function Footer({ ano, links }) {
    return (
      <footer id="contato" className="bg-cafe-900 text-creme-claro py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display text-xl">Grão</span>
  
          <nav className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm text-creme-claro/70 hover:text-creme-claro transition"
              >
                {link.texto}
              </a>
            ))}
          </nav>
  
          <p className="text-xs text-creme-claro/50">
            © {ano} Grão Café Especial. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;