import * as Dialog from '@radix-ui/react-dialog'
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'sonner';

import { PlusSquare, Microphone, TextAa } from "@phosphor-icons/react";
import { X } from 'lucide-react';


interface NoteAdd {
    onNoteCreated: (content: string) => void
}

let speechRecognition: SpeechRecognition | null = null

export function NoteAdd({ onNoteCreated }: NoteAdd) {

    const [isRecording, setIsRecording] = useState(false)
    const [shoulShowOnboarding, setShoulShowOnboarding] = useState(true)
    const [content, setContent] = useState('')

    function handleStartEditor() {
        setShoulShowOnboarding(false)
    }

    function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)

        if (event.target.value == '') {
            setShoulShowOnboarding(true)
        }
    }

    function handleSaveNote(event: FormEvent) {
        event.preventDefault()

        if (content == ''){
            return
        }

        onNoteCreated(content)

        setContent('')
        setShoulShowOnboarding(true)

        toast.success('Nota criada com sucesso!')
    }

    function handleStartRecording() {

        const isSpeechRecognitionAPIAvailable = 'SpeechRecognition' in window
        || 'webkitSpeechRecognition' in window

        if (!isSpeechRecognitionAPIAvailable){
            alert('Infelizmente seu navegador não suporta a API de gravação!')
            return
        }

        setIsRecording(true)
        setShoulShowOnboarding(false)

        const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition

        speechRecognition = new SpeechRecognitionAPI()

        speechRecognition.lang = 'pt-BR'
        speechRecognition.continuous = true
        speechRecognition.maxAlternatives = 1
        speechRecognition.interimResults = true

        speechRecognition.onresult = (event) => {
            const transcription = Array.from(event.results).reduce((text, result) => {
                return text.concat(result[0].transcript)
            }, '')

            setContent(transcription)
        }

        speechRecognition.onerror = (event) =>{
            console.error(event)
        }

        speechRecognition.start()
    }

    function handleStopRecording() {
        setIsRecording(false)

        if(speechRecognition !== null){
            speechRecognition.stop()
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <div className="rounded-lg bg-orangecolor p-1 ml-5 cursor-pointer">
                    <PlusSquare size={32} color="#fff5f5" />
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/60' />
                <Dialog.Content className='fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-zinc-800 md:rounded-md flex flex-col outline-none'>
                    <Dialog.DialogClose className="absolute right-0 top-0 bg-zinc-900 p-1.5 text-zinc-400 hover:text-zinc-100">
                        <X className='size-5' />
                    </Dialog.DialogClose>

                    <form className="flex-1 flex flex-col">

                        <div className="flex flex-1 flex-col gap-3 p-5">
                            <span className="text-zinc-300 text-sm font-medium">
                                Adicionar nota
                            </span>
                            {shoulShowOnboarding ? (
                                <div>
                                    <p className="text-zinc-400 text-sm leading-6">
                                        Comece gravando uma nota em áudio ou se preferir utilize apenas texto.
                                    </p>
                                    <div className="flex">
                                        <button
                                            type="button"
                                            className="w-[100px] font-medium flex  justify-center bg-zinc-900 p-3 mt-4 rounded-md hover:text-orangecolor"
                                            onClick={handleStartRecording}
                                        >
                                            <Microphone className="mr-2" size={20} color="#de7616" />
                                            Áudio
                                        </button>
                                        <button
                                            type="button"
                                            className="w-[100px] font-medium flex justify-center bg-zinc-900 p-3 mt-4 rounded-md hover:text-orangecolor ml-2"
                                            onClick={handleStartEditor}
                                        >
                                            <TextAa className="mr-2" size={20} color="#de7616" />
                                            Texto
                                        </button>
                                    </div>
                                </div>

                            ) : (
                                <textarea
                                    autoFocus
                                    className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                                    onChange={handleContentChanged}
                                    value={content}
                                />
                            )}
                        </div>

                        {isRecording ? (
                            <button
                                type="button"
                                onClick={handleStopRecording}
                                className='w-full bg-zinc-900 py-4 text-center flex items-center justify-center gap-2 text-sm text-zinc-300 outline-none font-medium group hover:text-zinc-100'
                                >
                                    <div className="size-3 rounded-full bg-red-500 animate-pulse"></div>
                                Gravando! (clique p/ interromper)
                            </button>
                        )
                            : (
                                <button
                                type="button"
                                onClick={handleSaveNote}
                                className='w-full bg-green-400 py-4 text-center text-sm text-zinc-950 outline-none font-medium group hover:bg-green-500'
                                >
                                    Salvar nota
                                </button>
                            )
                        }

                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>)
}