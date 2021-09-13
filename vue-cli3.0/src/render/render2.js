// v-if 和 v-for
export default {
    name: 'render2',
    props: {
    },
    data(){
        return {
            items:[
            {name: '1111'},
            {name: '2222'},
            {name: '3333'},
          ],
        } 
    },
    render: function (createElement) {
        if (this.items.length) {
            return createElement('ul', this.items.map(function (item) {
                return createElement('li', item.name)
            }))
        } else {
            return createElement('p', 'No items found.')
        }
    },
    
}
