<template>
  <div class="container">
    <el-row class="flex" :getter="24">
      <div>
        企业资讯
      </div>

      <div>
        <el-input
          placeholder="请输入内容"
          v-model="keyWords"
          maxlength="20"
          prefix-icon="el-input__icon el-icon-search"
          @change="search"
          >
        </el-input>
      </div>
    </el-row>

    <el-row style="margin-left: 260px;">
      <div v-for="o in 6" :key="o">
        发布于 {{new Date().toLocaleTimeString()}}
        <el-card shadow="hover">
          <div class="flex">
            <el-image
              style="width: 40px; height: 40px"
              >
            </el-image>
            <div class="flex flex-col">
              <div>XXX产品</div>
              <el-tag>标签一</el-tag>
            </div>
          </div>
          <el-col>这是xxx发布的新产品</el-col> 
          <el-image
            style="width: 300px; height: 200px"
            >
            </el-image>
          <el-row :gutter="24">
            <i class="el-icon-edit">0</i>
            <i class="el-icon-share">1</i>
            <i class="el-icon-delete">2</i>
            <i class="el-icon-delete">2</i>
            <el-tag class="el-icon-delete" size="mini" type="info">方太产品</el-tag>
          </el-row>
        </el-card>
      </div>
      

    </el-row>
  </div>
</template>

<script>
  export default {
    name: '',

    data() {
      return {
        keyWords: null,   // 搜索内容
        checkList: ['联系电话', '销售名片', '企业微信', '企业公众号'],
        username: '',
        show1: false,
        show2: false,
        show3: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        bgUrl: '',
        logoUrl: ''
      }
    },
    methods: {
      // 搜索按钮
      search(){
        console.log(this.keyWords)
      }
      
    },
    computed: {

    },
    created() {

    }
  }

</script>
<style>
.el-row{
  display: flex;
  flex-wrap: wrap;
  
}
.el-card{
  width: 300px;
  margin-right: 20px;
  margin-bottom: 30px;
}
</style>
