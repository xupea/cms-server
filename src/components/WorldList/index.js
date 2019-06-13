/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Table, Divider, Button, Modal } from "antd";
import { WorldFormModal } from "../../components/WorldFormModal";
import { PlaylistFormModal } from "../../components/PlaylistFormModal";
import { ModuleFormModal } from "../../components/ModuleFormModal";
import { QuestionFormModal } from "../QuestionFormModal";

export default class WorldList extends Component {
  constructor(props) {
    super(props);

    this.worldColumns = [
      {
        title: "No.",
        dataIndex: "index",
        key: "index",
        render: (text, record, index) => index + 1
      },
      { title: "World Name", dataIndex: "name", key: "name" },
      {
        title: "Topic Count",
        dataIndex: "playlistCount",
        key: "playlistCount",
        render: (text, record) => (record.topics ? record.topics.length : 0)
      },
      {
        title: "Latest Update Time",
        dataIndex: "updateAt",
        key: "updateAt"
      },
      { title: "Creation Time", dataIndex: "createdAt", key: "createdAt" },
      { title: "Creator", dataIndex: "creator", key: "creator" },
      {
        title: "Operatons",
        key: "operation",
        render: (text, world) => (
          <span>
            <a
              href="javascript:;"
              onClick={() => this.setAddPlaylistModalVisible(true, world)}
            >
              Add Topic
            </a>
            <Divider type="vertical" />
            <a
              href="javascript:;"
              onClick={() => this.setAddWorldModalVisible(true, world)}
            >
              Edit
            </a>
            <Divider type="vertical" />
            <a
              href="javascript:;"
              onClick={() => this.setDeleteWorldModalVisible(true, world)}
            >
              Delete
            </a>
          </span>
        )
      }
    ];

    this.playListColumns = [
      { title: "Topic Name", dataIndex: "name", key: "name" },
      {
        title: "Module Count",
        dataIndex: "",
        key: "",
        render: (text, record) => (record.modules ? record.modules.length : 0)
      },
      {
        title: "Operatons",
        dataIndex: "operation",
        key: "operation",
        render: (text, topic) => (
          <span>
            <a
              href="javascript:;"
              onClick={() => this.setAddModuleModalVisible(true, null, topic)}
            >
              Add Module
            </a>
            <Divider type="vertical" />
            <a
              href="javascript:;"
              onClick={() => this.setAddPlaylistModalVisible(true, null, topic)}
            >
              Edit(Topic)
            </a>
            <Divider type="vertical" />
            <a
              href="javascript:;"
              onClick={() => this.setDeleteTopicModalVisible(true, topic)}
            >
              Delete(Topic)
            </a>
          </span>
        )
      }
    ];

    this.moduleColumns = [
      {
        title: "No.",
        dataIndex: "index",
        key: "index",
        render: (text, record, index) => `Module ${index + 1}`
      },
      { title: "Type", dataIndex: "type", key: "type" },
      {
        title: "Operatons",
        dataIndex: "operation",
        key: "operation",
        render: (text, mod) => (
          <span>
            {mod.type === "trivia" ? (
              <span>
                <a
                  href="javascript:;"
                  onClick={() =>
                    this.setAddQuestionModalVisible(true, null, null, mod)
                  }
                >
                  Add Question
                </a>
                <Divider type="vertical" />
              </span>
            ) : null}
            <a
              href="javascript:;"
              onClick={() =>
                this.setAddModuleModalVisible(true, null, null, mod)
              }
            >
              Edit
            </a>
            <Divider type="vertical" />
            <a
              href="javascript:;"
              onClick={() => this.setDeleteModuleModalVisible(true, mod)}
            >
              Delete
            </a>
          </span>
        )
      }
    ];

    this.questionColumns = [
      {
        title: "No.",
        dataIndex: "index",
        key: "index1",
        render: (text, record, index) => `Question ${index + 1}`
      },
      {
        title: "Question Type",
        dataIndex: "type",
        key: "type"
      },
      {
        title: "Question Text",
        dataIndex: "questionText",
        key: "questionText"
      },
      {
        title: "Operatons",
        dataIndex: "operation",
        key: "operation",
        render: (text, question) => (
          <span>
            <a
              href="javascript:;"
              onClick={() =>
                this.setAddQuestionModalVisible(
                  true,
                  null,
                  null,
                  null,
                  question
                )
              }
            >
              Edit
            </a>
            <Divider type="vertical" />
            <a
              href="javascript:;"
              onClick={() => this.setDeleteQuestionModalVisible(true, question)}
            >
              Delete
            </a>
          </span>
        )
      }
    ];
  }

