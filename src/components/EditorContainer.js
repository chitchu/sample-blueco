import React, { Component } from 'react';
import Embed from './EmbedContainer';
import Panel from 'rebass/dist/Panel';
import Section from 'rebass/dist/Section';
import Heading from 'rebass/dist/Heading';
import Input from 'rebass/dist/Input';

import Editor from './Editor';

import './EditorContainer.css';

class EditorContainer extends Component {
  state = {
    title: '',
    unit: 'c',
    showWind: true
  };

  handleTitleChange = ({ currentTarget: { value } }) => {
    this.setState(prevState => ({
      ...prevState,
      title: value
    }));
  };

  handleUnitChange = unit => {
    this.setState(prevState => ({
      ...prevState,
      unit
    }));
  };

  handleShowWindChange = showWind => {
    this.setState(prevState => ({
      ...prevState,
      showWind
    }));
  };

  handleEmbedLinkFocus = ({ currentTarget }) => {
    currentTarget.select();
  };
  render() {
    return (
      <Section mt={0} pt={0} mb={0} pb={0}>
        <div className="side-by-side">
          <div className="editor">
            <Panel>
              <Heading level={1}>Editor</Heading>
              <Editor
                title={this.state.title}
                unit={this.state.unit}
                showWind={this.state.showWind}
                onTitleChange={this.handleTitleChange}
                onUnitChange={this.handleUnitChange}
                onShowWindChange={this.handleShowWindChange}
              />
            </Panel>
            <Input
              value={
                `${window.location.href}embed/${encodeURI(this.state.title)}/${this.state.unit}/${this.state.showWind}`
              }
              name="embedlink"
              label="Embed link"
              onFocus={this.handleEmbedLinkFocus}
              readOnly
            />
          </div>
          <div className="embed-preview">
            <Panel>
              <Embed
                title={this.state.title}
                unit={this.state.unit}
                showWind={this.state.showWind}
              />
            </Panel>
          </div>
        </div>
      </Section>
    );
  }
}

export default EditorContainer;
