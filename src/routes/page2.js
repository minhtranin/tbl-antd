import { Component } from 'react';
export default class Page2 extends Component{
    componentDidMount(){
        console.log('page 2');
    }
    render(){
        const { history } = this.props;
        return<>
        <div>
            Page2
            <button onClick={()=>{history.push('/3')}}>page3</button>
        </div>
        </>
    }
}
