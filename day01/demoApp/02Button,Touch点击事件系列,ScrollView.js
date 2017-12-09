//返回一个组件就可以使用

import React from 'react'
//在RN中不能使用html使用组件代替
import {
  View,//不能直接写文字包括空格
  Text,
  Image,//普通形式需要在source中用require();网络照片写为uri:'',且必须设置宽高
  StyleSheet,
  Button,
  TouchableHighlight, // 高亮
  TouchableNativeFeedback, // (仅安卓中可以使用)
  TouchableOpacity, // 透明度变化 
  TouchableWithoutFeedback, // 没有特效
  ScrollView, // 使用它代替View,则超出部分会滚动
  // 页面布局比较随意，不是列表时使用!
  // 长列表滚动!
  // FlatList
} from 'react-native'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: 'haha'
    }
  }
  render() {
    return (
      <ScrollView>
        <Text onPress={e => alert('Text')} >hello</Text>

        <Image
          onPress={e => alert('Image')}
          style={{ width: 200, height: 200 }}
          source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512542017794&di=aab7a129e1f74c21f59fa9a2f1aab10a&imgtype=0&src=http%3A%2F%2Fwww.wed114.cn%2Fjiehun%2Fuploads%2Fallimg%2F150713%2F42_150713131707_1.jpg' }}></Image>
        <Button title='按钮' />

        <TouchableOpacity>
          <View style={{ backgroundColor: '#f0f' }}>
            <Text>TouchableOpacity</Text>
            <Text>哈哈</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={e => console.warn('TouchableNativeFeedback')}
        >
          <View style={{ backgroundColor: '#ff0' }}>
            <Text>TouchableNativeFeedback</Text>
            <Text>哈哈</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableHighlight
          onPress={e => console.warn('我是Highlight')}
        >
          <View style={{ backgroundColor: '#f00' }}>
            <Text>嘻嘻</Text>
            <Text>哈哈</Text>
          </View>
        </TouchableHighlight>


        <Text>下列代码用于测试滚动</Text>
        <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
        <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
        <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
        <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
        <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
        <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
        <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
      </ScrollView >
    )
  }
}

const styles = StyleSheet.create({
  mytext: {
    color: '#DB7676',
    marginTop: 20,
    marginBottom: 18,
    fontSize: 80,
  },
  mytext2: {

  }
})