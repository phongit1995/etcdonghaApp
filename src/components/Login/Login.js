import React , {Component} from 'react';
import {View, Text , ImageBackground ,StyleSheet ,TextInput ,StatusBar ,Animated,TouchableOpacity,KeyboardAvoidingView,Alert } from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';
import IconFont from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import  {ResetLogin,login} from './../../actions/Loginaction';
import * as Navigator from './../../navigator/refNavigations';
let ImgBg = require('./../images/header.png');
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            typingemail:false,
            typingpassword:false,
            email:'',
            password:''
        }
    }
    _focus(value){
        if(value=='email'){
            this.setState({
                typingemail:true,
                typingpassword:false
            })
        }
        if(value=='password'){
            this.setState({
                typingemail:false,
                typingpassword:true
            })
        }
    }
    _typing(){
        return(
            <TypingAnimation 
            dotColor="#93278f"
            style={{marginRight:25}}
        />
        )
    }
    componentDidUpdate(){
        console.log(this.props.Login.loginFail);
        
    }
    login=()=>{
        this.props.LoginAction(this.state.email,this.state.password)
    }
    componentDidMount(){
        console.log('phong');
        Navigator.reset({
            index:1,
            routes:[
                {name:'Main'}
            ]
        })
    }
    render(){
       
        return(
            <View style={styles.container} >
                <StatusBar barStyle={'light-content'}></StatusBar>
                <View style={styles.headers}>
                    <ImageBackground style={styles.imageBackGroundHeader} source={ImgBg}>
                        <Text style={{
                            color:'white',
                            fontWeight:'bold',
                            fontSize:30
                        }}>Welcome ETC</Text>
                        <Text style={{
                            color:'yellow',
                            fontSize:15
                        }}
                        >Sing in To continute</Text>
                    </ImageBackground>
                </View>
                <KeyboardAvoidingView style={styles.footer} >
                    <Text style={styles.title}>E-mail</Text>
                    <View style={styles.action}>
                        <TextInput placeholder={' Your Email...'} style={styles.textInput} onFocus={()=>{this._focus('email')}} onChangeText={(text)=>{this.setState({email:text})}}> </TextInput>
                        {this.state.typingemail? this._typing():null}
                    </View>
                    <Text style={[styles.title,{marginTop:10}]}>Password</Text>
                    <View style={styles.action}>
                        <TextInput placeholder={' Your Password...'} style={styles.textInput} onFocus={()=>{this._focus('password')}} onChangeText={(text)=>{this.setState({password:text})}} > </TextInput>
                        {this.state.typingpassword?this._typing():null}
                    </View>
                    <TouchableOpacity onPress={ this.login} >
                        <View style={styles.button_container}>
                            <Animated.View style={styles.anmations}>
                                <Text style={styles.textLogin}>Login</Text>
                            </Animated.View>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
        
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    },
    headers:{
        flex:1
    },
    footer:{
        flex:2,
        padding:20
    },
    imageBackGroundHeader:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },
    title:{
        color:'black',
        fontWeight:'bold'
    },
    action:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2'
    },
    textInput:{
        flex:1,
        paddingTop:5,
        paddingBottom:10,
        color:'gray'
    },
    button_container:{
        justifyContent:'center',
        alignItems:'center'
    },
    anmations:{
        backgroundColor:'#93278f',
        paddingVertical:10,
        marginTop:20,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    textLogin: {
        color:'white',
        fontWeight:'bold',
        fontSize:18
      },
})

const mapStateToProps = (state)=>{
    return{
        Login:state.Login
    }
}
const mapdispatchToProps=dispatch =>{
    return {
        resetFail:()=>{
            dispatch(ResetLogin());
        },
        LoginAction:(username,password)=>{
            dispatch(login(username,password))
        }
    }
    
}
export default  connect(mapStateToProps,mapdispatchToProps)( Login );