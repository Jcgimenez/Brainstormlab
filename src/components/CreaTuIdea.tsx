import React, { useState } from 'react';
import WebButton from './WebButton';
import DelButton from './DelButton';
import ValidButton from './ValidButton';

interface CreaTuIdeaProps {
    onClose: () => void;
}

const CreaTuIdea: React.FC<CreaTuIdeaProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        idea: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white h-full w-full">
            <div className="bg-gray-800 p-8 rounded-lg w-[60%]">
                <div className='flex justify-center'>
                    <h2 className="text-2xl font-semibold mb-4">Describe tu idea</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-8 flex gap-12">
                        <div className='w-full'>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-500">Nombre y Apellido</label>
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
                        <div className='w-full'>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-500">Email</label>
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
                    </div>
                    <div className="mb-8 flex gap-12">
                        <div className='w-full'>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-500">Titulo de la idea</label>
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
                        <div className='w-full'>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-500">Fecha de creacion</label>
                            <input
                                readOnly={true}
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md bg-slate-200 text-gray-950 cursor-not-allowed"
                                placeholder='Consumo Automatico'
                            />
                        </div>
                    </div>
                    <div className="mb-8">
                        <label htmlFor="idea" className="block text-sm font-medium text-gray-500">Descripcion de tu idea</label>
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
                    <div className="flex justify-end gap-5">
                        <DelButton onClick={onClose} />
                        <ValidButton />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreaTuIdea;
