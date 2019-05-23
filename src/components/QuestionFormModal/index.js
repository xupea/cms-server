import React from "react";
import { Modal, Form } from "antd";
import Trivia from "../Modules/Trivia";

export const QuestionFormModal = Form.create({ name: "question_form_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, question } = this.props;
      const { getFieldDecorator } = form;

      const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 14 }
      };

      return (
        <Modal
          visible={visible}
          centered
          destroyOnClose
          title={question ? "Edit Question" : "Create Question"}
          okText={question ? "Edit" : "Create"}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form {...formItemLayout}>
            <Trivia getFieldDecorator={getFieldDecorator} question={question} />
          </Form>
        </Modal>
      );
    }
  }
);
