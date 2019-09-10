import React,{Component,Fragment} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import Login from 'pages/login'
import Admin from 'pages/admin'
import App from './App';
import Food from 'pages/food';
import User from 'pages/user';
class RootRouter extends Component{
    render(){
        return (
            <App>
                <HashRouter>
                    <Switch>
                        <Redirect exact from='/' to='/admin'></Redirect> {/*重定向*/}

                        <Route path='/admin' render={()=>{   {/*用户界面  渲染组件*/}
                            return (
                                <Admin>
                                    {/*在挂载组件里面写内容,页面不显示,但props的children里面有*/}
                                    {/*需要在挂载的组件引用一下，this.props.children*/}
                                    <Route path='/admin/food' component={Food}></Route>
                                    <Route path='/admin/user' component={User}></Route>
                                </Admin>
                            )
                        }}>

                        </Route>
                        <Route path='/login' component={Login}></Route>
                    </Switch>
                </HashRouter>
            </App>
        )
    }
}
export default RootRouter