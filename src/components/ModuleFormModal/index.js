import React from "react";

import { Modal, Form } from "antd";
import ModuleForm from "../ModuleForm";

export const ModuleFormModal = Form.create({ name: "module_form_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={visible}
          centered
          title="Create Module"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <ModuleForm getFieldDecorator={getFieldDecorator} />
        </Modal>
      );
    }
  }
);
