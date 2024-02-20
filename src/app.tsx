import { useState } from 'react';
import logo from './assets/logo.svg'
import { NoteAdd } from './components/note-add'
import { NoteCard } from './components/note-card'
import { ListMagnifyingGlass } from "@phosphor-icons/react";

export function App() {

    const [ search, setSearch] = useState('')

    const [notes, setNotes] = useState<Note[]>(() => {
        const notesOnStorage = localStorage.getItem('item')

        if (notesOnStorage){
            return JSON.parse(notesOnStorage)
        }

        return []
    })

    function onNoteCreated(content: string){
        const newNote = {
            id: crypto.randomUUID(),
            date: new Date(),
            content,
        }

        const notesArray = [newNote, ...notes]

        setNotes(notesArray)

        localStorage.setItem('item', JSON.stringify(notesArray))
    }

    function onNoteDelete(id: string){
        const notesArray = notes.filter(note => {
            return note.id !== id
        })

        setNotes(notesArray)
        localStorage.setItem('item', JSON.stringify(notesArray))

    }


    return (
        <div className="mx-auto max-w-6xl my-6 space-y-6 px-5">
            <div className="inline-block lg:flex justify-center lg:justify-between border-2 border-zinc-800 p-5 rounded-lg">
            <div className="bg-nav lg:mb-0 mb-3 bg-zinc-90 lg:border-2 border-zinc-800 max-w-[600px] flex rounded-xl p-5">
                <img className="mx-auto" src={logo} alt="SoundScript" />

            </div>
            <div className="bg-nav max-w-[400px] bg-zinc-950 border-2 border-zinc-800  flex rounded-xl p-5">
            <form className="w-full ml-2 flex">
                <ListMagnifyingGlass className="mr-3 mt-1" size={32} color="#919191" />
                    <input
                        type="textarea"
                        placeholder="Busque em suas notas..."
                        className="max-w-[250px] mt-1 bg-transparent text-1xl font-semibold tracking-tight placeholder:text-zinc-500 outline-none"
                        onChange={handleSearch}
                    />
                </form>
                <NoteAdd onNoteCreated={onNoteCreated} />
            </div>
            </div>

            {/* <div className="h-px bg-zinc-700" /> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6">

                {filteredNotes.map(note => {
                    return <NoteCard key={note.id} note={note} onNoteDelete={onNoteDelete} />
                })}

            </div>
        </div>
    )

}