import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setURL } from '../Actions/actions';

class EntryModuleComponent extends Component {
    constructor(props) {
        super(props)
        const { dispatch } = this.props;
        this.onChange = this.onChange.bind(this);
        this.state = {
            urlValue : '',
        }
    }

    onChange(ev) {
        this.setState({
            urlValue : ev.target.value,
        }, () => {
            this.props.setURL(this.state.urlValue);
        });
    }


    render() {
        return (
            <div className="App">
                <input type="text" value={this.state.urlValue} onChange={this.onChange}/>
                {this.props.data}
            </div>
        );
    }
}

EntryModuleComponent.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        data: state.dataUpdate.data,
        url : state.dataUpdate.url,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setURL: (url) => dispatch(setURL(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryModuleComponent);
