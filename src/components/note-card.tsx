import * as Dialog from '@radix-ui/react-dialog'

interface NoteCardProps{
    note: {
      date: Date
      content: string
    }
}

export function NoteCard({note}: NoteCardProps){
    return  (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md text-left flex-col bg-zinc-800 outline-none border-2 border-zinc-600 p-5 gap-2 overflow-hidden relative hover:ring-1 hover:ring-zinc-300  focus:visible:ring-2 focus:ring-rose-600">
                <span className="text-zinc-300 text-sm font-medium">
                    {note.date.toISOString()}
                </span>
                <p className="text-zinc-400 text-sm leading-6">
                {note.content}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/60'/>
                <Dialog.Content className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full bg-slate-700 rounded-md flex flex-col outline-none'>
                    oi
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}