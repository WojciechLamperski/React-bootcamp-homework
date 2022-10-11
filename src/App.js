import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import reactLogo from '../src/logo.svg';
import {GlobalStyles} from './components/styles/Global'

const theme={
  colorsLight:{
    headerFooterBackground: '',
    textMain: '',
    text: '',
    spanBackground: '',
    h1Background: '',
  },
  colorsDark:{
    headerFooterBackground: '',
    textMain: '',
    text: '',
    spanBackground: '',
    h1Background: '',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      < GlobalStyles />
      <div className="app">
      < Header text="Deleting users from list - The Website" logosrc={reactLogo} />
      <div className='wrapper'>
        < Content >          
        </Content >
        < Sidebar text="This website allows you to delete users from list, but you shouldn't do it someone put time and effort into placing them there, please show respect and don't input users name into that big input field below websites name BUT if you by any chance happen to do that calm down because its still not the end of the world ;) to delete the user you also have to click the DELETE button, so you can relax if you selected a user, as long as you do not click that big button that says DELETE we should all be able to be fine :) Ahh just grasp the beauty and harmony of this website with all the users intact :D" />
      </div>
      < Footer text="Footer" />
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;

    

