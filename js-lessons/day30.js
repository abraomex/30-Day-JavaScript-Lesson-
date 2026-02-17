// Day 30 — Project: To-do Logic (no DOM)
// Example: simple in-memory to-do manager functions (no UI)
const todos = [];
function addTodo(text){
  const item = { id: Date.now().toString(), text, done: false };
  todos.push(item);
  return item;
}
function toggleTodo(id){
  const t = todos.find(x=>x.id===id);
  if(t) t.done = !t.done;
}
function removeTodo(id){
  const idx = todos.findIndex(x=>x.id===id);
  if(idx>=0) todos.splice(idx,1);
}
// demo
const t1 = addTodo('Learn JS');
const t2 = addTodo('Build app');
console.log('todos after add', todos);
toggleTodo(t1.id);
console.log('after toggle', todos);
removeTodo(t2.id);
console.log('after remove', todos);
// Exercise: extend with editTodo and persist logic to localStorage (browser).
