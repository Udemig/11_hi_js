// Component'ın aldığı prop'larının tipini tanımlama
type Props = {
  text: string;
  handler?: () => void;
};

// Prop tipini uygula
const Button = ({ text, handler }: Props) => {
  return <button onClick={handler}>{text}</button>;
};

export default Button;
