import React, { Component } from "react";
import { Table, Divider, Button, Modal } from "antd";
import { WorldFormModal } from "../../components/WorldFormModal";
import { PlaylistFormModal } from "../../components/PlaylistFormModal";

export default class WorldList extends Component {
  constructor(props) {
    super(props);

    this.worldColumns = [
      { title: "No.", dataIndex: "index", key: "index" },
      { title: "World Name", dataIndex: "name", key: "name" },
      {
        title: "Playlist Count",
        dataIndex: "playlistCount",
        key: "playlistCount"
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
              Add Playlist
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
      { title: "No.", dataIndex: "index", key: "index" },
      { title: "Topic Name", dataIndex: "name", key: "name" },
      { title: "Topic Image", dataIndex: "", key: "image" },
      {
        title: "Operatons",
        dataIndex: "operation",
        key: "operation",
        render: (text, topic) => (
          <span>
            <a href="javascript:;" onClick={() => this.props.configModule()}>
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
      { title: "No.", dataIndex: "index", key: "index" },
      { title: "Module Name", dataIndex: "name", key: "name" },
      { title: "Type", dataIndex: "type", key: "type" },
      {
        title: "Operatons",
        dataIndex: "operation",
        key: "operation",
        render: (text, mod) => (
          <span>
            <a href="javascript:;" onClick={() => this.props.configModule(mod)}>
              Edit
            </a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={() => this.props.delete(mod)}>
              Delete
            </a>
          </span>
        )
      }
    ];

    // sample datasource
    this.dataSource = [
      {
        index: 1,
        name: "Inside Corbit",
        playlistCount: "10",
        updateTime: "2014-12-24 23:12:00",
        creator: "Peter",
        createdAt: "2014-12-24 23:12:00",
        topics: [
          {
            index: 1,
            name: "Topic 1",
            image: "Image URL",
            modules: [
              { id: "module1", name: "Module1", type: "Factoid", index: 1 },
              { id: "module2", name: "Module2", type: "DIY", index: 2 }
            ]
          }
        ]
      }
    ];
  }

  state = {
    addWorldVisible: false,
    deleteWorldVisible: false,
    editWorldVisible: false,
    addTopicVisible: false,
    editTopicVisible: false,
    editModuleVisible: false,
    selectedWorld: null,
    selectedTopic: null
  };

  saveFormRefWorld = formRef => {
    this.formRefWorld = formRef;
  };

  saveFormRefTopic = formRef => {
    this.formRefTopic = formRef;
  };

  setAddWorldModalVisible(addWorldVisible, world) {
    this.setState({ addWorldVisible, selectedWorld: world });
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

  handleDeleteWorld = () => {
    this.props.deleteWorldAction(this.state.selectedWorld.id);
    this.setDeleteWorldModalVisible(false);
  };

  handleDeleteTopic = () => {
    this.props.deleteTopicAction(this.state.selectedTopic);
    this.setDeleteTopicModalVisible(false);
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
        values.wid = this.state.selectedWorld.id;
      }

      console.log(this.state.selectedTopic);

      if (this.state.selectedTopic) {
        values.id = this.state.selectedTopic.id;
        values.wid = this.state.selectedTopic.wid;
        this.props.updateTopicAction(values);
      } else this.props.addTopicAction(values);

      this.setState({ addTopicVisible: false, selectedWorld: null });
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
      editModuleVisible: false
    });
  };

  moduleRowRender = record => {
    return (
      <Table
        columns={this.moduleColumns}
        dataSource={record.modules}
        pagination={false}
        bordered={true}
      />
    );
  };

  topicRowRender = record => {
    return (
      <Table
        columns={this.playListColumns}
        dataSource={record.topics}
        pagination={false}
        expandedRowRender={this.moduleRowRender}
        bordered={true}
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
          dataSource={this.props.source}
          bordered={true}
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
      </React.Fragment>
    );
  }
}