  state = {
    addWorldVisible: false,
    deleteWorldVisible: false,
    editWorldVisible: false,
    addTopicVisible: false,
    editTopicVisible: false,
    addModuleVisible: false,
    editModuleVisible: false,
    deleteModuleVisible: false,
    addQuestionVisible: false,
    updateQuestionVisible: false,
    deleteQuestionVisible: false,
    selectedWorld: null,
    selectedTopic: null,
    selectedModule: null,
    selectedQuestion: null
  };

  saveFormRefWorld = formRef => {
    this.formRefWorld = formRef;
  };

  saveFormRefTopic = formRef => {
    this.formRefTopic = formRef;
  };

  saveFormRefModule = formRef => {
    this.formRefModule = formRef;
  };

  saveFormRefQuestion = formRef => {
    this.formRefQuestion = formRef;
  };

  setAddWorldModalVisible(addWorldVisible, world) {
    this.setState({ addWorldVisible, selectedWorld: world });
  }

  setAddQuestionModalVisible(addQuestionVisible, world, topic, mod, question) {
    this.setState({
      addQuestionVisible,
      selectedWorld: world,
      selectedTopic: topic,
      selectedModule: mod,
      selectedQuestion: question
    });
  }

  setAddModuleModalVisible(addModuleVisible, world, topic, mod) {
    this.setState({
      addModuleVisible,
      selectedWorld: world,
      selectedTopic: topic,
      selectedModule: mod
    });
  }

  setAddPlaylistModalVisible(addTopicVisible, world, topic) {
    this.setState({
      addTopicVisible,
      selectedWorld: world,
      selectedTopic: topic
    });
  }

  setDeleteWorldModalVisible = (deleteWorldVisible, world) => {
    this.setState({
      deleteWorldVisible,
      selectedWorld: world ? world : null
    });
  };

  setDeleteTopicModalVisible = (deleteTopicVisible, topic) => {
    this.setState({
      deleteTopicVisible,
      selectedTopic: topic ? topic : null
    });
  };

  setDeleteModuleModalVisible = (deleteModuleVisible, mod) => {
    this.setState({
      deleteModuleVisible,
      selectedModule: mod ? mod : null
    });
  };

  setDeleteQuestionModalVisible = (deleteQuestionVisible, mod) => {
    this.setState({
      deleteQuestionVisible,
      selectedModule: mod ? mod : null
    });
  };

  handleDeleteWorld = () => {
    this.props.deleteWorldAction(this.state.selectedWorld.id);
    this.setDeleteWorldModalVisible(false);
  };

  handleDeleteTopic = () => {
    this.props.deleteTopicAction(this.state.selectedTopic);
    this.setDeleteTopicModalVisible(false);
  };

  handleDeleteModule = () => {
    this.props.deleteModuleAction(this.state.selectedModule);
    this.setDeleteModuleModalVisible(false);
  };

  handleDeleteQuestion = () => {
    this.props.deleteQuestionAction(this.state.selectedModule);
    this.setDeleteQuestionModalVisible(false);
  };

