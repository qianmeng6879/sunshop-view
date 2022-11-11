<template>
  <div>
    <div style="display: flex;">
      <h2>收获地址列表</h2>
      <a href="#" @click.prevent="onAddReceiveButton" class="add_Receive">新增</a>
    </div>
    <el-dialog destroy-on-close v-model="dialogVisible" :title="isEditState ? '编辑收货地址' : '新增收货地址'" width="30%">
      <el-form label-position="top" label-width="100px">
        <el-form-item>
          <el-cascader :props="props" />
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="ReceiveObj.detail"></el-input>
        </el-form-item>
        <el-form-item label="收货人姓名">
          <el-input v-model="ReceiveObj.name"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="ReceiveObj.phone"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button v-if="isEditState" type="primary" @click="onEditReceiveSubmit">修改</el-button>
          <el-button v-else type="primary" @click="onCreateReceiveSubmit">新增</el-button>
        </span>
      </template>
    </el-dialog>
    <hr />
    <el-table :data="ReceiveData" style="width: 100%">
      <el-table-column prop="province" label="省份" />
      <el-table-column prop="city" label="城市" />
      <el-table-column prop="area" label="地区" />
      <el-table-column prop="detail" label="详细地址" />
      <el-table-column prop="name" label="联系人姓名" />
      <el-table-column prop="phone" label="联系电话" />
      <el-table-column label="操作">
        <template #default="scoped">
          <el-button type="primary" @click="onEditReceiveButton(scoped.row.id)">编辑</el-button>
          <el-popconfirm title="确定要删除吗?" @confirm="onRemoveReceiveButton(scoped.row.id)">
            <template #reference>
              <el-button type="danger">删除</el-button>
            </template>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { getAddressListAPI, getReceiveListAPI, addReceiveAPI, editReceivesAPI, removeReceiveAPI } from '@/api'

export default {
  mounted() {
    getReceiveListAPI().then(
      response => {
        this.ReceiveData = response.data.data
      }
    )
  },
  data() {
    return {
      provinceList: [],
      cityList: [],
      areaList: [],
      streetList: []
    }
  },
  setup() {
    let ReceiveData = ref([])
    let dialogVisible = ref(false)
    let isEditState = ref(false)
    let ReceiveObj = reactive({
      id: null,
      province: '',
      city: '',
      area: '',
      detail: '',
      name: '',
      phone: ''
    })

    return {
      ReceiveData,
      dialogVisible,
      ReceiveObj,
      isEditState
    }
  },
  methods: {
    onAddReceiveButton() {
      this.isEditState = false
      let addKey = Object.keys(this.ReceiveObj)

      addKey.forEach(element => {
        this.ReceiveObj[element] = ''
      })
      this.dialogVisible = true

      // 第一次加载省级数据
      if (this.provinceList.length == 0) {
        getAddressListAPI(0).then(
          (response) => {
            this.provinceList = response.data.data
          }
        )
      }
    },
    onCreateReceiveSubmit() {
      addReceiveAPI(this.ReceiveObj).then(
        response => {
          if (response.data) {
            this.ReceiveData.push(response.data)
            this.$message.success('新增收货地址成功')

          } else {
            this.$message.warn("新增收获地址失败，请稍后重试")
          }
          this.dialogVisible = false
        }
      )
    },

    onEditReceiveButton(id) {
      let addKey = Object.keys(this.ReceiveObj)
      for (let Receive of this.ReceiveData) {
        if (Receive.id === id) {
          addKey.forEach(element => {
            this.ReceiveObj[element] = Receive[element]
          })
          break
        }
      }

      this.isEditState = true
      this.dialogVisible = true
    },

    onEditReceiveSubmit() {
      editReceivesAPI(this.ReceiveObj.id, this.ReceiveObj).then(
        () => {

          this.ReceiveData = this.ReceiveData.map(Receive => {
            if (Receive.id === this.ReceiveObj.id) {
              for (let key of Object.keys(Receive)) {
                Receive[key] = this.ReceiveObj[key]
              }
            }
            return Receive
          })

          this.dialogVisible = false
          this.$message.success('修改成功')
        }
      )
    },

    onRemoveReceiveButton(id) {
      removeReceiveAPI(id).then(
        () => {
          this.$message.success('删除成功')
          this.ReceiveData = this.ReceiveData.filter(element => element.id !== id)
        }
      )
    },
  }
};
</script>

<style scoped lang="less">
.add_Receive {
  display: block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-left: auto;
  color: #ffd333;
  font-size: 18px;
  border: 1px solid #ffd333;
  border-radius: 5px;
}

.add_Receive:hover {
  background: #ffd333;
  color: white;
}
</style>