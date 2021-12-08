import React from 'react';
import {View, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryLegend,
} from 'victory-native';

const data = {
  goaled: [
    {x: 'Day 1', y: 3000},
    {x: 'Day 2', y: 2500},
    {x: 'Day 3', y: 4000},
    {x: 'Day 4', y: 4000},
  ],
  drunk: [
    {x: 'Day 1', y: 2000},
    {x: 'Day 2', y: 2500},
    {x: 'Day 3', y: 3000},
    {x: 'Day 4', y: 3000},
  ],
};

const DailyScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 5,
            color: '#000000',
            alignSelf: 'center',
            padding: 20,
          }}>
          Daily Report
        </Text>
      </View>
      <View>
        <VictoryChart>
          <VictoryAxis />
          <VictoryAxis dependentAxis />
          <VictoryGroup offset={20}>
            <VictoryBar data={data.goaled} style={{data: {fill: '#21B6A8'}}} />
            <VictoryBar data={data.drunk} style={{data: {fill: 'blue'}}} />
          </VictoryGroup>
          <VictoryLegend
            x={Dimensions.get('screen').width / 2 - 120}
            orientation="horizontal"
            gutter={30}
            data={[
              {name: 'Drunk Amount', symbol: {fill: '#21B6A8'}},
              {name: 'Goaled Amount', symbol: {fill: 'blue'}},
            ]}
          />
        </VictoryChart>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default DailyScreen;
