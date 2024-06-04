import Foreground from "./components/Foreground"
import Background from "./components/background"
const App = () => {
  return (
    <div className="bg-zinc-800 h-screen w-full ">
      {/* background  */}
      <Background />

      {/* foreground */}
      <Foreground/>
    </div>
  )
}

export default App
