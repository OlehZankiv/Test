import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {useWebsites} from '../../hooks/api';
import {WebpageItem} from './WebpageItem';

export const List = () => {
  const {webpages, isLoading} = useWebsites();

  return (
    <Wrapper>
      {isLoading && <LoadingText>LOADING...</LoadingText>}
      <FlatList
        style={{paddingHorizontal: 24, marginTop: 32}}
        data={webpages}
        renderItem={({item}) => <WebpageItem webpage={item} />}
        keyExtractor={item => item.url + item.name}
      />
    </Wrapper>
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: darkblue;
  justify-content: center;
`;

const LoadingText = styled.Text`
  color: white;
  text-align: center;
`;
