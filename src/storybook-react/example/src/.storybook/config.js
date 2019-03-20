import { configure } from '@storybook/react';

function loadStories() {
    require('../stories'); // 好きな場所のstoryをrequireできます。
}

configure(loadStories, module);
