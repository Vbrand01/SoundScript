import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'

interface NoteCardProps{
    note: {
      id: string
      date: Date
      content: string
    }

    onNoteDelete: (id: string) => void
}

export function NoteCard({note, onNoteDelete}: NoteCardProps){
    return  (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md text-left flex-col bg-zinc-900 outline-none border-2 border-zinc-900 p-5 gap-2 overflow-hidden relative hover:ring-1 hover:ring-orange-400  focus:visible:ring-2 focus:ring-orange-600">
                <span className="text-zinc-300 text-sm font-medium">
                   {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                </span>
                <p className="text-zinc-400 text-sm leading-6">
                {note.content}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/60'/>
                <Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-zinc-800 rounded-md flex flex-col outline-none'>
                    <Dialog.DialogClose className="absolute right-0 top-0 bg-zinc-900 p-1.5 text-zinc-400 hover:text-zinc-100 outline-none">
                        <X className='size-5' />
                    </Dialog.DialogClose>

                    <div className="flex flex-1 flex-col gap-3 p-5">
                    <span className="text-zinc-300 text-sm font-medium">
                        {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                    </span>
                    <p className="text-zinc-400 text-sm leading-6 bg-zinc-900 p-3 rounded-md">
                        {note.content}
                    </p>
                    </div>

                    <button type='button' onClick={() => onNoteDelete(note.id)} className='w-full bg-rose-700 py-4 text-center text-sm text-zinc-300 outline-none font-medium group'>
                        Deseja <span className="group-hover:underline">apagar essa nota</span>?
                    </button>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}