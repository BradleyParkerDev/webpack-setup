const counter = {
    count: 0,
    countElement: null as HTMLElement | null,
    incrementButton: null as HTMLElement | null,
    decrementButton: null as HTMLElement | null,

    setup(countId: string, incrementId: string, decrementId: string) {
        this.countElement = document.getElementById(countId)
        this.incrementButton = document.getElementById(incrementId)
        this.decrementButton = document.getElementById(decrementId)

        if (!this.countElement || !this.incrementButton || !this.decrementButton) {
            throw new Error('Counter elements not found')
        }

        this.incrementButton.addEventListener('click', () => this.increment())
        this.decrementButton.addEventListener('click', () => this.decrement())

        this.updateDOM()
    },

    increment() {
        this.count++
        this.updateDOM()
    },

    decrement() {
        if(this.count > 0){
            this.count--
            this.updateDOM()            
        }
        else{
            this.count = 0
        }

    },

    getCount() {
        return this.count
    },

    updateDOM() {
        if (this.countElement) {
            this.countElement.innerText = this.count.toString()
            console.log(`count: ${this.getCount()}`)
        }
    }
}

export default counter
