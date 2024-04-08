import logo from "./assets/logo-nlw.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
	return (
		<div className="max-w-6xl mx-auto my-12 space-y-6">
			<img src={logo} alt="Logo" />

			<form>
				<input 
					type="text"
					placeholder="Busque em suas anotações..."
					className="w-full py-2 text-3xl font-semibold tracking-tight transition-all bg-transparent rounded-lg outline-none focus:bg-slate-600/5 focus:backdrop-blur-sm placeholder:text-slate-500 focus:placeholder:text-slate-400"
				/>
			</form>

			<div className="h-px bg-slate-700" />

			<div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
				<NewNoteCard />

				{Array.from({ length: 4 }).map((_, index) => (
					<NoteCard 
						key={index} 
						note={{
							createdAt: "2",
							content: "No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade. <br /> Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio."
						}} 
					/>
				))}
			</div>
		</div>
	);
}