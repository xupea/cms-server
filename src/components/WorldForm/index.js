import React from "react";
import { Form, Input, Icon, Upload, Button, InputNumber } from "antd";

export default class WorldForm extends React.Component {
  normFile = e => {
    if (e.file.status === "done") {
    }

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator, world } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <Form {...formItemLayout}>
        <Form.Item label="World Name">
          {getFieldDecorator("name", {
            initialValue: world ? world.name : "",
            rules: [
              {
                required: true,
                message: "Please input World Name!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="World Background">
          {getFieldDecorator("worldBackground", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: world ? world.worldBackground : null,
            rules: [
              {
                required: true,
                message: "Please upload images!"
              }
            ]
          })(
            <Upload
              name="sampleFile"
              action="http://localhost:8000/upload"
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="Background Story">
          {getFieldDecorator("backgroundStory", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: world ? world.backgroundStory : null
          })(
            <Upload
              name="sampleFile"
              action="http://localhost:8000/upload"
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="Unlock rules">
          {getFieldDecorator("unlockRules", {
            initialValue: world ? parseInt(world.unlockRules) : 0,
            rules: [
              {
                type: "number"
              },
              {
                required: true,
                message: "Please input Unlock rules!"
              }
            ]
          })(<InputNumber min={0} max={10} />)}
        </Form.Item>
        <Form.Item label="User Story">
          {getFieldDecorator("userStory", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: world ? world.userStory : null
          })(
            <Upload
              name="sampleFile"
              action="http://localhost:8000/upload"
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="Levelup Audio">
          {getFieldDecorator("levelupAudio", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: world ? world.levelupAudio : null
          })(
            <Upload
              name="sampleFile"
              action="http://localhost:8000/upload"
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
      </Form>
    );
  }
}
