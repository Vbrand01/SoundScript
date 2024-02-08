import logo from './assets/logo.svg'

export function App() {
 return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
        <img src={logo} alt="SoundScript" />
        <form className="w-full">
        <input 
        type="text" 
        placeholder="Busque em suas notas..." 
        className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-zinc-500 outline-none"
        />
        </form>
        
        <div className="h-px bg-zinc-700" />

        <div className="grid grid-cols-3 auto-rows-[250px] space-x-6">
            <div className="rounded-md bg-zinc-700 p-5 space-y-2">
                <span className="text-zinc-50 text-sm font-medium">
                    Adicionar nota
                </span>
                <p className="text-zinc-400 text-sm leading-6">
                    Grave uma nota em áudio que será convertida para texto automaticamente.
                </p>
            </div>
            <div className="rounded-md bg-zinc-800 p-5 space-y-2">
                <span className="text-zinc-50 text-sm font-medium">
                    Adicionar nota
                </span>
                <p className="text-zinc-400 text-sm leading-6">
                    Grave uma nota em áudio que será convertida para texto automaticamente.
                </p>
            </div>
            <div className="rounded-md bg-zinc-800 p-5 space-y-2">
                <span className="text-zinc-50 text-sm font-medium">
                    Adicionar nota
                </span>
                <p className="text-zinc-400 text-sm leading-6">
                    Grave uma nota em áudio que será convertida para texto automaticamente.
                </p>
            </div>
        </div>
    </div>
 )
 
}