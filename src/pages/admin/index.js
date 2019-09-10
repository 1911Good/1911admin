//  admin组件
import React,{Component} from 'react'
import './index.less'
class Admin extends Component{
    render(props){
        console.log(this.props)  //这里打印可以看见
        return (
            <div className='admin'>
                <div className='admin-left'>
                    left
                </div>
                <div className='admin-right'>
                    <div className='admin-right-top'>top</div>
                    <div className='admin-right-center'>
                        {this.props.children}  {/*引入 */}
                    </div>
                    <div className='admin-right-footer'>footer</div>
                </div>
            </div>
        )
    }
}
export default Admin