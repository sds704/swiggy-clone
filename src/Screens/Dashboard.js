import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Items from '../tabs/Items';
import Add from '../tabs/Add';
import Orders from '../tabs/Orders';


const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectedTab == 0 ? <Items /> : selectedTab == 1 ? <Add /> : <Orders />}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(0)}>
          <Image
            style={[
              styles.bottomTabImg,
              {tintColor: selectedTab == 0 ? 'red' : 'black'},
            ]}
            source={require('../images/items.png')}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(1)}>
          <Image
            style={[
              styles.bottomTabImg,
              {tintColor: selectedTab == 1 ? 'red' : 'black'},
            ]}
            source={require('../images/transaction.png')}
          />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={(onPress = () => setSelectedTab(1))}>
          <Image
            style={[
              styles.bottomTabImg,
              {
                width: 35,
                height: 35,
                tintColor: selectedTab == 1 ? 'red' : 'black',
              },
            ]}
            source={require('../images/add.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={(onPress = () => setSelectedTab(2))}>
          <Image
            style={[
              styles.bottomTabImg,
              {tintColor: selectedTab == 2 ? 'red' : 'black'},
            ]}
            source={require('../images/orders.png')}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.bottomTab}
          onPress={(onPress = () => setSelectedTab(4))}>
          <Image
            style={[
              styles.bottomTabImg,
              {tintColor: selectedTab == 4 ? 'red' : 'black'},
            ]}
            source={require('../images/notification.png')}
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
  },
  bottomTab: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabImg: {
    width: 24,
    height: 24,
  },
});
