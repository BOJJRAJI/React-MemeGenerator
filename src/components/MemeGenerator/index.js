import {Component} from 'react'

import {
  BgContainer,
  FormContainer,
  Heading,
  LabelInputCon,
  Label,
  Input,
  Select,
  Option,
  Button,
  MemeContainer,
  SmallDvHeading,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    url: '',
    top: '',
    bottom: '',
    size: fontSizesOptionsList[0].optionId,
    showMeme: false,
  }

  render() {
    const {url, top, bottom, size, showMeme} = this.state
    return (
      <BgContainer>
        <FormContainer className="form-container">
          <Heading className="heading">Meme Generator</Heading>
          <LabelInputCon className="label-input-container">
            <Label className="label" htmlFor="top">
              Image Url
            </Label>
            <br />
            <Input
              type="text"
              id="top"
              placeholder="Enter The Image URL"
              onChange={e => this.setState({url: e.target.value})}
              value={url}
            />
          </LabelInputCon>
          <LabelInputCon className="label-input-container">
            <Label className="label" htmlFor="Image">
              Top Text
            </Label>
            <br />
            <Input
              type="text"
              id="Image"
              placeholder="Enter The Top Text"
              onChange={e => this.setState({top: e.target.value})}
              value={top}
            />
          </LabelInputCon>
          <LabelInputCon className="label-input-container">
            <Label className="label" htmlFor="Bottom">
              Bottom Text
            </Label>
            <br />
            <Input
              type="text"
              id="Bottom"
              placeholder="Enter The Bottom Text"
              value={bottom}
              onChange={e => this.setState({bottom: e.target.value})}
            />
          </LabelInputCon>
          <LabelInputCon className="label-input-container">
            <Label className="label" htmlFor="Bottom">
              Font Size
            </Label>
            <br />
            <Select
              id="size"
              onChange={e => this.setState({size: e.target.value})}
              value={size}
            >
              {fontSizesOptionsList.map(item => (
                <Option value={item.optionId} key={item.optionId}>
                  {item.displayText}
                </Option>
              ))}
            </Select>
          </LabelInputCon>
          <Button type="button" onClick={() => this.setState({showMeme: true})}>
            Generate
          </Button>
        </FormContainer>
        {showMeme && (
          <MemeContainer url={url} data-testid="meme">
            <SmallDvHeading>Meme Generator</SmallDvHeading>
            <Text size={size}>{top}</Text>
            <Text size={size}>{bottom}</Text>
          </MemeContainer>
        )}
      </BgContainer>
    )
  }
}

export default MemeGenerator
