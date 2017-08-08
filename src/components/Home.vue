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
        <div class="small-6 cell">
            <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[0].title}}
                </div>
                <div class="card-section">
                  <p>专门为技术开发者个人博客打造的评论插件系统，安装简单，及时反馈，用心为开发者服务</p>
                </div>
              </div>
            </div>
        </div>
        <div class="small-6 cell">
          <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[1].title}}
                </div>
                <div class="card-section">
                  <p>开放的评论API，可以允许您自己制作属于自己的评论插件</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="grid-x">
        <div class="small-6 cell">
          <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[2].title}}
                </div>
                <div class="card-section">
                  <p>提供强大的数据存储服务，保证稳定，数据不丢失，支持数据导出</p>
                </div>
              </div>
            </div>
        </div>
        <div class="small-6 cell">
          <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[3].title}}
                </div>
                <div class="card-section">
                  <p>保证开发者写文章的劳动所得，收益主要来源于评论插件广告、捐赠以及您个人开发的精美的评论插件主题</p>
                </div>
              </div>
            </div>
        </div>
      </div>

    <div class="grid-x">
        <div class="small-6 cell">
          <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[4].title}}
                </div>
                <div class="card-section">
                  <p>开发者再也不需要自行维护友链，开发者只需要收藏其他网站的链接即可</p>
                </div>
              </div>
            </div>
        </div>
        <div class="small-6 cell">
          <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[5].title}}
                </div>
                <div class="card-section">
                  <p>不同的网站，风格自然可能不一样，我们提供其他开发者开发的主题，开放下载，也许您应该请他喝一杯奶茶</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="grid-x">
        <div class="small-6 cell">
          <div class="card">
              <div class="card">
                <div class="card-divider">
                  {{features[6].title}}
                </div>
                <div class="card-section">
                  <p>统计您的文章被访问的次数非常重要，我们提供PV，IP访问统计功能</p>
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
      margin: 16px 32px 0 32px;
      .feature_title{
        text-align: center;
      }
    }

  .card{
    border: none;
    .card-divider{
      background: transparent;
      font-size: 24px;
    }
    .card-section{
      text-align: left;
    }
  }
  

  button{
    em{
      font-size: 18px;
      font-weight: bold;
    }
  }

</style>
