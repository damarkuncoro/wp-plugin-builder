import { ComponentBlock } from '@/types';
import { getRegistry } from '@/lib/registry';
import { useBuilderStore } from '@/store/useBuilderStore';
import clsx from 'clsx';

export function CanvasItem({ component }: { component: ComponentBlock }) {
    const Registry = getRegistry();
    const Renderer = Registry[component.type];
    const { selectedComponentId, setSelectedComponentId } = useBuilderStore();

    const isSelected = selectedComponentId === component.id;

    const handleClick = () => {
        setSelectedComponentId(component.id);
    };

    if (!Renderer) {
        return (
            <div className="border p-4 rounded shadow bg-red-100 text-red-700 mb-4">
                Unknown component type: <strong>{component.type}</strong>
            </div>
        );
    }

    return (
        <div
            className={clsx(
                "p-4 rounded shadow mb-4 transition-all duration-200 ease-in-out",
                {
                    'border-2 border-blue-500 bg-blue-50': isSelected,
                    'border border-gray-200 hover:border-blue-400 cursor-pointer': !isSelected,
                }
            )}
            onClick={handleClick}
        >
            <Renderer {...component} />
        </div>
    );
}
