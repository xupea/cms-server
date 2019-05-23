import React, { Component } from "react";
import WorldList from "../components/WorldList";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  addWorldAction,
  updateWorldAction,
  deleteWorldAction,
  getWorldsAction,
  addTopicAction,
  updateTopicAction,
  deleteTopicAction,
  addModuleAction,
  updateModuleAction,
  deleteModuleAction,
  addQuestionAction,
  updateQuestionAction,
  deleteQuestionAction
} from "../redux/actions";

// import "./App.css";

class Main extends Component {
  state = {
    deleteVisible: false,
    editWorldVisible: false,
    editTopicVisible: false,
    editModuleVisible: false
  };

  componentDidMount() {
    this.props.getWorldsAction();
  }

  setDeleteVisible(deleteVisible) {
    this.setState({ deleteVisible });
  }

  handleCancel = () => {
    this.setState({ editWorldVisible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.props.configWorld(values);
      this.setState({ editWorldVisible: false });
    });
  };

  handleDeleteWorld = () => {};

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  setTopicVisible(editTopicVisible) {
    this.setState({ editTopicVisible });
  }

  setModuleVisible(editModuleVisible) {
    this.setState({ editModuleVisible });
  }

  render() {
    return (
      <div className="App">
        <WorldList
          source={this.props.worlds}
          addWorldAction={this.props.addWorldAction}
          updateWorldAction={this.props.updateWorldAction}
          deleteWorldAction={this.props.deleteWorldAction}
          addTopicAction={this.props.addTopicAction}
          updateTopicAction={this.props.updateTopicAction}
          deleteTopicAction={this.props.deleteTopicAction}
          addModuleAction={this.props.addModuleAction}
          updateModuleAction={this.props.updateModuleAction}
          deleteModuleAction={this.props.deleteModuleAction}
          addQuestionAction={this.props.addQuestionAction}
          updateQuestionAction={this.props.updateQuestionAction}
          deleteQuestionAction={this.props.deleteQuestionAction}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  worlds: state.worlds
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      getWorldsAction,
      addWorldAction,
      updateWorldAction,
      deleteWorldAction,
      addTopicAction,
      updateTopicAction,
      deleteTopicAction,
      addModuleAction,
      updateModuleAction,
      deleteModuleAction,
      addQuestionAction,
      updateQuestionAction,
      deleteQuestionAction
    }
  )(Main)
);
