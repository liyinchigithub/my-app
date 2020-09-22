import { render } from '@testing-library/react';
import { Button } from 'antd';

class Test01 extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Y:2020,
      M:09,
      D:22,
    }
  }
    render() {
        return (
            <div className="App">
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <Test01/>,
  document.getElementById("root")
);
