import { SI } from "./si.ts"

export default function Portfolio() {
  let testResponse = SI("openai/gpt-oss-20b", "Hello")
  
  return (
    <div>
      <b>SAFE</b>
      <br/>
      Superintelligence Alignment through Financial Engineering
      <br/>
      {testResponse}
    </div>
  )
}
