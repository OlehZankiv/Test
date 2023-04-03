import AsyncStorage from '@react-native-async-storage/async-storage';

export type StorageKey = 'IS_AUTH';

export interface IStorage {
  get: <T>(key: StorageKey, defaultValue: T) => Promise<T>;
  put: <T>(key: StorageKey, value: T) => Promise<void>;
}

export const Storage: IStorage = {
  get: async (key, defaultValue) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value === null ? defaultValue : JSON.parse(value);
    } catch (e) {
      console.error('Get Storage Error: ', e);
      return defaultValue;
    }
  },
  put: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Set Storage Error: ', e);
    }
  },
};
