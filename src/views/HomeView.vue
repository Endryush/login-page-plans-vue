<template>
 <div class="home">
  <div class="box-video">
    <h2>Olá João,</h2>

    <label>Seja bem-vindo a sua conta de hospedagem.</label>

    <div class="box-video__video my-32">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/y1AbyaKihNo" 
        frameborder="0" allow="autoplay; encrypted-media" 
        allowfullscreen
      />
    </div>

    <label>Caso tenha alguma dúvida, <span class="underline">visite nossa central de ajuda.</span></label>
  </div>
 </div>
</template>

<script>

export default {
  name: 'HomeView',

}
</script>
<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 60vw;
  }

  .box-video {
    width: 100%;
  }

  .box-video__video {
    height: 30rem;
  }

  @media screen and (max-width: 600px) {
    .home {
      height: auto;
      width: auto;
      padding: 32px 16px;
    }

    .box-video__video {
      height: 20rem;
    }
  }
</style>
