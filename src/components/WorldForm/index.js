import React from "react";
import { Form, Input, Icon, Upload, Button, InputNumber, Row, Col } from "antd";
import AWS from "aws-sdk";
import Sound from "react-sound";
import { revertWolrd } from "../../utils";

const uploadURL = "http://localhost:8000/upload";

const props = {
  // multiple: false,
  // onStart(file) {
  //   console.log("onStart", file, file.name);
  // },
  // onSuccess(ret, file) {
  //   console.log("onSuccess", ret, file.name);
  // },
  // onError(err) {
  //   console.log("onError", err);
  // },
  // onProgress({ percent }, file) {
  //   console.log("onProgress", `${percent}%`, file.name);
  // },
  customRequest({
    action,
    data,
    file,
    filename,
    headers,
    onError,
    onProgress,
    onSuccess,
    withCredentials
  }) {
    AWS.config.update({
      accessKeyId: "ASIASP5NVVFEE62D44QX",
      secretAccessKey: "QvYn6s885E+5EvrVQ3vLgNg8goUyd1LMMoeuZiOX",
      sessionToken:
        "FQoGZXIvYXdzEFAaDLA9S0A+0ARMPZxO/SKpAvWJUPRraRRzphTbeKVOEnBNbyHaCgvxMgHDXwIcR1O9FtR0qML6kgyy7DrYpeibaquHuWOBXSkDA04VA1oaA34d+i8qM+C/uj6qZJ9mU8lCJnPap1TizSQP6WO4iqjQ8N6JJ/xm0MVSglAfmpk6GgFgy4ZSuNMbnM6GlfrmiyqE2l7e3hsU4JEKywtaM4D8avBfD64HORAAsu2mtzNZV88SV3qAhGLzx8/EjhEOxR8NPMk1KaU5HWUXqU1IG9myXUIVAEkFB+XixdLCg6gJaz2cR6Ho45ODP2uCvzjGd3kVY4Iir/22g1GyPCz4Qy73d6pSAddYns85jTsaSYMDIdWKGIANz05WkDsiEnBvg8eu/azd3Nx9JVPwOfh62nWmuz4a/2o0j1gv1ij81bjnBQ=="
    });

    const S3 = new AWS.S3();
    console.log("DEBUG filename", file.name);
    console.log("DEBUG file type", file.type);

    const objParams = {
      Bucket: "makeblock",
      Key: file.name,
      Body: file,
      ContentType: file.type // TODO: You should set content-type because AWS SDK will not automatically set file MIME
    };

    S3.putObject(objParams)
      .on("httpUploadProgress", function({ loaded, total }) {
        onProgress(
          {
            percent: Math.round((loaded / total) * 100)
          },
          file
        );
      })
      .send(function(err, data) {
        if (err) {
          onError();
          console.log("Something went wrong");
          console.log(err.code);
          console.log(err.message);
        } else {
          onSuccess(data.response, file);
          console.log(data.response);
          console.log("SEND FINISHED");
        }
      });
  }
};

export default class WorldForm extends React.Component {
  normFile = e => {
    if (e.file.status === "done") {
    }

    if (Array.isArray(e)) {
      console.log("array");
      return e;
    }
    return e && e.fileList;
  };

  state = {
    url: "",
    status: Sound.status.STOPPED
  };

  onPreview = file => {
    if (file.type === "audio/mp3" && file.status === "done") {
      this.setState({
        url: file.response,
        status: Sound.status.PLAYING
      });
    }
  };

  render() {
    const { getFieldDecorator, world } = this.props;

    const newWorld = world ? revertWolrd(world) : null;

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
            initialValue: newWorld ? newWorld.name : "",
            rules: [
              {
                required: true,
                message: "Please input World Name!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="World Background">
          {getFieldDecorator("backgroundImage", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: newWorld ? newWorld.backgroundImage : null,
            rules: [
              {
                required: true,
                message: "Please upload images!"
              }
            ]
          })(
            <Upload
              onPreview={this.onPreview}
              name="sampleFile"
              action={uploadURL}
              accept="image/*"
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="Background Story">
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Images">
                {getFieldDecorator("backgroundStoryImages", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  initialValue: newWorld
                    ? newWorld.backgroundStoryImages
                    : null,
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
                    accept="image/*"
                    listType="picture"
                  >
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Audios">
                {getFieldDecorator("backgroundStoryAudios", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  initialValue: newWorld
                    ? newWorld.backgroundStoryAudios
                    : null,
                  rules: [
                    {
                      required: true,
                      message: "Please upload audios!"
                    }
                  ]
                })(
                  <Upload
                    onPreview={this.onPreview}
                    name="sampleFile"
                    action={uploadURL}
                    accept="audio/mp3"
                    listType="picture"
                  >
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label="Unlock rules">
          {getFieldDecorator("unlockRestriction", {
            initialValue: newWorld ? parseInt(newWorld.unlockRestriction) : 0,
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
        <Form.Item label="Unlock Story">
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Images">
                {getFieldDecorator("unlockStoryImages", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  initialValue: newWorld ? newWorld.unlockStoryImages : null,
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
                    accept="image/*"
                    listType="picture"
                  >
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Audios">
                {getFieldDecorator("unlockStoryAudios", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  initialValue: newWorld ? newWorld.unlockStoryAudios : null,
                  rules: [
                    {
                      required: true,
                      message: "Please upload audios!"
                    }
                  ]
                })(
                  <Upload
                    onPreview={this.onPreview}
                    name="sampleFile"
                    action={uploadURL}
                    accept="audio/mp3"
                    listType="picture"
                  >
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label="Levelup Audio">
          {getFieldDecorator("levelUpAudios", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: newWorld ? newWorld.levelUpAudios : null,
            rules: [
              {
                required: true,
                message: "Please upload audios!"
              }
            ]
          })(
            <Upload
              onPreview={this.onPreview}
              name="sampleFile"
              accept="audio/mp3"
              action={uploadURL}
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="World Transitions">
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Images">
                {getFieldDecorator("transitionImages", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  initialValue: newWorld ? newWorld.transitionImages : null,
                  rules: [
                    {
                      required: true,
                      message: "Please upload images!"
                    }
                  ]
                })(
                  <Upload
                    name="sampleFile"
                    accept="image/*"
                    action={uploadURL}
                    listType="picture"
                  >
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Audios">
                {getFieldDecorator("transitionAudios", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  initialValue: newWorld ? newWorld.transitionAudios : null,
                  rules: [
                    {
                      required: true,
                      message: "Please upload audios!"
                    }
                  ]
                })(
                  <Upload
                    onPreview={this.onPreview}
                    name="sampleFile"
                    accept="audio/mp3"
                    action={uploadURL}
                    listType="picture"
                  >
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Sound url={this.state.url} playStatus={this.state.status} />
      </Form>
    );
  }
}
