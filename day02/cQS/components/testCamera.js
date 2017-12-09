import React,{Component} from 'react'
import { 
  View,
  Button,
  Image
 } from "react-native";
import ImagePicker from 'react-native-image-crop-picker'

 export default class TestCamera extends Component {
   constructor(){
     super()
     this.state = {
       imageUrl:''
     }
   }
   handlerPicture(){
     alert(ImagePicker)
    // ImagePicker.openPicker({
    //   width:300,
    //   height:300,
    //   cropping: true // 是否裁切图片
    // }).then(res=>{
    //   this.state.imageUrl = res.path
    // })
  }
   render(){
     const {imageUrl} = this.state
     return (
       <View>
         <Button onPress={e=>this.handlerPicture()} title='上传'/>
         <Image source={{uri:imageUrl}} style={{width:300,height:300}} />
       </View>
     )
   }
 }