<template>
  <div>
    <section>
      <slot></slot>
    </section>

    <div v-show="codeVisible">
      <pre><code>{{ previewSourceCode }}</code></pre>
    </div>

    <div>
      <span @click="showSourceCode">查看代码</span>
    </div>
  </div>
</template>

<script>
  // import Prism from 'prismjs'
  // import '../assets/prism.css'

  const isDev = import.meta.env.MODE === 'development'

  export default {
    props: {
      compName: {
        type: String,
        default: '',
        require: true,
      },
      demoName: {
        type: String,
        default: '',
        require: true,
      },
    },

    data() {
      return {
        sourceCode: '',
        codeVisible: false,
      }
    },

    computed: {
      previewSourceCode() {
        return this.sourceCode.replace(/'\.\.\/\.\.\/index'/g, `'@tencent/my-kit'`)
      },
    },

    async mounted() {
      if (this.compName && this.demoName) {
        if (isDev) {
          this.sourceCode = (
            await import(/* @vite-ignore */ `../../packages/${this.compName}/docs/${this.demoName}.vue?raw`)
          ).default
        } else {
          this.sourceCode = await fetch(
            `${isDev ? '' : '/kd'}/packages/${this.compName}/docs/${this.demoName}.vue`
          ).then(res => res.text())
        }
      }
      await this.$nextTick()
      // Prism.highlightAll()
    },

    methods: {
      showSourceCode() {
        this.codeVisible = !this.codeVisible
      },
    },
  }
</script>
