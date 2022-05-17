import { IAvatar } from './Avatar.props';
import { ImageArea, LayOut, Loader, Noti } from './Avatar.styled';

const Avatar: React.FC<IAvatar> = ({
  hasAlarm = false,
  size = 'small',
  uri = 'https://blog.kakaocdn.net/dn/YmhBn/btrheysMts6/GhjC6XXXhWC30n7Fmcqok1/img.jpg',
  isLoading,
}) => {
  const onHasAlarm = size === 'small' && hasAlarm;
  return (
    <LayOut>
      {isLoading ? <Loader size={size} /> : <ImageArea size={size} source={{ uri }} />}
      {onHasAlarm && <Noti />}
    </LayOut>
  );
};

export default Avatar;
