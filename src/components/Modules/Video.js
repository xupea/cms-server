import React from "react";
import { Form, Icon, Upload, Button } from "antd";

export default class Video extends React.Component {
  render() {
    const { getFieldDecorator } = this.props;

    return (
      <React.Fragment>
        <Form.Item label="Intro audio">
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
        <Form.Item label="Video file">
          {getFieldDecorator("video", {
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
