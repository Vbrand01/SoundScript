export function NoteCard(){
    return  (
        <button className="rounded-md text-left bg-zinc-800 outline-none border-2 border-zinc-600 p-5 space-y-2 overflow-hidden relative hover:ring-1 hover:ring-zinc-300  focus:visible:ring-2 focus:ring-rose-600">
            <span className="text-zinc-300 text-sm font-medium">
                Há 6 dias
            </span>
            <p className="text-zinc-400 text-sm leading-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic deserunt placeat recusandae vitae dignissimos quos. Minus voluptates autem ipsam aliquam libero, ullam odit nobis tempora est asperiores consequatur commodi! Quos.
                Hic deserunt placeat recusandae vitae dignissimos quos. Minus voluptates autem ipsam aliquam libero, ullam odit nobis tempora est asperiores consequatur commodi! Quos.
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </button>
    )
}