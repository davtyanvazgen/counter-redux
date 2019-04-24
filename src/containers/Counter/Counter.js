import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        {this.props.storedResults.map(strResult => (
          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              border: "1px solid purple"
            }}
            key={strResult.id}
          >
            {strResult.value}
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => {
                this.props.onDeleteResult(strResult.id);
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

// with actionTypes
// const mapDispatchToProps = dispatch => {
//   return {
//     onIncrementCounter: () => dispatch({ type: atcionTypes.INCREMENT }),
//     onDecrementCounter: () => dispatch({ type: atcionTypes.DECREMENT }),
//     onAddCounter: () => dispatch({ type: atcionTypes.ADD, val: 10 }),
//     onSubtractCounter: () => dispatch({ type: atcionTypes.SUBTRACT, val: 15 }),
//     onStoreResult: result =>
//       dispatch({ type: atcionTypes.STORE_RESULT, result: result }),
//     onDeleteResult: id =>
//       dispatch({ type: atcionTypes.DELETE_RESULT, resultElId: id })
//   };
// };

//with action creators
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(10)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
    onStoreResult: result => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
