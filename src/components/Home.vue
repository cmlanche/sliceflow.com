<template>
  <div class="row align-middle">
    <div class="shortDescPart">
      <div class="title1">
        <span>简单、简洁的评论插件系统</span>
      </div>
      <div class="title2">
        <span>专为程序员打造</span>
      </div>
      <div class="title3">
        <button type="button" class="button">下载</button>
      </div>
    </div>

    <div class="feature">
      <div class="grid-x">
        <div class="small-3 small-offset-2 cell">
            <div class="card">
              <div class="card" style="width: 300px;">
                <div class="card-divider">
                  This is a header
                </div>
                <img src="../assets/img/head.jpg">                
                <div class="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
        </div>
        <div class="small-3 small-offset-2 cell">
          <div class="card">
              <div class="card" style="width: 300px;">
                <div class="card-divider">
                  This is a header
                </div>
                <img src="../assets/img/head.jpg">                
                <div class="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="grid-x">
        <div class="small-3 small-offset-2 cell">
          <div class="card">
              <div class="card" style="width: 300px;">
                <div class="card-divider">
                  This is a header
                </div>
                <img src="../assets/img/head.jpg">                
                <div class="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
        </div>
        <div class="small-3 small-offset-2 cell">
          <div class="card">
              <div class="card" style="width: 300px;">
                <div class="card-divider">
                  This is a header
                </div>
                <img src="../assets/img/head.jpg">                
                <div class="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'cmlanche',
    };
  },
};
</script>

<style lang="scss" scoped>
  .image {
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .call-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    font-weight: 600;
    text-transform: uppercase;
  }

  .shortDescPart{
    background-color: #34495e;
    padding-top: 96px;
    padding-bottom: 32px;
    text-align: center;
    color: #d1d2d4;    
    
    .title1{
      font-size: 50px;
      font-family: Lato,"Helvetica Neue",Helvetica,Arial,sans-serif;
      font-weight: 300;
      color: white;
    }

    .title2{
      font-size: 40px;
      font-weight: 100;
    }

    .title3{
      button{
        color: white;
        font-size: 16px;
        margin-top: 32px;
        border-radius: 5px;
        width: 120px;
      }
    }
  }

  .feature{
      text-align: center;
      .feature_title{
        text-align: center;
      }
    }

</style>
