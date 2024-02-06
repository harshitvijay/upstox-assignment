import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IStockSummaryInfo} from '../../utils/constant';

interface IBottomsheetProps {
  stockSummaryInfo: IStockSummaryInfo;
}

const Bottomsheet = ({stockSummaryInfo}: IBottomsheetProps) => {
  const [isDetailsShow, setIsDetailsshow] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsDetailsshow(!isDetailsShow)}>
        {isDetailsShow ? (
          <Text style={styles.uparrow}>&#8964;</Text>
        ) : (
          <Text style={styles.uparrow}>&#8963;</Text>
        )}
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
        <Text style={[styles.text, {fontWeight: 'bold'}]}>Profit & Loss</Text>
        <View style={styles.symbolContainer}>
          <Text style={styles.text}>
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
    color: '#800080',
    fontSize: 20,
    alignSelf: 'center',
  },
  symbolContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000000',
    fontSize: 18,
  },
});

export default Bottomsheet;
