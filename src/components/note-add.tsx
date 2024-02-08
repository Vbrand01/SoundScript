export function NoteAdd(){
    return(
        <div className="rounded-md bg-zinc-700 p-5 space-y-2">
            <span className="text-zinc-50 text-sm font-medium">
                Adicionar nota
            </span>
            <p className="text-zinc-400 text-sm leading-6 overflow-hidden">
                Grave uma nota em áudio que será convertida para texto automaticamente.
            </p>
        </div>
    )
}