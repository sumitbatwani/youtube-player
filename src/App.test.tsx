import { render } from '@testing-library/react';
import App from './App';
import YouTubeEmbedPlayer from './components/YouTubeEmbedPlayer';

test('renders app', () => {
  render(<App />);
});

test('render youtube player', () => {
  render(<YouTubeEmbedPlayer
    embedId='lLqRchtjN00'
    title=''
    width='1080'
    height='720'
  />);
});
