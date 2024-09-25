import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  AddIncome: undefined;
  AddExpense: undefined;
  AddAccount: undefined;
  AddCategory: undefined;
  AddAccountType: undefined;
  AddSubCategory: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;
