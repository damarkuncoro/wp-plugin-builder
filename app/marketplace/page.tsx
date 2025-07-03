"use client";

import { useEffect, useState } from 'react';

import { ComponentSchema } from '@/types';
import { useBuilderStore } from '@/store/useBuilderStore';


export default function MarketplacePage() {
    const [components, setComponents] = useState<ComponentSchema[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/components');
            if (!res.ok) {
                console.error('Failed to fetch components:', res.status);
                setLoading(false);
                return;
            }

            if (!res.ok) {
                const text = await res.text();
                console.error('API Error Response:', res.status, text);
                throw new Error(`API error: ${res.status}`);
            }
            const data = await res.json();
            setComponents(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const selected = localStorage.getItem('selectedComponent');
        if (selected) {
            const comp = JSON.parse(selected);
            setComponents((prev) => [...prev, comp]);
            localStorage.removeItem('selectedComponent');
        }
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Component Marketplace</h1>

            {loading && <p>Loading components...</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {components.map((comp) => (
                    <div key={comp.id} className="border p-4 rounded shadow hover:shadow-lg transition">
                        <h2 className="text-lg font-bold">{comp.name}</h2>
                        <p className="text-sm text-gray-600">{comp.type}</p>

                        {comp.thumbnail && (
                            <img src={comp.thumbnail} alt={comp.name} className="w-full h-40 object-cover mt-2 rounded" />
                        )}

                        <pre className="bg-gray-100 p-2 text-xs mt-2 overflow-auto">
                            {JSON.stringify(comp.fields, null, 2)}
                        </pre>

                        <button
                            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
                            onClick={() => {
                                // Map ComponentSchema to ComponentBlock
                                const { id, type, fields } = comp;
                                let newComponent: any = { id, type };

                                if (fields) {
                                    newComponent.fields = fields.map((field: any) => ({
                                        key: field.key,
                                        type: field.type,
                                        value: field.value || '',
                                    }));
                                }

                                useBuilderStore.getState().addComponent(newComponent.type);
                                // Optionally, update the last added component with the mapped fields if needed

                                window.location.href = '/builder';
                            }}
                        >
                            Add to Builder
                        </button>

                        <p className="text-sm text-gray-500 mt-2">{comp.description}</p>
                        <p className="text-sm text-gray-500 mt-2">Created by: {comp.userId}</p>
                        <p className="text-sm text-gray-500 mt-2">Created at: {new Date(comp.createdAt).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-500 mt-2">Updated at: {new Date(comp.updatedAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
