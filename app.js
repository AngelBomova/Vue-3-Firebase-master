const app = Vue.createApp({
    //data, functions
    //template: '<h2>I am the template</h2>'
    data(){
        return{
            url: 'https://angelbomova.github.io/Portfolio-3/index.html',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'Patrick Rothfuss',  age: 'Age: 50', isFav: true},
                {title: 'the way of kings', author: 'Brandon Sanderson', age: 'Age: 45', isFav: true},
                {title: 'the final empire', author: 'Brandon Sanderson', age: 'Age: 45', isFav: true},
                {title: '1984', author: 'George Orwell', age: 'Age: 46', isFav: true},
                {title: 'title', author: 'author', age: 'Age: 0', isFav: false} // testing isFav: false
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks; // sets it to whatever it currently isn't
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
        computed: { //depends on other data
            filteredBooks(){
                return this.books.filter((book) => book.isFav)
            }
        } 
})

app.mount('#app') // injects this element into the id 'app'
