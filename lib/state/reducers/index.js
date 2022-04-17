import authReducer from './auth';
import devotionReducer from './devotion';
import poemReducer from './poem';
import storyReducer from './story';
import formatReducer from './format';

const mainReducer = ({ auth, devotion, poem, story, format }, action) => ({
    auth: authReducer(auth, action),
    devotion: devotionReducer(devotion, action),
    poem: poemReducer(poem, action),
    story: storyReducer(story, action),
    format: formatReducer(format, action)
});

export default mainReducer;
