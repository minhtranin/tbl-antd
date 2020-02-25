import { Component } from 'react';
import { connect } from 'dva';
    class Page1 extends Component{
    componentDidMount(){
        console.log('page 1');
        const { dispatch } = this.props;
        window.addEventListener("beforeunload", () => {
            const { pathname } = window.location;
            console.log(pathname);
            dispatch({
                type: "benefits/storePath",
                payload: "okqkwokeqwke",
            })
          });
          window.addEventListener("turbolinks:before-render", e => {
            e.preventDefault();
            console.log("di");
          });
    }
    render(){
        console.log(this.props.benefits);
        const { history } = this.props;
        return<>
        <div>
            Page1
            <button onClick={()=>{history.push('/2')}}>page2</button>
        </div>
        </>
    }
}
export default connect((benefits)=>({benefits}))(Page1);
