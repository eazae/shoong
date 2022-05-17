import Card from '@components/item/Card';
import { WalletCardProps } from '@components/item/Card/Card';
import HFlatList from '@components/layout/HFlatList';

const cardData: WalletCardProps[] = [
  {
    id: '세상에하나뿐인내코인지갑',
    name: '아들 등록금',
    address: '',
    balance: 30000,
    existingTokens: ['ether', 'mana'],
  },
  {
    id: '양재동카페전기도둑커피값',
    name: '생활금',
    address: '',
    balance: 70000,
    existingTokens: ['ether', 'tether'],
  },
  {
    id: '미운나이15살백승순',
    name: '딸 결혼자금',
    address: '',
    balance: 0,
    existingTokens: ['solana'],
  },
];

const WalletCards = () => {
  return <HFlatList data={cardData} margin={5} renderItem={({ item }) => <Card {...item} />} />;
};

export default WalletCards;
