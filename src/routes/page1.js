import { Component } from 'react';
export default class Page1 extends Component{
    componentDidMount(){
        console.log('page 1');
        window.addEventListener("beforeunload", () => {
            const { pathname } = window.location;
            console.log(pathname);
          });
          window.addEventListener("turbolinks:before-render", e => {
            e.preventDefault();
            console.log("di");
          });
    }
    render(){
        const { history } = this.props;
        return<>
        <div>
            Page1
            <button onClick={()=>{history.push('/2')}}>page2</button>
        </div>
        </>
    }
}
