import React from "react";

import { Modal, Form } from "antd";
import ModuleForm from "../ModuleForm";
import { PlaylistForm } from "../PlaylistForm";

export const PlaylistFormModal = Form.create({ name: "topic_form_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={visible}
          centered
          title="Create Topic"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <PlaylistForm getFieldDecorator={getFieldDecorator} />
        </Modal>
      );
    }
  }
);
