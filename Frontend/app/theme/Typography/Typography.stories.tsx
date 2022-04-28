import { storiesOf } from '@storybook/react-native';
import Color from '@theme/Color';
import Palette from '@theme/Palette';
import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Size from './Size';
import Typography from './Typography';
import Weight from './Weight';

const colors = Object.keys(Color.textColor);
const weights = Object.keys(Weight);
const sizes = Object.keys(Size);
const variants = ['strong', 'normal'];

storiesOf('Typography', module)
  .addDecorator((getStory) => <StoryLayOut>{getStory()}</StoryLayOut>)
  .add('All', () => (
    <FlatList
      data={sizes}
      renderItem={({ item: size }) => (
        <FlatList
          data={colors}
          renderItem={({ item: color }) => (
            <FlatList
              data={weights}
              renderItem={({ item: weight }) => (
                <FlatList
                  data={variants}
                  keyExtractor={(item) => item + weight + color + size}
                  renderItem={({ item: variant }) =>
                    color === 'light' ? (
                      <DarkBg>
                        <Typography size={size} weight={weight} color={color} variant={variant}>
                          {size} {weight} {color} {variant}
                        </Typography>
                      </DarkBg>
                    ) : (
                      <Typography size={size} weight={weight} color={color} variant={variant}>
                        {size} {weight} {color} {variant}
                      </Typography>
                    )
                  }
                />
              )}
            />
          )}
        />
      )}
    />
  ));
//   .add('Sizes', () => <TypoList />);
//   .add('Colors', () => <TypoList />);

const StoryLayOut = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const DarkBg = styled.View`
  width: 100%;
  background-color: ${Palette.mono500};
`;
