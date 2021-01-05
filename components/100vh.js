import { use100vh } from 'react-div-100vh'
 
const MyFullHeightExampleComponent = ({ children }) => {
  const height = use100vh()
  const halfHeight = height ? height : '100vh'
  return <div style={{ minHeight: halfHeight, paddingBottom: '20px'}}>{children}</div>
}

export default MyFullHeightExampleComponent