interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}


export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`w-full p-4 bg-background bg-cover bg-center overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
