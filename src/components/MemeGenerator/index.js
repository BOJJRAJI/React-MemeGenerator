import {Component} from 'react'
import {
  AppContainer,
  Heading,
  Label,
  FormContainer,
  InputEle,
  CustomSelect,
  CustomOption,
  Button,
  MemeContainer,
  Paragraph,
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
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  getUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  getTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  getBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeOptionID = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    console.log(activeFontSizeOptionId)

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state

    return (
      <MemeContainer bgImage={backgroundImageUrl} data-testid="meme">
        <Paragraph activeFontSizeId={activeFontSizeId}>{topText}</Paragraph>
        <Paragraph activeFontSizeId={activeFontSizeId}>{bottomText}</Paragraph>
      </MemeContainer>
    )
  }

  render() {
    const {
      activeFontSizeOptionId,
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state

    return (
      <AppContainer>
        <FormContainer>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="url">Image URL</Label>
          <InputEle
            id="url"
            type="text"
            value={backgroundImageUrlInput}
            placeholder="Enter the image URL"
            onChange={this.getUrl}
          />

          <Label htmlFor="top">Top Text</Label>
          <InputEle
            id="top"
            type="text"
            placeholder="Enter the Top Text"
            onChange={this.getTopText}
            value={topTextInput}
          />

          <Label htmlFor="bottom">Bottom Text</Label>
          <InputEle
            id="bottom"
            type="text"
            placeholder="Enter the Bottom Text"
            onChange={this.getBottomText}
            value={bottomTextInput}
          />

          <Label htmlFor="select">Font Size</Label>
          <CustomSelect
            id="select"
            value={activeFontSizeOptionId}
            onChange={this.onChangeFontSizeOptionID}
          >
            {fontSizesOptionsList.map(eachOption => (
              <CustomOption
                key={eachOption.optionId}
                value={eachOption.optionId}
              >
                {eachOption.displayText}
              </CustomOption>
            ))}
          </CustomSelect>
          <Button type="submit" onClick={this.submitForm} data-testid="testid">
            Generate
          </Button>
        </FormContainer>
        {this.renderMeme()}
      </AppContainer>
    )
  }
}

export default MemeGenerator
