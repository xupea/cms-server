import React from "react";
import { Select } from "antd";
import { Factoid } from "../Modules/Factoid";
import { DIY } from "../Modules/DIY";
import { Slideshow } from "../Modules/Slideshow";
import { Video } from "../Modules/Video";

const Option = Select.Option;

export default class ModuleForm extends React.Component {
  state = {
    type: "factoid"
  };

  handleChange = value =>
    this.setState({
      type: value
    });

  render() {
    const { type } = this.state;
    let content;

    switch (type) {
      case "factoid":
        content = <Factoid />;
        break;
      case "video":
        content = <Video />;
        break;
      case "trivia":
        content = <Factoid />;
        break;
      case "slideshow":
        content = <Slideshow />;
        break;
      case "diy":
        content = <DIY />;
        break;
      default:
        break;
    }

    return (
      <div>
        <Select
          defaultValue="factoid"
          style={{ width: 220 }}
          onChange={this.handleChange}
        >
          <Option value="factoid">Factoid</Option>
          <Option value="video">Video</Option>
          <Option value="trivia">Trivia</Option>
          <Option value="slideshow">Slideshow</Option>
          <Option value="diy">DIY</Option>
          <Option value="anecdote">Anecdote</Option>
          <Option value="joke">Joke</Option>
        </Select>
        {content}
      </div>
    );
  }
}
