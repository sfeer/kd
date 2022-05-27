<template>
  <Layout>
    <Header>header</Header>
    <Layout>
      <Sider>left sidebar</Sider>
      <Content>main content</Content>
      <Sider>right sidebar</Sider>
    </Layout>
    <Footer>footer</Footer>
  </Layout>
</template>

<script setup lang="ts">
  import { Layout } from 'ant-design-vue'
</script>
