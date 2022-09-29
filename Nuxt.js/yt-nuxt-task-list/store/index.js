


export const state = () => ({
	tasks: [],
	data: '',
	counter: 10,
	loadData: []
	
})

export const mutations = {
	ADD_TASK(state, task) {
		state.tasks = [{ content: task, done: false }, ...state.tasks];
	},
	REMOVE_TASK(state, task) {
		state.tasks.splice(state.tasks.indexOf(task), 1);
	},
	TOGGLE_TASK(state, task) {
		task.done = !task.done;
	},
	increment(state) {
		state.counter++
	},
	setPostState(state,posts){
		state.loadData=posts
	}
}

export const actions = {
	
	nuxtServerInit(vuexContext, context) {
	  return axios.get('https://jsonplaceholder.typicode.com/todos')
	  .then(res=>{
		const data = [];
		for(const key in res.data){
			data.push({...res.data[key],id:key})
		}
		vuexContext.commit("setPostState",data)
	  }).catch(e=>context.error(e));
	}
}

export const getters = {
	// นำ state ไปใช้งาน
	getAllPosts(state) {
	  return state.loadData
	}
}
