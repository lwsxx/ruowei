/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//入口路由文件
import React,{Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, TransitionPresets, CardStyleInterpolators} from "@react-navigation/stack";
import {Provider} from "@ant-design/react-native";
//导航工具
//头部组件
//图片查看
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
const REQUEST_URL="https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

class App extends Component{
 constructor(props){
  super(props);
  this.state={
   date:[],
   loaded:false
  };
 this.fetchData=this.fetchData.bind(this);
 }
  componentDidMount() {
   this.fetchData();
  }

  fetchData(){
   fetch(REQUEST_URL)
       .then(response =>response.json())
       .then(responseData=>{
         this.setState({
           data:this.state.data.concat(responseData.movies),
           loaded:true
         });
       });
  }
  render() {
   if (!this.state.loaded){
     return this.renderLoadingView();
   }
   return (
       <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={item=>item.id}
       />
   );
  }
  renderLoadingView(){
   return(
       <View style={styles.container}>
         <Text>Loading movies....</Text>
       </View>
   )
  }

  renderMovie({item}){
   return(
       <View style={styles.container}>
         <Image
           source={{uri:item.posters.thumbnail}}
           style={styles.thumbnail}
         />
         <View style={styles.rightContainer}>
           <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.year}>{item.year}</Text>
         </View>
       </View>
   )
  }
}

  const styles = StyleSheet.create({
  Container: {
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F5FCFF"
  },
  rightContainer:{
    flex: 1
  },
    title:{
    fontSize:20,
      marginBottom:8,
      textAlign: "center"
    },
    year:{
    textAlign:"center"
    },
    thumbnail:{
    width:53,
      height:81,
    },
    list:{
    paddingTop:20,
      backgroundColor: "#F5FCFF"
    }
});

export default App;
