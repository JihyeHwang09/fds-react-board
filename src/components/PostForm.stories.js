import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import PosrForm from './PostForm'
storiesOf('PostForm', module)
// 스타일을 테스트해보고 싶은 코드를 add 메소드로 주욱 붙여주기
.add('default', () => <PostForm />);
