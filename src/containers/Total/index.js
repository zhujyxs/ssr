import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Frame';
import Rule from '../../components/Rule';
import 'antd/dist/antd.css';

class Home extends React.PureComponent {
    render() {
        return (
            <Layout>
                <Rule />
            </Layout>
        );
    }
}

function mapStateToProps(state, ownProps) {
}

export default connect(mapStateToProps)(Home);
