interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`bg-[#F7F7F7] dark:bg-[#121212] p-4 ${className}`}>
      {children}
    </div>
  );
}
