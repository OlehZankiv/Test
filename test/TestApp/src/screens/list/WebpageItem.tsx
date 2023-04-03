import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import {WebsiteItem as WebsiteItemType} from '../../api/';
import {RootTabsParamList} from '../../navigation/BottomTabsNavigation';

type WebpageItemProps = {
  webpage: WebsiteItemType;
};

const WebpageItemComponent = ({webpage}: WebpageItemProps) => {
  const navigation =
    useNavigation<BottomTabNavigationProp<RootTabsParamList, 'List'>>();

  return (
    <Wrapper onPress={() => navigation.navigate('WebView')}>
      <NameText>{webpage.name}</NameText>
      <LinkText>{webpage.url}</LinkText>
    </Wrapper>
  );
};

const Wrapper = styled.TouchableOpacity`
  padding: 18px 24px;
  background-color: #494949;
  margin-bottom: 8px;
  border-radius: 8px;
`;

const NameText = styled.Text`
  color: white;
  font-size: 16px;
`;
const LinkText = styled.Text`
  color: #dadada;
  font-size: 12px;
  margin-top: 4px;
`;

export const WebpageItem = React.memo(WebpageItemComponent);
