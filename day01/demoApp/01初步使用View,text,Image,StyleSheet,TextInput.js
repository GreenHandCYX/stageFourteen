//返回一个组件就可以使用

import React from 'react'
//在RN中不能使用html使用组件代替
import {
  View,//不能直接写文字包括空格
  Text,
  Image,//普通形式需要在source中用require();网络照片写为uri:'',且必须设置宽高
  StyleSheet,
  TextInput
} from 'react-native'

//RN本身不支持写css文件，有以下三种方式来解决
//1. 对象的形式,在页面每次刷新时都会创建一个新对象
//2. 数组的形式,相同属性值后面的会覆盖前面的
//3. StyleSheet.create创建的形式，生成后即使重新渲染也是原来的对象
    //a.把需要的方法写在create方法中
    //b.参数的key不是普通样式属性
    //c.参数的value都是样式对象


//在RN中所有元素的display都是flex
//并且默认的布局方式是flex且是从上到下排列


//在RN中通过TextInput处理表单提交的值,包括input和textarea,可以通过onChangeText直接修改表单的值


export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      text:'haha'
    }
  }
  render(){
    return (
      <View>
        <Text>hello</Text>
        {
            // <Image source={ require('./assets/images/demo.jpg') }/>
        }
        <Image
        style={ {width:200,height:200} } 
        source={//网络路径需要设置宽高
           {uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512542017794&di=aab7a129e1f74c21f59fa9a2f1aab10a&imgtype=0&src=http%3A%2F%2Fwww.wed114.cn%2Fjiehun%2Fuploads%2Fallimg%2F150713%2F42_150713131707_1.jpg'} }></Image>
        <View style={{flexDirection: 'row',backgroundColor: '#EBA5A5'}}>
          <Text style={{backgroundColor: '#ff0', flex: 1}}>哈哈</Text>
          <Text style={{backgroundColor: '#ff0'}}>哈哈</Text>
          <Text style={{backgroundColor: '#ff0'}}>哈哈</Text>
        </View>
        <View>
          <Text
          style={ [{color: '#f00', fontSize: 40}, {fontSize: 20}] }
          >测试多个样式</Text>
          <Text
          style={ styles.mytext }
          >StyleSheet</Text>
        </View>
        <View>
          <TextInput value={this.state.text} 
            onChangeText={text=>this.setState({text})}
          ></TextInput>
        </View>    
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mytext:{
    color: '#DB7676',
    marginTop: 20,
    marginBottom: 18,
    fontSize: 80,
  },
  mytext2:{

  }
})