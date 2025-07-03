
import { ComponentBlock } from '@/types';

type ComponentEditorProps = {
    comp: ComponentBlock;
    onChange: (updated: { text?: string; color?: string }) => void;
    onDelete: () => void;
};

export default function ComponentEditor({ comp, onChange, onDelete }: ComponentEditorProps) {
    return (
        <div>
            <input
                value={comp.text ?? ''}
                onChange={(e) => onChange({ text: e.target.value ? e.target.value : undefined })}
            />


            <input
                type="color"
                value={comp.color ?? '#ffffff'}
                onChange={(e) => onChange({ color: e.target.value ? e.target.value : undefined })}
            />
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}
