import { SI } from './si.ts'

export default function Portfolio() {
  text = SI('openai/gpt-oss-20b', 'Hello')
  alert(text)
  return (
    <div>
      <b>SAFE</b>
      <br/>
      Superintelligence Alignment through Financial Engineering
    </div>
  )
}
