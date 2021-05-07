<template>
  <div class="dashboard-container">
    <el-drawer
      title="日期"
      :visible.sync="drawer"
      :direction="direction"
      >
      <el-calendar :first-day-of-week=7 >
        <template slot="dateCell" slot-scope="{date, data}">
          <p @click="hanldeClick(data)">
            {{ data.day.split('-').slice(2).join('-') }}<br />
          </p>
          <div class="red budge" v-for="(item,index) in dayOption" v-if="(data.day).indexOf(item.day)!=-1"></div>
        </template>
      </el-calendar>
      <div v-if="option.option">
        工作{{option.option}}
      </div>
    </el-drawer>
    <el-row class="flex"  >
      <!-- 左边 -->
      <el-col>
        <el-row class="flex">
          <el-card shadow="hover" v-for="o in 3" :key="o">
            <div  class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-row>
        
        <el-row class="flex">
          <el-card shadow="hover" v-for="o in 4" :key="o">
            <div  class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-row>

        <el-row class="flex">
          <el-card style="height: 370px;" shadow="hover" v-for="o in 2" :key="o">
            <div  class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-row>
        
      </el-col>
      <!-- 右边 -->
      <el-col :span="8">
        <div class="grid-content bg-purple-dark">
          <el-row>
            <el-col :span="13">
              <el-card class="flex-one" shadow="hover" >
                <div  class="text item">
                  {{'列表内容 ' }}
                </div>
              </el-card>
            </el-col>
            <el-col class="flex-one" :span="11">
              <el-card  shadow="hover" >
                <div  class="text item">
                  {{'列表内容 ' }}
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-card style="height: 320px;" shadow="hover" >
            <div  class="text item">
              {{'列表内容 ' }}
            </div>
          </el-card>
          <el-card style="height: 190px;" shadow="hover" >
            <div  class="text item">
              {{'列表内容 ' }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data(){
    return {
      dayOption: [
        {day:'2021-04-30' , option:'打工'},
        {day:'2021-04-10' , option:'打工'},
        {day:'2021-04-01' , option:'打工'},
        {day:'2021-04-02' , option:'打工'},
        {day:'2021-04-03' , option:'打工'},
        {day:'2021-04-04' , option:'打工'},
      ],
      value: new Date(),
      option: {},
      drawer: false,
      direction: 'rtl',
    }
  },
  methods:{
    hanldeClick(data) {
      this.option = {}
      this.dayOption.map(item => {
        if(item.day == data.day){
          this.option = item
        }
      })
    },
  },
  mounted(){
    console.log('el',this.$el)
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
  .el-card{
    flex: 1;
    height: 130px;
    
    margin: 10px;
  }
}
</style>
