<template>
  <div class="about">
    <h1>This is an about page {{counterValueFromStore}}</h1>
  </div>
</template>

<script setup>
  const {counterValueFromStore} = useCounter()
</script>
