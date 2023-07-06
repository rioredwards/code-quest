import "./Example.css";

interface ExampleProps {
  children: React.ReactNode;
}

export const Example: React.FC<ExampleProps> = ({ children }) => {
  return <div className="example-container">{children}</div>;
};
