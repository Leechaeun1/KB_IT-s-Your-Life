import { createApp } from 'vue';
import App from './App2.vue';

// 전역 컴포넌트 등록 방법
// 모든 것에 등록이 되기 때문에 파일이 커질 수 있다는 단점 => 비권장
// import CheckboxItem from './components/CheckBoxItem.vue';
// createApp(App).component('CheckboxItem', CheckboxItem).mount('#app');

createApp(App).mount('#app');