  handleCreateWorld = () => {
    const form = this.formRefWorld.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      if (this.state.selectedWorld) {
        values.id = this.state.selectedWorld.id;
        this.props.updateWorldAction(values);
      } else this.props.addWorldAction(values);

      this.setState({ addWorldVisible: false, selectedWorld: null });
    });
  };

  handleCreateTopic = () => {
    const form = this.formRefTopic.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();

      if (this.state.selectedWorld) {
        values.worldId = this.state.selectedWorld.id;
      }

      if (this.state.selectedTopic) {
        values.id = this.state.selectedTopic.id;
        values.worldId = this.state.selectedTopic.worldId;
        this.props.updateTopicAction(values);
      } else this.props.addTopicAction(values);

      this.setState({ addTopicVisible: false, selectedTopic: null });
    });
  };

  handleCreateModule = () => {
    const form = this.formRefModule.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();

      if (this.state.selectedTopic) {
        values.topicId = this.state.selectedTopic.id;
        values.worldId = this.state.selectedTopic.worldId;
      }

      if (this.state.selectedModule) {
        values.id = this.state.selectedModule.id;
        values.worldId = this.state.selectedModule.worldId;
        values.topicId = this.state.selectedModule.topicId;
        this.props.updateModuleAction(values);
      } else this.props.addModuleAction(values);

      this.setState({ addModuleVisible: false, selectedModule: null });
    });
  };

  handleCreateQuestion = () => {
    const form = this.formRefQuestion.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();

      if (this.state.selectedModule) {
        values.moduleId = this.state.selectedModule.id;
        values.worldId = this.state.selectedModule.worldId;
        values.topicId = this.state.selectedModule.topicId;
      }

      if (this.state.selectedQuestion) {
        values.id = this.state.selectedQuestion.id;
        values.moduleId = this.state.selectedQuestion.moduleId;
        values.worldId = this.state.selectedQuestion.worldId;
        values.topicId = this.state.selectedQuestion.topicId;
        this.props.updateQuestionAction(values);
      } else this.props.addQuestionAction(values);

      this.setState({ addQuestionVisible: false, selectedQuestion: null });
    });
  };

  handleCancel = () => {
    this.setState({
      addWorldVisible: false,
      deleteWorldVisible: false,
      deleteTopicVisible: false,
      editWorldVisible: false,
      addTopicVisible: false,
      editTopicVisible: false,
      editModuleVisible: false,
      addModuleVisible: false,
      addQuestionVisible: false,
      editQuestionVisible: false,
      deleteQuestionVisible: false
    });
  };

  questionRowRender = mod => {
    return (
      <Table
        columns={this.questionColumns}
        dataSource={mod.questions}
        pagination={false}
        rowKey={record => record.id}
      />
    );
  };

  moduleRowRender = topic => {
    return (
      <Table
        columns={this.moduleColumns}
        dataSource={topic.modules}
        expandedRowRender={this.questionRowRender}
        pagination={false}
        rowKey={record => record.id}
      />
    );
  };

  topicRowRender = world => {
    return (
      <Table
        columns={this.playListColumns}
        dataSource={world.topics}
        pagination={false}
        rowKey={record => record.id}
        expandedRowRender={this.moduleRowRender}
      />
    );
  };

  render() {
    return (
      <React.Fragment>
        <Button
          type="primary"
          onClick={() => this.setAddWorldModalVisible(true)}
        >
          New World
        </Button>
        <Table
          className="components-table-demo-nested"
          columns={this.worldColumns}
          expandedRowRender={this.topicRowRender}
          rowKey={record => record.id}
          dataSource={this.props.source}
        />
        <WorldFormModal
          world={this.state.selectedWorld}
          wrappedComponentRef={this.saveFormRefWorld}
          visible={this.state.addWorldVisible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreateWorld}
        />
        <PlaylistFormModal
          topic={this.state.selectedTopic}
          wrappedComponentRef={this.saveFormRefTopic}
          visible={this.state.addTopicVisible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreateTopic}
        />
        <ModuleFormModal
          mod={this.state.selectedModule}
          wrappedComponentRef={this.saveFormRefModule}
          visible={this.state.addModuleVisible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreateModule}
        />
        <QuestionFormModal
          question={this.state.selectedQuestion}
          wrappedComponentRef={this.saveFormRefQuestion}
          visible={this.state.addQuestionVisible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreateQuestion}
        />
        <Modal
          title="Delete World"
          centered
          destroyOnClose={true}
          visible={this.state.deleteWorldVisible}
          onOk={() => this.handleDeleteWorld()}
          onCancel={() => this.setDeleteWorldModalVisible(false)}
        >
          <p>Are you sure to delete this world?</p>
        </Modal>
        <Modal
          title="Delete Topic"
          centered
          destroyOnClose={true}
          visible={this.state.deleteTopicVisible}
          onOk={() => this.handleDeleteTopic()}
          onCancel={() => this.setDeleteTopicModalVisible(false)}
        >
          <p>Are you sure to delete this topic?</p>
        </Modal>
        <Modal
          title="Delete Module"
          centered
          destroyOnClose={true}
          visible={this.state.deleteModuleVisible}
          onOk={() => this.handleDeleteModule()}
          onCancel={() => this.setDeleteModuleModalVisible(false)}
        >
          <p>Are you sure to delete this module?</p>
        </Modal>
        <Modal
          title="Delete Question"
          centered
          destroyOnClose={true}
          visible={this.state.deleteQuestionVisible}
          onOk={() => this.handleDeleteQuestion()}
          onCancel={() => this.setDeleteQuestionModalVisible(false)}
        >
          <p>Are you sure to delete this question?</p>
        </Modal>
      </React.Fragment>
    );
  }
}
