<template>
  <div class="comment-info">
    <div class="title">
      <span>用户评价</span>
      <span>更多 ></span>
    </div>
    <div class="user-info" v-if="commentInfo.user !== undefined">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="comment-wrapper">
      <div class="comment">{{commentInfo.content}}</div>
      <div class="deatils">
        <!-- <span>{{commentInfo.created | showDate}}</span> -->
        <span>{{getDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="comment-img">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils.js'

export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  // filters: {
  //   showDate(value) {
  //     const date = new Date(value*1000)
  //     return formatDate(date, 'yyyy-MM-dd')
  //   }
  // },
  computed: {
    getDate() {
      const date = new Date(this.commentInfo.created*1000)
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>
  .comment-info {
    padding: 10px;  
    /* box-shadow: 0 0 1px rgba(0, 0, 0, 0.1); */
    padding-bottom: 20px;
  }

  .title {
    height: 40px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
  }

  .user-info {
    padding: 10px 0;
  }

  .user-info img {
    width: 50px;
    vertical-align: middle;
  }

  .user-info span {
    font-size: 20px;
    margin-left: 5px;
  }

  .comment {
    font-size: 16px;
    padding-bottom: 10px;
  }

  .deatils {
    font-size: 15px;
  }

  .deatils span {
    margin-right: 10px;
  }

  .comment-img img {
    width: 100px;
    height: 100px;
  }
</style>