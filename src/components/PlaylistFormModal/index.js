import React from "react";

import { Modal, Form } from "antd";
import { PlaylistForm } from "../PlaylistForm";

export const PlaylistFormModal = Form.create({ name: "topic_form_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, topic } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={visible}
          centered
          destroyOnClose
          title={topic ? "Edit the topic" : "Create a new topic"}
          okText={topic ? "Edit" : "Create"}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <PlaylistForm getFieldDecorator={getFieldDecorator} topic={topic} />
        </Modal>
      );
    }
  }
);
