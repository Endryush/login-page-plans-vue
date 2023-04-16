<template>
  <div>
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


.subtext__span {
  margin-left: 8px;
}

@media screen and (max-width: 600px) {
  .list-item__title {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-small);
    line-height: var(--font-line-height-small);
    margin-top: 16px;
    color: var(--color-dark-alternative);
  }
}
</style>