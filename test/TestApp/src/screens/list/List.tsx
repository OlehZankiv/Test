import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {useWebsites} from '../../hooks/api';
import {RootStackParamList} from '../../navigation';
import {Storage} from '../../utils/storage';
import {WebpageItem} from './WebpageItem';

export const List = () => {
  const {webpages, isLoading} = useWebsites();

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <Wrapper>
      {isLoading && <LoadingText>LOADING...</LoadingText>}
      <FlatList
        style={{paddingHorizontal: 24, marginTop: 32}}
        data={webpages}
        renderItem={({item}) => <WebpageItem webpage={item} />}
        keyExtractor={item => item.url + item.name}
      />
      <ClearStorageButton
        onPress={() => {
          Storage.clear();
          navigation.navigate('Auth');
        }}>
        <ClearStorageButtonText>Clear Storage</ClearStorageButtonText>
      </ClearStorageButton>
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

const ClearStorageButton = styled.TouchableOpacity`
  padding: 12px 8px;
  background-color: white;
  position: absolute;
  bottom: 8px;
  right: 8px;
  border-radius: 8px;
`;

const ClearStorageButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: black;
`;
