import React from 'react'
import BlogContextDemo from './BlogContextDemo';
const blogInfo={
  React:{
    post:"Learn useContext Hooks",
    author:"varun k"
  },
  NodeJS:{
    post:"Node commands",
    author:"veena M"
  }
};
export const BlogContext=React.createContext(blogInfo);

function App() {
  return (
    <div className="App">
      <div>
        <h1>useContext() Demo</h1>
        <BlogContext.Provider value={blogInfo}>
          <BlogContextDemo/>
        </BlogContext.Provider>
      </div>
      
      
    </div>
  );
}

export default App;
