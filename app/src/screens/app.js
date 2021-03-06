import React from 'react'
import { withTheme } from 're-theme'
import { get } from 'jsutils'
import {
  Readme,
  ReuseRefExample,
  Section,
  ThemeProviderExample,
  WithThemeExample,
  UseThemeExample,
  UseThemeActiveExample,
  UseThemeFocusExample,
  UseThemeHoverExample,
} from '../components'
import ForkMeOnGithub from 'fork-me-on-github'

export const AppScreen = withTheme(props => {
  
  const { theme } = props

  const appStyle = theme.join(
    get(theme, 'layout.full.height'),
    get(theme, 'layout.full.width'),
    { marginTop: 20 }
  )

  const gridStyle = theme.join(
    get(theme, 'margin.bottom')
  )

  return (
    <div style={ appStyle } >

      <ForkMeOnGithub
        repo="https://https://github.com/simpleviewinc/sv-re-theme"
        colorBackground="black"
        colorOctocat="white"
      />

      <Section
        style={ gridStyle }
        title={ 'ReTheme' }
        theme={ theme }
        toggled={ true }
        Element={ Readme }
      />

      <Section style={ gridStyle } title={ 'Provider' } theme={ theme } >
        <ThemeProviderExample />
      </Section>

      <Section style={ gridStyle } title={ 'HOC' } theme={ theme } >
        <WithThemeExample />
      </Section>

      <Section style={ gridStyle } title={ 'Hooks' } theme={ theme } >
        <UseThemeExample />
        <UseThemeHoverExample />
        <UseThemeActiveExample />
        <UseThemeFocusExample />
        <ReuseRefExample />
      </Section>

    </div>
  )

})

