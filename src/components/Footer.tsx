const Footer = () => {
	return (
	  <footer className="flex flex-col desktop:flex-row items-center justify-between py-3 desktop:py-0 px-10 desktop:px-20 lg:px-40 xl:px-60 min-h-[50px] w-full bg-blue-950 text-white">
		<div className="text-center flex flex-wrap justify-center gap-x-1">
		  <span>
			V{process.env.REACT_APP_VERSION ?? "0.0.0"} Copyright © 2024 Gustvex.
		  </span>
		  <span>Todos os direitos reservados.</span>
		</div>
		<div className="text-center">
		  <a href="/terms" className="text-white hover:underline">Termos de Uso</a> ·{" "}
		  <a href="/politics" className="text-white hover:underline">Política de Privacidade</a>
		</div>
	  </footer>
	);
  };
  
  export default Footer;
  