<template>
  <div class="row align-middle">
    <div class="shortDescPart">
      <div class="title1">
        <span>专为开发者打造的评论插件系统</span>
      </div>
      <div class="title2">
        <span>友好、丰富、收益</span>
      </div>
      <div class="title3">
        <button type="button" class="button">开始吧 <em>!</em></button>
      </div>
    </div>

    <div class="features">
      <div class="grid-x">
        <div class="small-3 small-offset-2 cell">
            <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[0].title}}
                </div>
                <div class="card-section">
                  <h5>This is a card.</h5>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
        </div>
        <div class="small-3 small-offset-2 cell">
          <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[1].title}}
                </div>
                <div class="card-section">
                  <h5>This is a card.</h5>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="grid-x">
        <div class="small-3 small-offset-2 cell">
          <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[2].title}}
                </div>
                <div class="card-section">
                  <h5>This is a card.</h5>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
        </div>
        <div class="small-3 small-offset-2 cell">
          <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[3].title}}
                </div>
                <div class="card-section">
                  <h5>This is a card.</h5>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
        </div>
      </div>

    <div class="grid-x">
        <div class="small-3 small-offset-2 cell">
          <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[4].title}}
                </div>
                <div class="card-section">
                  <h5>This is a card.</h5>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
        </div>
        <div class="small-3 small-offset-2 cell">
          <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[5].title}}
                </div>
                <div class="card-section">
                  <h5>This is a card.</h5>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="grid-x">
        <div class="small-3 small-offset-2 cell">
          <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[6].title}}
                </div>
                <div class="card-section">
                  <h5>This is a card.</h5>
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
      features: [
        {title: '评论插件系统', desc: '', feas: []},
        {title: '开放API', desc: '', feas: []},
        {title: '共享数据服务', desc: '', feas: []},
        {title: '收益服务', desc: '', feas: []},
        {title: '友链', desc: '', feas: []},
        {title: '主题', desc: '', feas: []},
        {title: '统计', desc: '', feas: []}
      ]
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

  .card-divider{
    font-weight: bold;
  }
  .features{
      text-align: center;
      margin: 16px 0 0 0;
      .feature_title{
        text-align: center;
      }
    }

  
  .card-section{
    text-align: left;
  }

  button{
    em{
      font-size: 18px;
      font-weight: bold;
    }
  }

</style>
