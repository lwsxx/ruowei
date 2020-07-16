//复用头部组件
import * as React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { DatePicker, Icon } from '@ant-design/react-native'
import LinearGradient from 'react-native-linear-gradient'
import ExtraDimensions from 'react-native-extra-dimensions-android'

import {Constansts} from "../../utils/common";
import moment from 'moment/moment'
let {width, height, STATUSBAR_HEIGHT} = Constansts

export default function Header({scene, previous, navigation}) {
    const {options} = scene.descriptor

    //标题
    const title = options.headerTitle !== undefined?options.headerTitle:options.title!==undefined?options.title:scene.route.Name

    // return(
    //     <LinearGradient colors={['#ff9700', '#Ed1c24']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
    // )

}