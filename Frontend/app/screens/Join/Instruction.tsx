import Typography from '@theme/Typography';
import { InstructionLayOut } from './Join.styled';

interface Instruction {
  messages: string[];
}

const Instruction: React.FC<Instruction> = ({ messages }) => {
  return (
    <InstructionLayOut>
      {messages.map((msg) => (
        <Typography key={msg} size="h1" weight="regular">
          {msg}
        </Typography>
      ))}
    </InstructionLayOut>
  );
};
export default Instruction;
