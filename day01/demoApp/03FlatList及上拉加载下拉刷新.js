

import React from 'react'
import {
  View,//不能直接写文字包括空格
  Text,
  Image,
  Button,
  FlatList
  // 长列表滚动!
  // FlatList
} from 'react-native'

//长列表滚动:只会加载当前屏幕显示的而不会全部一次性加载
//在RN中使用FlatList组件处理长列表滚动

export default class App extends React.Component {
  constructor() {
    super()
    this.state={
      refreshing: false, // 表示是否显示loading动画
      list: [
        {id: 1, name: '你好吗'},
        {id: 2, name: '你好吗1'},
        {id: 3, name: '你好吗2'},
        {id: 4, name: '你好吗3'}
      ]
    }
  }
  render() {
    return (
     <View>
       <FlatList 
       data={this.state.list}
       refreshing={this.state.refreshing}
       renderItem={this._renderItem}
       onRefresh={e=>{
         this.setState({refreshing:true})
         setTimeout(()=>{
          this.setState({refreshing:false})
         },2000)
         console.warn('下拉refresh')
       }}
       onEndReachedThreshold={10}
       onEndReached={e=>{
           console.warn('快滚动完了')
           this.state.list.push({id: 5, name: '你好吗4'})
           this.state.list.push({id: 6, name: '你好吗5'})
           this.setState({})
       }}
       />
     </View>
    )
  }
  _renderItem({item,index}){
    return (
      <View key={index} style={{height: 200, backgroundColor: '#E464F1'}}>
      <Text>{item.id},{item.name}</Text>
      </View>
    )
  }
}


