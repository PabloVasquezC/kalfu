import { ButtonHTMLAttributes, FC } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button: FC<ButtonProps> = ({
    className,
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'bg-[var(--kalfu-blue)] text-white hover:bg-opacity-90 focus:ring-[var(--kalfu-blue)]',
        secondary: 'bg-[var(--kalfu-calypso)] text-white hover:bg-opacity-90 focus:ring-[var(--kalfu-calypso)]',
        outline: 'border-2 border-[var(--kalfu-blue)] text-[var(--kalfu-blue)] hover:bg-[var(--kalfu-blue)] hover:text-white',
        ghost: 'text-[var(--kalfu-blue)] hover:bg-[var(--kalfu-blue)] hover:bg-opacity-10',
    };

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        />
    );
};
