<template>
<div>
  <Table border ref="selection" :columns="columns4" :data="data1"></Table>
  <Button @click="handleSelectAll(true)">Set all selected</Button>
  <Button @click="handleSelectAll(false)">Cancel all selected</Button> this.modal1 = false;
  <iviewModal :editItem="editItem" :modal1="modal1" @closeModal1="closeModal1"></iviewModal>{{modal1}}
</div>
</template>
<script>
import iviewModal from '../components/iviewModal'
export default {
  components: {
    iviewModal
  },
  data() {
    return {
      modal1: false,
      editItem: {},
      columns4: [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: '操作',
          key: 'action',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.showModal1(params)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    // this.remove(params.index)
                    // this.showModal1(params)

                  }
                }
              }, 'Delete')
            ]);
          }
        }
      ],
      data1: [{
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
    showModal1(params) {
      // console.log(params);
      this.editItem = params;
      this.modal1 = true;
    },
    closeModal1() {
      this.modal1 = false;
      console.log('closeModal1')
    }
  }
}
</script>
