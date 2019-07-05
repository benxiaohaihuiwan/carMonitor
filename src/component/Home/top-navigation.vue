<template>
<el-tabs v-model="editableTabsValue" 
 closable @tab-remove="removeTab"
id="topNav">
  <el-tab-pane
    v-for="(item) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
  </el-tab-pane>
</el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>

<style>
#topNav {
    background-color: #EDEDED;
}
 #topNav .el-tabs__header{
     margin: 0 !important;
 }
/* .el-tabs--card>.el-tabs__header {
     border-bottom: 1 solid #EDEDED !important;
 } */
</style>
