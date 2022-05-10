import Avatar from '@components/common/Avatar';
import { ILoginHeader } from './LoginHeader.props';
import {
  AvatarLayOut,
  LayOut,
  Slogan,
  SloganMessage,
  Title,
  TitleMessage,
} from './LoginHeader.styled';

const LoginHeader = ({ logoUri = '', slogans }: ILoginHeader) => {
  return (
    <LayOut>
      <AvatarLayOut>
        <Avatar isLoading={logoUri ? false : true} size="large" uri={logoUri} />
      </AvatarLayOut>
      <Title>
        <TitleMessage color="primary" weight="bold" size="h1">
          SHOONG
        </TitleMessage>
      </Title>
      {slogans.map((slogan) => (
        <Slogan>
          <SloganMessage weight="regular" size="body1">
            {slogan}
          </SloganMessage>
        </Slogan>
      ))}
    </LayOut>
  );
};

export default LoginHeader;
