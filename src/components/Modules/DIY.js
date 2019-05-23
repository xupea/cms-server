import React from "react";
import { Form, Icon, Upload, Button } from "antd";

export default class DIY extends React.Component {
  render() {
    const { getFieldDecorator } = this.props;

    return (
      <React.Fragment>
        <Form.Item label="Intro Audio">
          {getFieldDecorator("introAudio", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile
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
        <Form.Item label="Step Audio">
          {getFieldDecorator("audio", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile
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
        <Form.Item label="Step Image">
          {getFieldDecorator("image", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile
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
      </React.Fragment>
    );
  }
}
