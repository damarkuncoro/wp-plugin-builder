"use client"
import { useBuilderStore } from '@/store/useBuilderStore';
import ComponentEditor from './ComponentEditor';
import { ComponentBlock } from '@/types';

export default function Editor() {
    const components = useBuilderStore(state => state.components);
    const updateComponent = useBuilderStore(state => state.updateComponent);
    const removeComponent = useBuilderStore(state => state.removeComponent);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Edit Components</h2>

            {components.map(comp => (
                <ComponentEditor
                    key={comp.id}
                    comp={comp}
                    onChange={(data: Partial<ComponentBlock>) => updateComponent(comp.id, data)}
                    onDelete={() => removeComponent(comp.id)}
                />
            ))}


        </div>
    )
}
