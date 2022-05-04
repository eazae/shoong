import MnemonicBadge from '@components/item/MnemonicBadge';
import Typography from '@theme/Typography';
import { LayOut, Column, Index, List } from './MnemonicCard.styled';

const MnemonicCard: React.FC<IMnemonic> = ({ mnemonicWords }) => {
  return (
    <LayOut>
      {[0, 1].map((idx) => (
        <Column key={'col' + idx}>
          <Index>
            {[1, 2, 3, 4, 5, 6].map((index) => {
              const key = idx * 6 + index + '';
              return (
                <Typography key={key} weight="bold" color="light">
                  {key.padStart(2, '0')}
                </Typography>
              );
            })}
          </Index>
          <List>
            {[1, 2, 3, 4, 5, 6].map((index) => {
              const key = idx * 6 + index - 1;
              return (
                <MnemonicBadge key={'mnemonic' + key}>
                  {mnemonicWords[idx * 6 + index - 1]}
                </MnemonicBadge>
              );
            })}
          </List>
        </Column>
      ))}
    </LayOut>
  );
};

export default MnemonicCard;
