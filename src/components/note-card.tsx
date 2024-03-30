export const NoteCard = () => {
	return (
		<button className="p-5 h-full text-left flex flex-col justify-between space-y-3 rounded-md bg-gradient-to-b outline-none from-slate-800 to-slate-950/60 from-40% to-100% hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
			<span className="text-sm font-medium text-slate-300">
        há 2 dias
			</span>

			<p className="h-full overflow-hidden text-sm leading-6 text-ellipsis text-slate-400">
        No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade. <br /> Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio.
			</p>
		</button>
	);
};
