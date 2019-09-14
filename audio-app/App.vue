<template>
  <div class="container">
    <h1>Audio App</h1>
    <button @click="changeSidebarColor">Change sidebar color</button>
  </div>  
</template>

<script>
export default {
  name: 'AudioApp',
  methods: {
    changeSidebarColor() {
      window.parent.postMessage('tomato', '*');
    },
  },
};
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html,
body {
  width: 100%;
  height: 100%;
}

.container {
  width: 100%;
  height: 100%;
  background-color: tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: white;
  font-size: 40px;
}
button {
  margin-top: 20px;
  border: none;
  background-color: white;
  padding: 5px 10px;
  font-size: 30px;
  color: tomato;
  border-radius: 4px;

}
button:active {
  opacity: 0.6;
}
</style>
