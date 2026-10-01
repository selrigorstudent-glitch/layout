 import './App.css'

function App() {
  return (
    <div className="container">
      <div className="header">Sean Rigor</div>

      <div className="content">
        <div className="leftColumn">
          <div className="hero">Hero</div>
          <div className="sidebar">Sidebar</div>
        </div>

        <div className="rightColumn">
          <div className="mainContent">
            Main Content
            <p className="note">
            
            </p>
          </div>
          <div className="extraContent">Extra Content</div>
        </div>
      </div>

      <div className="relatedContent">
        <div className="relatedImages">Related Images</div>
        <div className="relatedPosts">Related Posts</div>
      </div>

      <div className="footer">Footer</div>
    </div>
  )
}

export default App