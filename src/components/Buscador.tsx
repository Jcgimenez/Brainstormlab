import { useState } from 'react';
import BienvenidaBuscador from './BienvinidaBuscador';
import ValidButton from './ValidButton';

interface Idea {
    project_title: string;
    id: number;
    email: string;
    name: string;
    description: string;
    formato_idea: number;
}

export default function Buscador() {
    const [email, setEmail] = useState('');
    const [ideas, setIdeas] = useState<Idea[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setError('Por favor, introduce un email válido');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch(`/api/getIdea?email=${email}`);
            const data = await response.json();

            if (data.success) {
                setIdeas(data.ideas);
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError('Error al buscar las ideas');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='dark:bg-gray-900 flex flex-col'>
            <header className='top-0'>
                <BienvenidaBuscador />
            </header>
            <main>
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
                    <div className="absolute w-12 h-12 bg-blue-300 rounded-full opacity-50 animate-bubble top-[5%] left-1/4"></div>
                    <div className="absolute w-8 h-8 bg-blue-300 rounded-full opacity-50 animate-bubble top-[84%] left-1/2"></div>
                    <div className="absolute w-8 h-8 bg-blue-300 rounded-full opacity-50 animate-bubble top-[39%] left-[95%]"></div>
                    <div className="absolute w-16 h-16 bg-blue-300 rounded-full opacity-50 animate-bubble top-[54%] left-3/4"></div>
                    <div className="absolute w-12 h-12 bg-blue-300 rounded-full opacity-50 animate-bubble top-[95%] left-1/4"></div>
                    <div className="absolute w-8 h-8 bg-blue-300 rounded-full opacity-50 animate-bubble top-[15%] left-3/4"></div>
                    <div className="absolute w-8 h-8 bg-blue-300 rounded-full opacity-50 animate-bubble top-[45%] left-[12%]"></div>
                    <div className="absolute w-16 h-16 bg-blue-300 rounded-full opacity-50 animate-bubble top-[15%] left-2/4"></div>
                    <div className="absolute w-12 h-12 bg-blue-300 rounded-full opacity-50 animate-bubble top-[86%] left-[84%]"></div>
                </div>
                <div className="flex-grow flex justify-center items-center mt-10">
                    <div className="flex-col flex justify-center items-center">
                        <form onSubmit={handleSubmit} className=''>
                            <label htmlFor="buscador_input" className="block text-sm font-medium text-gray-500">
                                Buscar por email
                            </label>
                            <div className='flex gap-2 justify-center items-center'>
                                <input
                                    type="email"
                                    name="buscador_input"
                                    value={email}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 w-full border rounded-md bg-slate-200 text-gray-950"
                                    required
                                />
                                <div>
                                    <ValidButton />
                                </div>
                            </div>
                        </form>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <div className="mt-4 px-4 border border-gray-600 rounded-md w-[50%]">
                        {ideas.length > 0 ? (
                            <table className="min-w-full dark:bg-gray-900 text-white">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">Nombre</th>
                                        <th className="py-2 px-4 border-b">Descripcion</th>
                                        <th className="py-2 px-4 border-b">Formato</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ideas.map((idea) => (
                                        <tr key={idea?.id}>
                                            <th className="py-2 px-4 ">{idea?.project_title}</th>
                                            <th className="py-2 px-4">{idea?.description}</th>
                                            <th className="py-2 px-4">{idea?.formato_idea}</th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div>
                                <table className="min-w-full dark:bg-gray-900 text-white">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 border-b">Nombre</th>
                                            <th className="py-2 px-4 border-b">Descripcion</th>
                                            <th className="py-2 px-4 border-b">Formato</th>
                                        </tr>
                                    </thead>
                                </table>

                                <div className='flex justify-center items-center p-10'>
                                    <div className='flex justify-center items-center'>
                                        <p className="italic text-white text-center">Busca tus ideas...</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <footer className="bg-black flex justify-between p-4 md:p-0 min-h-32 mt-80">
                <div className="text-white ml-5 mt-2">
                    <p className="italic">
                        © 2023 Brainstorm Lab. Todos los derechos reservados.
                    </p>
                </div>
                <div className="flex text-white mr-5 mt-2 space-x-6">
                    <a href="https://github.com/Jcgimenez" className="flex gap-2 italic underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github mt-1" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/juancruzgimenez/" className="flex gap-2 italic underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin mt-1" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                        Linkedin
                    </a>
                </div>
            </footer>
        </div>
    );
}
