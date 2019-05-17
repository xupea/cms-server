import React from "react";

import { Modal, Form } from "antd";
import WorldForm from "../WorldForm";

export const WorldFormModal = Form.create({ name: "world_form_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={visible}
          centered
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <WorldForm getFieldDecorator={getFieldDecorator} />
        </Modal>
      );
    }
  }
);
