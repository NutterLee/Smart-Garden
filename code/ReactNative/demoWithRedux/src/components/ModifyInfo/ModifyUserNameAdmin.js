import React from 'react';
import { ScrollView, Text ,View} from 'react-native';
import { Button, InputItem, List,WhiteSpace,Toast} from 'antd-mobile-rn';

class ModifyUserNameAdmin extends React.Component{
    constructor(props: any){
        super(props);
        this.state={
            username:this.props.navigation.state.params.item.user.username
        }
    }

    render(){
       return(
            <View>
                <WhiteSpace size={'lg'}/>
                <List>
                    <InputItem
                        clear
                        value={this.state.username}
                        onChange={
                            (value)=>{
                                this.setState({username:value})
                            }
                        }
                        placeholder={'username'}
                    />
                </List>
                <WhiteSpace size={'lg'}/>
                <Button type={'primary'} onClick={()=>{
                    this.props.navigation.state.params.onModifyInfo(
                        this.props.navigation.state.params.item.user.userId,
                        this.props.navigation.state.params.item.user.userType,
                        this.state.username,
                        this.props.navigation.state.params.item.user.phone,
                        this.props.navigation.state.params.item.user.email,
                        this.props.navigation.state.params.item.user.password,
                        this.props.navigation.state.params.item.user.userState);
                    this.props.navigation.goBack();
                }}
                        disabled={this.state.username === '' || typeof (this.state.username) === 'undefined'}>
                    Submit
                </Button>
                <WhiteSpace size={'lg'}/>
                <Button type={'primary'} onClick={()=>{
                    this.props.navigation.goBack();
                }}>
                    Cancel
                </Button>
            </View>
        )
    }
}

export default ModifyUserNameAdmin;