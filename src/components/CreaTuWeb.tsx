import React, { useEffect, useState } from 'react';
import WebButton from './WebButton';
import DelButton from './DelButton';
import ValidButton from './ValidButton';
import { ToastContainer, toast } from 'react-toastify';

interface CreaTuIdeaProps {
    onClose: () => void;
}

const CreaTuIdea: React.FC<CreaTuIdeaProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectTitle: '',
        idea: '',
        date: new Date().toLocaleDateString(),
        formato_idea: '1',
        estado_ideas: '1',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/saveIdea', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Idea guardada exitosamente');
                setFormData({
                    name: '',
                    email: '',
                    projectTitle: '',
                    idea: '',
                    date: new Date().toLocaleDateString(),
                    formato_idea: '1',
                    estado_ideas: '1',
                });
            } else {
                toast.error('Error al guardar la idea');
            }
        } catch (error) {
            toast.error('Error al guardar la idea');
        }
    };

    useEffect(() => {
        setFormData((prevState) => ({
            ...prevState,
            date: new Date().toLocaleDateString(),
        }));
    }, [formData.name, formData.email, formData.idea]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white h-full w-full">
            <div className="bg-gray-800 p-4 sm:p-8 rounded-lg w-full sm:w-3/4 lg:w-1/2 xl:w-1/3">
                <div className="flex justify-center">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">Describe tu Web y enviamela</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 sm:mb-8 flex flex-col sm:flex-row gap-4 sm:gap-12">
                        <div className="w-full">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-500">
                                Nombre y Apellido
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md bg-slate-200 text-gray-950"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md bg-slate-200 text-gray-950"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4 sm:mb-8 flex flex-col sm:flex-row gap-4 sm:gap-12">
                        <div className="w-full">
                            <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-500">
                                Título de tu proyecto
                            </label>
                            <input
                                type="text"
                                id="projectTitle"
                                name="projectTitle"
                                value={formData.projectTitle}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md bg-slate-200 text-gray-950"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="date" className="block text-sm font-medium text-gray-500">
                                Fecha de creación
                            </label>
                            <input
                                readOnly={true}
                                type="text"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md bg-slate-200 text-gray-950 cursor-not-allowed"
                                placeholder="Consumo Automático"
                            />
                        </div>
                    </div>
                    <div className="mb-4 sm:mb-8">
                        <label htmlFor="idea" className="block text-sm font-medium text-gray-500">
                            Describe la idea
                        </label>
                        <textarea
                            id="idea"
                            name="idea"
                            value={formData.idea}
                            onChange={handleChange}
                            rows={4}
                            className="mt-1 p-2 w-full border rounded-md bg-slate-200 text-gray-950"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end gap-2 sm:gap-5">
                        <DelButton onClick={onClose} />
                        <ValidButton />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CreaTuIdea;
