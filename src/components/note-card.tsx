import * as Dialog from "@radix-ui/react-dialog";

interface NoteCardProps {
	note: {
		content: string;
		createdAt: string;
	}
}

export const NoteCard = ({ note }: NoteCardProps) => {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button className="p-5 h-full text-left flex flex-col justify-between space-y-3 rounded-md bg-gradient-to-b outline-none from-slate-800 to-slate-950/60 from-40% to-100% hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
					<span className="text-sm font-medium text-slate-300">
						há {note.createdAt} dias
					</span>

					<p className="h-full overflow-hidden text-sm leading-6 text-ellipsis text-slate-400">
						{note.content}
					</p>
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

				<Dialog.Content className="fixed flex flex-col justify-between flex-1 w-full h-[70vh] max-w-2xl p-4 -translate-x-1/2 -translate-y-1/2 rounded-md outline-none gap-y-3 left-1/2 top-1/2 bg-slate-700">
					<span className="text-sm font-medium text-slate-300">
						há {note.createdAt} dias
					</span>

					<p className="h-full text-sm leading-6 text-slate-400">
						{note.content}
					</p>
				</Dialog.Content>

			</Dialog.Portal>
		</Dialog.Root>
	);
};
