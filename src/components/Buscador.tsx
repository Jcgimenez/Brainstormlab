import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ValidButton from './ValidButton';
import BienvenidaBuscador from './BienvinidaBuscador';

interface Idea {
    project_title: string;
    id: number;
    email: string;
    name: string;
    description: string;
    formato_idea: string;
    estado_ideas: string;
}

export default function Buscador() {
    const [email, setEmail] = useState('');
    const [ideas, setIdeas] = useState<Idea[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const isMdOrGreater = useMediaQuery({ minWidth: 768 });

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
        <div className='dark:bg-gray-900 flex flex-col max-h-screen'>
            <header className='top-0 w-full'>
                <BienvenidaBuscador />
            </header>
            <main className='mb-72'>
                <div className='className=flex-grow'>
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
                </div>
                <div>
                    <div className="flex-grow flex justify-center items-center mt-10 px-4">
                        <div className="flex-col flex justify-center items-center w-full md:w-1/2 lg:w-1/3">
                            <form onSubmit={handleSubmit} className='w-full'>
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
                    <div className='flex justify-center items-center mt-10 px-4'>
                        <div className="mt-4 px-4 border border-gray-600 rounded-md w-full md:w-3/4 lg:w-1/2">
                            {ideas.length > 0 ? (
                                <table className="min-w-full dark:bg-gray-900 text-white">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 border-b">Nombre</th>
                                            {isMdOrGreater && <th className="py-2 px-4 border-b">Descripción</th>}
                                            {isMdOrGreater && <th className="py-2 px-4 border-b">Formato</th>}
                                            <th className="py-2 px-4 border-b">Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ideas.map((idea) => (
                                            <tr key={idea?.id}>
                                                <td className="py-2 px-4">{idea?.project_title}</td>
                                                {isMdOrGreater && <td className="py-2 px-4">{idea?.description}</td>}
                                                {isMdOrGreater && <td className="py-2 px-4">{idea?.formato_idea}</td>}
                                                <td className="py-2 px-4">{idea?.estado_ideas}</td>
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
                                                {isMdOrGreater && <th className="py-2 px-4 border-b">Descripción</th>}
                                                {isMdOrGreater && <th className="py-2 px-4 border-b">Formato</th>}
                                                <th className="py-2 px-4 border-b">Estado</th>
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
                </div>
            </main >
        </div >
    );
}
