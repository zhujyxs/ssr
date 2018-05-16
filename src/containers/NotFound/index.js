import React from 'react';
import { connect } from 'react-redux';
import Frame from '../../components/Frame';

class Total extends React.PureComponent {
    render() {
        return (
            <Frame>
                <div className="notFound" style={{ fontSize: '64px', textAlign: 'center', marginTop: '40px'}}>
                    404:你的页面不见了
                </div>
            </Frame>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Total);