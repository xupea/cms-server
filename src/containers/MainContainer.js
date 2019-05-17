import React, { Component } from "react";
import { Modal } from "antd";
import WorldList from "../components/WorldList";
import { PlaylistFormModal } from "../components/PlaylistFormModal";
import { ModuleFormModal } from "../components/ModuleFormModal";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  addWorldAction,
  deleteWorldAction,
  getWorldsAction
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

  setWorldVisible(editWorldVisible) {
    // new world
    // save world
    this.setState({ editWorldVisible });
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
          deleteWorldAction={this.props.deleteWorldAction}
          configWorld={() => this.setWorldVisible(true)}
          delete={world => this.setDeleteVisible(true)}
          configTopic={() => this.setTopicVisible(true)}
          configModule={() => this.setModuleVisible(true)}
        />
        <PlaylistFormModal
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.editTopicVisible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
        <ModuleFormModal
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.editModuleVisible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          onEdit={this.handleCreate}
        />
        <Modal
          title="Delete"
          centered
          destroyOnClose={true}
          visible={this.state.deleteVisible}
          onOk={() => this.setDeleteVisible(false)}
          onCancel={() => this.setDeleteVisible(false)}
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
      deleteWorldAction
    }
  )(Main)
);
