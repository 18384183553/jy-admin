<template>
  <div class="container">
    <el-row class="flex" :getter="20">
      <el-col :span="6">
        <div>
          aside
        </div>
      </el-col>
      <el-col :span="6"></el-col>
      <el-col>
        <el-collapse>
          <el-collapse-item title="基本信息" name="1" @click="show1 = !show1">
            <el-card>
              <el-form ref="form" :model="form" label-width="80px" >
                <el-form-item label="活动名称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="活动区域">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="活动形式">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
              </el-form>
            </el-card>
          </el-collapse-item>
        </el-collapse>
        <el-collapse>
          <el-collapse-item title="视觉设置" name="2" @click="show2 = !show2">
            <el-card class="upload-img">
              <div class="flex flex-between">
                <span>企业logo:</span>
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false" :on-success="handleLogoSuccess" :before-upload="beforeLogoUpload">
                  <img v-if="logoUrl" :src="logoUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
              <div class="flex flex-between">
                <span>背景墙:</span>
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false" :on-success="handleBgSuccess" :before-upload="beforeBgUpload">
                  <img v-if="bgUrl" :src="bgUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>

            </el-card>
          </el-collapse-item>
        </el-collapse>
        <el-collapse >
          <el-collapse-item  title="视觉设置" name="3" @click="show3 = !show3">
            <el-card>
              <div>请填写并勾选允许在首页选择的联系方式,请勾选</div>
              <div class="check-box">
                <el-checkbox-group v-model="checkList">
                  <div class="flex flex-center flex-between" style="margin-bottom: 10px;" v-for="(o,i) in checkList"
                    :key="i">
                    <div>
                      <el-checkbox :label="o"></el-checkbox>
                    </div>

                    <div class="input-wrap">
                      <el-input v-model="username" placeholder="用户名" @keyup.enter.native="submitForm('param')">
                      </el-input>
                    </div>
                  </div>
                </el-checkbox-group>
              </div>

            </el-card>
          </el-collapse-item>
        </el-collapse>
        <div class="flex">
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: '',

    data() {
      return {
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
      onSubmit() {
        this.$message.success('创建成功')
      },
      handleLogoSuccess(res, file) {
        // this.logoUrl = URL.createObjectURL(file.raw);
      },
      handleBgSuccess(res, file) {
        // this.bgUrl = URL.createObjectURL(file.raw);
      },
      beforeLogoUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 750 / 750 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      beforeBgUpload() {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 750 / 750 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
    computed: {

    },
    created() {

    }
  }

</script>
<style>
  .input-wrap {
    width: 250px;
  }

  .check-box {
    width: 100%;
    justify-content: space-between;
    padding: 50px 250px 50px 100px;
    box-sizing: border-box;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .upload-img {
    padding: 50px 200px 50px 100px;
    box-sizing: border-box;
  }

</style>
