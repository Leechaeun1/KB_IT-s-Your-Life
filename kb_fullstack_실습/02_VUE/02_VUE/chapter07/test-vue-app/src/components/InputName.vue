<template>
  <div style="border: solid 1x gray; padding: 5px">
    이름: <input type="text" v-model="name" />
    <!-- nameChanged라는 이벤트 명으로 name을 객체로 감싸서 부모 컴포넌트로 전달 -->
    <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
  </div>
</template>
<script>
export default {
  name: 'InputName',
  emits: {
    namedChanged: (e) => {
      return e.name && typeof e.name === 'string' && e.name.trim().length >= 3
        ? true
        : false;
    },
  },
  data() {
    return { name: '' };
  },
};
</script>
