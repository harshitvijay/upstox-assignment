import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IStockSummaryInfo} from '../../utils/constant';
import Icon from 'react-native-vector-icons/AntDesign';

interface IBottomsheetProps {
  stockSummaryInfo: IStockSummaryInfo;
}

const Bottomsheet = ({stockSummaryInfo}: IBottomsheetProps) => {
  const [isDetailsShow, setIsDetailsshow] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsDetailsshow(!isDetailsShow)}>
        <Icon
          name={isDetailsShow ? 'caretdown' : 'caretup'}
          size={15}
          color="#800080"
          style={styles.uparrow}
        />
      </TouchableOpacity>
      {isDetailsShow && (
        <>
          <View style={styles.symbolContainer}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Current Value
            </Text>
            <View style={styles.symbolContainer}>
              <Text style={styles.text}>
                ₹&nbsp;{stockSummaryInfo.totalCurrentValue.toFixed(2)}
              </Text>
            </View>
          </View>

          <View style={styles.symbolContainer}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Total Investment
            </Text>
            <View style={styles.symbolContainer}>
              <Text style={styles.text}>
                ₹&nbsp;{stockSummaryInfo.totalInvestment.toFixed(2)}
              </Text>
            </View>
          </View>

          <View style={styles.symbolContainer}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Today's Profit & Loss
            </Text>
            <View style={styles.symbolContainer}>
              <Text style={styles.text}>
                ₹&nbsp;{stockSummaryInfo.todaysPL.toFixed(2)}
              </Text>
            </View>
          </View>
        </>
      )}
      <View
        style={[styles.symbolContainer, {marginTop: isDetailsShow ? 25 : 0}]}>
        <Text style={[styles.text, {fontWeight: 'bold', color: '#800080'}]}>
          Profit & Loss
        </Text>
        <View style={styles.symbolContainer}>
          <Text style={[styles.text, {color: '#800080'}]}>
            ₹&nbsp;{stockSummaryInfo.totalPL.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  uparrow: {
    alignSelf: 'center',
  },
  symbolContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    color: '#000000',
    fontSize: 14,
  },
});

export default Bottomsheet;
