import React from "react";

import { Modal, Form } from "antd";
import WorldForm from "../WorldForm";

export const WorldFormModal = Form.create({ name: "world_form_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, world } = this.props;
      const { getFieldDecorator } = form;
      // console.log(world);

      return (
        <Modal
          visible={visible}
          centered
          title={world ? "Edit the world" : "Create a new world"}
          okText={world ? "Edit" : "Create"}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <WorldForm getFieldDecorator={getFieldDecorator} world={world} />
        </Modal>
      );
    }
  }
);
