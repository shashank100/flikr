import React from "react";
import store from "src/js/store/store";
import Link from "src/js/components/Link";
import {connect} from "react-redux";
import {changeVisibilityFilter} from "src/js/actions/todoActions";
let Filter = ({dispatch}) => {
    return(
        <a>{this.props.children}</a>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: () => {
            dispatch(changeVisibilityFilter(props.visibilityFilter));
        }
    }
}

const mapStateToProps = (state, props) => {
    return {
        children: props.children
    }
}

Filter = connect(mapStateToProps, mapDispatchToProps)(Link);

export default Filter;
