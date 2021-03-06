import React from "react";
import { Form, Icon, Upload, Button } from "antd";

const uploadURL = "http://localhost:8000/upload";

export default class Joke extends React.Component {
  render() {
    const { getFieldDecorator, image, audio } = this.props;

    return (
      <React.Fragment>
        <Form.Item label="Image">
          {getFieldDecorator("image", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: image,
            rules: [
              {
                required: true,
                message: "Please upload images!"
              }
            ]
          })(
            <Upload
              name="sampleFile"
              action={uploadURL}
              listType="picture"
              accept="image/*"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="Audio">
          {getFieldDecorator("audio", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: audio,
            rules: [
              {
                required: true,
                message: "Please upload audios!"
              }
            ]
          })(
            <Upload name="sampleFile" action={uploadURL} listType="picture">
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
