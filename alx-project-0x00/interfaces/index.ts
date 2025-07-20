export interface PillProps {
  title: string
}

export interface ButtonProps {
  title: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  className?: string;
}

export interface CardProps {
  styles: string;
}
