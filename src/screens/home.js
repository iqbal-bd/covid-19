import { View, SafeAreaView} from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import CovidHeader from '../components/text/covid-header'
import { colors } from '../theme/colors'

export default function HOME() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.black,marginTop: 40}}>
        <CovidHeader></CovidHeader>
    </SafeAreaView>
  )
}
