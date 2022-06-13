

export type StyledTextProps = {
    mode?: 'normal' | 'gradient';
    weight?: 'regular' | 'medium' | 'bold';
    size?: 'large';
    tag?: 'heading' | 'paragraph' | 'label';
    children: string;
};
