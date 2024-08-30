const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                {
                    text: 'Alzarsi dal letto',
                    done: false,
                },
                {
                    text: 'Lavare la faccia e i denti',
                    done: false,
                },
                {
                    text: 'Fare colazione',
                    done: false,
                },
                {
                    text: 'Fare la doccia',
                    done: false,
                },
                {
                    text: 'Pranzare',
                    done: false,
                },
                {
                    text: 'Fare merenda',
                    done: false,
                },
                {
                    text: 'Andare a mare',
                    done: false,
                },
                {
                    text: 'Fare la doccia',
                    done: false,
                },
                {
                    text: 'Cenare',
                    done: false,
                },
                {
                    text: 'Andare a dormire',
                    done: false,
                }
            ],    
        }
    },

    methods: {
        isDone(i) {
            this.todos[i].done = !this.todos[i].done;
        },
        deleteItem(i) {
            this.todos.splice(i, 1);
        },
        addItem() {
            if (this.newTodoText.trim() !== '') { 
                this.todos.push({ text: this.newTodoText, done: false });
                this.newTodoText = ''; 
            }   
        }
    }
}).mount('#app')