<template>
<el-row :gutter="10">
  <el-card>
    <div slot="header">产品设置</div>
    <div>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将PDF文件拖入此处，或<em>点击上传</em></div>
        <div class="el-upload__text">大小不得超过10M</div>
        <div class="el-upload__text">建议上传16:9 或 4:3 的比例</div>
        <!-- <img v-if="showImage1" :src="showImage1" class="avatar el-icon-plus" /> -->
      </el-upload>
    </div>
  </el-card>
  <el-button type="primary" @click="clear" >清空</el-button>
  <el-button type="info" @click="next" >下一步</el-button>

</el-row>
  
</template>
<script>
export default {
  methods: {
    // 清空
    clear(){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    // 下一步
    next(){

    }
  }
}
</script>
<style>
  .el-upload-dragger{
    width: 500px;
    height: 400px;
    /* display: flex; */
    padding-top: 100px;
    box-sizing: border-box;
    /* justify-content: center; */
  }
</style>

