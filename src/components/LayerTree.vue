<template>
  <div class="treeDiv">
    <div class="title-div">
      <p>图层管理</p>
      <el-button class="add-button" @click="openDemoDialog" type="primary" name="button">新增</el-button>
      <a class="close-button" @click="closeDialog">X</a>
    </div>

    <el-tree style="max-width: 600px" :data="dataSource" show-checkbox node-key="id" default-expand-all
      :expand-on-click-node="false" :render-content="renderContent" />
  </div>
  <AddLayerDialog ref="demoDialogRef" @confirm="handleOnConfirm"></AddLayerDialog>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
// import { getAssetsFile } from '@/utils/images';
import AddLayerDialog from './AddLayerDialog.vue';
import type Node from 'element-plus/es/components/tree/src/model/node'

// function addLayer(){
//   // return null;
//   alert(`add`);
//   AddLayer.show=true
// };
let demoDialogRef = ref()
// 通过ref调用子组件的方法
const openDemoDialog = () => {
  // 可以通过openDialog方法向弹窗内部传递参数，如弹窗要展示的数据
  demoDialogRef.value.openDialog({ title:'新增图层',data: { name: '小白很白' } })
}
// 在弹窗里点击提交
const handleOnConfirm = (data) => {
  alert('新建成功');
  console.log('data', data);
}

function closeDialog() {
  alert(`close`);
}

interface Tree {
  id: number
  label: string
  rootNode: boolean
  children?: Tree[]
}
let id = 1000

const append = (data: Tree) => {
  const newChild = { id: id++, label: 'testtest', rootNode: false, children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
}

const remove = (node: Node, data: Tree) => {
  const parent = node.parent
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  dataSource.value = [...dataSource.value]
}

const renderContent = (
  h,
  {
    node,
    data,
    store,
  }: {
    node: Node
    data: Tree
    store: Node['store']
  }
) => {
  if (!data.rootNode) {
    return h(
      'span',
      {
        class: 'custom-tree-node',
      },
      h('span', null, node.label),
      h(
        'span',
        null,
        h(
          'a',
          {
            class: 'edit-bar',
            style: 'position: absolute;right:50px',
            onClick: () => append(data),
          },
          '编辑'
        ),
        h(
          'a',
          {
            class: 'edit-bar',
            style: 'position: absolute;right:10px',
            onClick: () => remove(node, data),
          },
          '删除'
        )
      )
    )
  }
  else {
    return h(
      'span',
      {
        class: 'custom-tree-node',
      },
      h('span', null, node.label))
  }
}

const dataSource = ref<Tree[]>([
  {
    id: 1,
    label: '影像',
    rootNode: true,
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        rootNode: false,
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
            rootNode: false,
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
            rootNode: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    rootNode: true,
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
        rootNode: false,
      },
      {
        id: 6,
        label: 'Level two 2-2',
        rootNode: false,
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    rootNode: true,
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
        rootNode: false,
      },
      {
        id: 8,
        label: 'Level two 3-2',
        rootNode: false,
      },
    ],
  },
])
</script>

<style scoped>
@import './style/layerStyle.css';
</style>
