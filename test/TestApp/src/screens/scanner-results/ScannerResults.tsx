import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Storage} from '../../utils/storage';

export const ScannerResults = () => {
  const [copyrights, setCopyrights] = useState<string[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      Storage.get<string[]>('COPYRITES', []).then(setCopyrights);
    }
  }, [isFocused]);

  return (
    <Wrapper>
      {copyrights.length ? (
        <FlatList
          style={{marginTop: 64}}
          data={copyrights}
          renderItem={({item}) => <CopyrightItem>{item}</CopyrightItem>}
          keyExtractor={(_, i) => i.toString()}
        />
      ) : (
        <NoDataText>No have any Data</NoDataText>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: darkblue;
`;

const CopyrightItem = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 700;
  text-align: center;
  padding: 12px;
`;

const NoDataText = styled.Text`
  font-weight: 900;
  font-size: 24px;
  color: white;
  text-align: center;
  padding: 124px 24px;
`;
