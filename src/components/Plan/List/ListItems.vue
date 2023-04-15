<template>
  <div :class="{'list-item__blur': blurContent}">
    <h4 class="list-item__title" v-html="title" />
    <template v-if="items?.length > 0">
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
          class="subtext mt-10">
          <img src="@/assets/img/icons/check.svg" alt="check-icon" />
          <span class="subtext__span" v-html="item" />
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'listItems',

    props: {
      title: {
        required: false,
        type: String
      },
      items: {
        required: false,
        type: Array
      },
      blurContent: {
        required: false,
        default: false
      }
    }
  }
</script>
<style scoped>
.list-item__title {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-small-alternative);
  line-height: var(--font-line-height-small--alternative);
  margin-top: 24px;
  color: var(--color-dark-alternative);
}

.list-item__blur {
  height: 96px;
  overflow: hidden;
  position: relative;
}

.list-item__blur::before {
  content: ""; /* criar um elemento pseudo antes da div */
  position: absolute; /* posicionamento absoluto para se sobrepor à div */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,rgba(255, 255, 255, 0.5) 100%, #FFFFFF 0%);
  z-index: 1; /* para garantir que o fundo fique atrás da div */
}

.subtext {
  color: var(--color-dark-alternative);
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-small-alternative);
  line-height: var(--font-line-height-small--alternative);
}

.subtext__span {
  margin-left: 8px;
}
</style>