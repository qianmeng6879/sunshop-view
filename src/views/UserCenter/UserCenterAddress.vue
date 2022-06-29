<template>
  <div>
    <div style="display: flex;">
      <h2>收获地址列表</h2>
      <a href="#" @click.prevent="onAddAddressButton" class="add_address">新增</a>
    </div>
    <el-dialog destroy-on-close v-model="dialogVisible" :title="isEditState ? '编辑收货地址' : '新增收货地址'" width="30%">
      <el-form label-position="top" label-width="100px">
        <el-form-item label="省份">
          <el-input v-model="addressObj.province"></el-input>
        </el-form-item>
        <el-form-item label="城市">
          <el-input v-model="addressObj.city"></el-input>
        </el-form-item>
        <el-form-item label="区域">
          <el-input v-model="addressObj.area"></el-input>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="addressObj.detail"></el-input>
        </el-form-item>
        <el-form-item label="收货人姓名">
          <el-input v-model="addressObj.name"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="addressObj.phone"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button v-if="isEditState" type="primary" @click="onEditAddressSubmit">修改</el-button>
          <el-button v-else type="primary" @click="onCreateAddressSubmit">新增</el-button>
        </span>
      </template>
    </el-dialog>
    <hr />
    <el-table :data="addressData" style="width: 100%">
      <el-table-column prop="province" label="省份" width="180" />
      <el-table-column prop="city" label="城市" width="180" />
      <el-table-column prop="area" label="地区" width="180" />
      <el-table-column prop="detail" label="详细地址" width="180" />
      <el-table-column prop="name" label="联系人姓名" width="180" />
      <el-table-column prop="phone" label="联系电话" />
      <el-table-column label="操作">
        <template #default="scoped">
          <el-button type="primary" @click="onEditAddressButton(scoped.row.id)">编辑</el-button>
          <el-popconfirm title="确定要删除吗?" @confirm="onRemoveAddressButton(scoped.row.id)">
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
import { getAddressListAPI, addAddressAPI, editAddresssAPI, removeAddressAPI } from '@/api'

export default {
  mounted() {
    getAddressListAPI().then(
      response => {
        this.addressData = response.data
      }
    )
  },
  setup() {
    let addressData = ref([])
    let dialogVisible = ref(false)
    let isEditState = ref(false)
    let addressObj = reactive({
      id: null,
      province: '',
      city: '',
      area: '',
      detail: '',
      name: '',
      phone: ''
    })

    return {
      addressData,
      dialogVisible,
      addressObj,
      isEditState
    }
  },
  methods: {
    onAddAddressButton() {
      this.isEditState = false
      let addKey = Object.keys(this.addressObj)

      addKey.forEach(element => {
        this.addressObj[element] = ''
      })
      this.dialogVisible = true

    },
    onCreateAddressSubmit() {
      addAddressAPI(this.addressObj).then(
        response => {
          if (response.data) {
            this.addressData.push(response.data)
            this.$message.success('新增收货地址成功')

          } else {
            this.$message.warn("新增收获地址失败，请稍后重试")
          }
          this.dialogVisible = false
        }
      )
    },

    onEditAddressButton(id) {
      let addKey = Object.keys(this.addressObj)
      for (let address of this.addressData) {
        if (address.id === id) {
          addKey.forEach(element => {
            this.addressObj[element] = address[element]
          })
          break
        }
      }

      this.isEditState = true
      this.dialogVisible = true
    },

    onEditAddressSubmit() {
      editAddresssAPI(this.addressObj.id, this.addressObj).then(
        () => {

          this.addressData = this.addressData.map(address => {
            if (address.id === this.addressObj.id) {
              for (let key of Object.keys(address)) {
                address[key] = this.addressObj[key]
              }
            }
            return address
          })

          this.dialogVisible = false
          this.$message.success('修改成功')
        }
      )
    },

    onRemoveAddressButton(id) {
      removeAddressAPI(id).then(
        () => {
          this.$message.success('删除成功')
          this.addressData = this.addressData.filter(element => element.id !== id)
        }
      )
    },
  }
};
</script>

<style scoped lang="less">
.add_address {
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

.add_address:hover {
  background: #ffd333;
  color: white;
}
</style>