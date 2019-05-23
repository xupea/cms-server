import React from "react";
import { Modal, Form } from "antd";
import ModuleForm from "../ModuleForm";

export const ModuleFormModal = Form.create({ name: "module_form_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, mod } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={visible}
          centered
          destroyOnClose
          title={mod ? "Edit Module" : "Create Module"}
          okText={mod ? "Edit" : "Create"}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <ModuleForm getFieldDecorator={getFieldDecorator} mod={mod} />
        </Modal>
      );
    }
  }
);
