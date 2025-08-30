import { SI } from "./si.ts"

export default function Portfolio() {
  let testResponse = SI("openai/gpt-oss-20b", "Hello")
  alert(testResponse)
  return (
    <div>
      <b>SAFE</b>
      <br/>
      Superintelligence Alignment through Financial Engineering
    </div>
  )
}
