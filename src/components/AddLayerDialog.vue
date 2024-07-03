<template>
    <div>
        <el-dialog :title='title' v-model="visible" with="600px">
            <div class="dialog-content">
                <form class="url-form">
                    <p style="width:80px; font-size:16px;margin-left: 20px;">图层名称:</p>
                    <el-input class="input" v-model="url" style="width:500px;"></el-input>
                </form>
                <form class="url-form">
                    <p style="width:80px; font-size:16px;margin-left: 20px;">url:</p>
                    <el-input class="input" v-model="url" style="width:500px;"></el-input>
                </form>
                <form class="url-form">
                    <p style="width:80px; font-size:16px;margin-left: 20px;">图层类型:</p>
                    <el-select v-model="value" placeholder="Select"  style="width: 240px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </form>
                <form class="url-form">
                    <p style="width:80px; font-size:16px;margin-left: 20px;">坐标系:</p>
                    <el-radio-group v-model="radio" style="margin-left:5px">
                        <el-radio :value="3">4326</el-radio>
                        <el-radio :value="6">4490</el-radio>
                        <el-radio :value="9">3857</el-radio>
                    </el-radio-group>
                </form>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="handleCancel">取消</el-button>
                    <el-button @click="handleConfirm">确认</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const url = ref('')
const title = ref('')
const value = ref('')
const radio = ref(3)
let visible = ref(false)

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

/**
 *  1.只暴露提供一个入口函数————openDialog()，保持组件内部封闭性
 *  2.数据交互尽量通过 openDialog() 方法来传递，减少外部状态依赖，固定的配置项参数才考虑用 props
 */

const emit = defineEmits(['confirm'])

// 打开弹窗 -- 可通过接收参数data来展示父组件的数据
const openDialog = (data) => {
    visible.value = true
    title.value = data['title']
    url.value = data['data']['name']
    // console.log('url:', url, data['data']['name'])
    // console.log('data:', data);
}
// 提交
const handleConfirm = () => {
    emit('confirm', '我是传给父组件的数据222')
    visible.value = false
}
// 关闭
const handleCancel = () => {
    visible.value = false
}






// 暴露给父组件
defineExpose({
    openDialog
})

</script>

<style scoped></style>
